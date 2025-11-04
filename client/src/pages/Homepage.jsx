import React from 'react'
import toast from 'react-hot-toast'
import NavBar from '../components/NavBar'
import { useState } from 'react'
import RateLimitUI from '../components/RateLimitUI'
import { useEffect } from 'react'
import axios from 'axios'
import NoteCard from '../components/NoteCard'

const Homepage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [Loading, setLoading] = useState(true);

  // Auto-clear rate limit after 20 seconds
  useEffect(() => {
    if (isRateLimited) {
      const timer = setTimeout(() => {
        setIsRateLimited(false);
      }, 20000); // 20 seconds

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [isRateLimited]);

  useEffect(() => {
    async function fetchData(URL) {
      try {
        const res = await axios.get(URL);
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false)
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response && error.response?.status === 429) {
          setIsRateLimited(true);
          toast.error('Too many requests! Please wait.', { id: 'rate-limit' });
        } else {
          // Use a fixed toast id to avoid duplicate toasts in React StrictMode
          toast.error('Failed to fetch notes', { id: 'fetch-notes' })
        }
      } finally {
        setLoading(false);
      }
    }
    const port = 8080;
    const URL = `http://localhost:${port}/api/notes`;
    fetchData(URL);
  }, [])

  const handleDelete = (deletedId) => {
    setNotes(notes.filter(note => note._id !== deletedId));
  };

  return (
    <div className='min-h-screen'>
      <NavBar />

      {isRateLimited && <RateLimitUI />}

      <div
        className='max-w-7xl mx-auto mt-6'>
        {Loading && <div className='text-3xl font-bold font-mono text-center text-primary py-10'>Loading notes....</div>}

        {notes.length > 0 && !isRateLimited && (
          <div
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Homepage
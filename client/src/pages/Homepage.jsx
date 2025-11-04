import React from 'react'
import toast from 'react-hot-toast'
import NavBar from '../components/NavBar'
import { useState } from 'react'
import RateLimitUI from '../components/RateLimitUI'
import { useEffect } from 'react'
import axios from 'axios'

const Homepage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData(URL) {
      try {
        const res = await axios.get(URL);
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false)
      } catch (error) {
        console.error('Error fetching data');
        if(error.response.status === 429){
          setIsRateLimited(true);
        }else{
          toast.error('Failed to fetch notes')
        }
      }
    }
    setURL = 'http://localhost:5173'
    fetchData(setURL);
  }, [])
  return (
    <div className='min-h-screen border-4 border-gray-400 border-dashed'>
      <NavBar />

      {/* <div className='flex flex-col items-center m-4 gap-4'>
        <h2 className='text-center p-2 m-4 text-5xl'>Homepage</h2>
        <button
          onClick={() => { toast.success('here we go again') }}
          className='btn btn-accent text-center w-45'>Click Me</button>
      </div> */}

      {isRateLimited && <RateLimitUI />}
    </div>
  )
}

export default Homepage
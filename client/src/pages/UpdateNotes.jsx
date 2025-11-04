import { ArrowLeft } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom'
import api from '../lib/axios';

const UpdateNotes = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();

  
  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`http://localhost:8080/api/notes/${id}`);
        setTitle(res.data.title || '');
        setContent(res.data.content || '');
      } catch (error) {
        console.error('Error fetching note:', error);
        toast.error('Failed to load note');
        navigate('/');
      } finally {
        setFetching(false);
      }
    };

    if (id) {
      fetchNote();
    }
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      toast.error('All fields are required');
      return;
    }

    setLoading(true);
    try {
      await api.put(`/notes/${id}`, { title, content });
      toast.success('Note updated successfully!');
      navigate("/");
    } catch (error) {
      console.error('Error updating note', error);
      toast.error('Failed to update note!');
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary">here</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Link to={"/"} className="btn btn-ghost mb-6">
            <ArrowLeft className='size-5' />
            <span className='text-xl font-bold text-gray-400 font-mono'>
              Back to Notes
            </span>
          </Link>

          <div className='card bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title text-2xl mb-6'>Edit Note</h2>

              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className="form-control">
                  <label className="label mb-3">
                    <span className="label-text font-semibold">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder='Enter your note title...'
                    className='input input-bordered input-primary border-3 border-dashed w-full text-lg'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                <div className="form-control">
                  <label className="label mb-4">
                    <span className="label-text font-semibold">Content</span>
                  </label>
                  <textarea
                    placeholder='Write your note content here...'
                    className='textarea textarea-bordered textarea-primary border-3 border-dashed w-full h-64 text-base leading-relaxed'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  />
                </div>

                <div className='card-actions justify-end pt-4'>
                  <button
                    type='submit'
                    className='btn btn-primary btn-lg'
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="loading loading-spinner"></span>
                        Updating...
                      </>
                    ) : (
                      'Update Note'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateNotes
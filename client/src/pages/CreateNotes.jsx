import { ArrowLeft } from 'lucide-react';
import { useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'
import api from '../lib/axios';

const CreateNotes = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true)
    try {
      async function postNote(URL) {
        try {
          await api.post(URL, { title, content })
          toast.success('Note Created succcessfully!')
          navigate("/")
        } catch (error) {
          console.error('Error creating note', error)
          if (error.response.status === 429) {
            toast.error('SLOW DOWN!, You are creating too fast!', {
              duration: 4000,
              icon: "😐"
            })
          }
          toast.error('Failed to create note!');
        } finally {
          setLoading(false);
        }
      }
      postNote('/post')
    } catch (error) {
      console.error('Error creating note', error)
      if (error.response.status === 429) {
        toast.error('SLOW DOWN!, You are creating too fast!', {
          duration: 4000,
          icon: "😐"
        })
      }
      toast.error('Failed to create note!');
    }
  };

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
              <h2 className='card-title text-2xl mb-6'>Create New Note</h2>

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
                        Creating...
                      </>
                    ) : (
                      'Create Note'
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

export default CreateNotes
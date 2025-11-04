import React from 'react'
import toast from 'react-hot-toast'

const Homepage = () => {
  return (
    <div className='flex flex-col items-center m-4 gap-4'>
      <h2 className='text-center p-2 m-4 text-5xl'>Homepage</h2>
      <button
        onClick={() => { toast.success('here we go again') }}
        className='btn btn-accent text-center w-45'>Click Me</button>
    </div>
  )
}

export default Homepage
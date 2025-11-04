import React from 'react'
import toast from 'react-hot-toast'

const Homepage = () => {
  return (
    <div>
      <h2 className='text-center p-2 m-4 text-5xl'>Homepage</h2>
      <button
        onClick={() => { toast.success('here we go again') }}>Click Me</button>
    </div>
  )
}

export default Homepage
import React from 'react'
import { useState } from 'react'

const CreateNotes = () => {
  const [[title, setTitle],[content, setContent]] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSubmit = ()=>{};
  
  return (
    <div>CreateNotes</div>
  )
}

export default CreateNotes
import React from 'react'
import {Avatar}  from '@mui/material';
import {useState} from 'react';

export default function Main_input_post() {
  const [input, setInput] = useState('')
  return (

  

    <div className='input__post'>
        <Avatar src={null} />
        <form>
            <input type='text' placeholder='What is on your mind?' />
            <input type='submit' value='hidden' />
        </form>
    </div>
  )
}

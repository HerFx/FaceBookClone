import React from 'react'
import {Avatar}  from '@mui/material';

export default function main_input_post() {
  return (
    <div className='input__post'>
        <Avatar src={null} />
        <input type="text" placeholder="What's on your mind?" />
    </div>
  )
}

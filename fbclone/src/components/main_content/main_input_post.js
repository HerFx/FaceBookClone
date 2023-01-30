import React from 'react'
import {Avatar}  from '@mui/material';
import {useState} from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

export default function Main_input_post() {
  const [input, setInput] = useState('')
  return (

  
  <div className='input__post_box'>
    <div className='input__post'>
        <Avatar src={null} className='input__avatar'/>
        <form>
            <input type='text' placeholder='What is on your mind?' />
        </form>
    </div>
    <div className='input__post_options'>
        <div className='input__post_option'>
            <VideocamIcon style={{color: 'red'}} />
            <h4>Live Video</h4>
        </div>
        <div className='input__post_option'>
            <PhotoLibraryIcon style={{color: 'green'}} />
            <h4>Photo/Video</h4>
        </div>
        <div className='input__post_option'>
            <InsertEmoticonIcon style={{color: 'orange'}} />
            <h4>Feeling/Activity</h4>
        </div>
    </div>
  </div>
  )
}

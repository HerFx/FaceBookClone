import React from 'react'
import {Avatar}  from '@mui/material';
import {useState} from 'react';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Main_post from './Main_post';

export default function Main_input_post() {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])
  const [file, setFile] = useState()
  const [fileUrl, setFileUrl] = useState()
  
  const onChange = (e) => {
    setInput(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setPosts([...posts, input])
        setInput('')
    }

    const onFileChange = (e) => {
       setFile(e.target.files[0])
       const reader = new FileReader()
         reader.onloadend = () => {
              setFileUrl(reader.result)
            }
            reader.readAsDataURL(e.target.files[0])
    }


  return (
<>
<div className='input__post_box'>
    <div className='input__post'>
        <Avatar src={null} className='input__avatar'/>
        <form onSubmit={onSubmit}>
            <input value={input} type='text' placeholder='What is on your mind?' onChange={onChange}/>
        </form>
    </div>
    <div className='input__post_options'>
        <div className='input__post_option'>
            <VideocamIcon style={{color: 'red'}} />
            <h4>Live Video</h4>
        </div>
        <div className='input__post_option'>
            <PhotoLibraryIcon style={{color: 'green'}} on/>
            <h4>Photo/Video</h4>
            <input className='photo_input' type='file'onChange={onFileChange}></input>
        </div>
        <div className='input__post_option'>
            <InsertEmoticonIcon style={{color: 'orange'}} />
            <h4>Feeling/Activity</h4>
        </div>
    </div>
  </div>
    {posts.map((post, image) => (
        <Main_post post={post} image={fileUrl}/>
    ))}
</>
  
  )
}

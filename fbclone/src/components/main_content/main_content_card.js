import React from 'react'
import {Avatar}  from '@mui/material';


export default function Main_content_card({avarat, name, img}) {
  return (
    <div className='main__card'>
        <Avatar src={avarat} />
        <img src={img} alt={name} />
        <div>
            <h4>{name}</h4>
        </div> 
    </div>
  )
}

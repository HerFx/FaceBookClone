import React from 'react'
import {Badge} from '@mui/material';


export default function ContactUser(prop) {
  return (
    <div className='contact_user'>
        <Badge badgeContent={prop.online} overlap="circular" variant="dot" color="success" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
            <img src={prop.avatar} alt=''/>
        </Badge>
        <h4>{prop.name}</h4>
    </div>
  )
}

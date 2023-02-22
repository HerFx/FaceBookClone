import React from 'react'
import users from './dataUser'
import ContactUser from './ContactUser'
import right_side from './right_side.css'

export default function Contact() {
  return (
    <div className='contact_box'>
        <h1>Contact</h1>
        {users.map((user) => (
            <ContactUser name={user.name} avatar={user.avatar} online={user.online}/>
        ))}
        
    </div>
  )
}

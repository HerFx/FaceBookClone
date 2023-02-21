import React from 'react'
import {useState} from 'react';
import {useEffect} from 'react';
import {Avatar}  from '@mui/material';




export default function Main_post({avatar, post, image}) {
    const [time, setTime] = useState('')
    const [likes, setLikes] = useState(0)

    const like = () => {
        setLikes(likes + 1)
    }
    

    useEffect(() => {
        setTime(new Date().toLocaleTimeString())
    }, [])

  return (
    <div>
        <div className="main_post">
            <div className="main_post_header">
                <div className="main_post_header_left">
                    <Avatar src={null}/>
                    <div className="main_post_header_left_name">
                        <h4>FirsName LastName</h4>
                        <p>{time}</p>
                    </div>
                </div>
            </div>
            <div className="main_post_body">
                <p>{post}</p>
                <img src={image}></img>
                <div className="main_post_likes">
                    {likes > 0 ? <p><i className="far fa-thumbs-up"></i>{likes}</p> : null}
                </div>
            </div>
            <div className="main_post_footer">
                <div className="main_post_footer_left">
                    <button onClick={like}><i className="far fa-thumbs-up"></i>Like!</button>
                    <button><i className="far fa-comment"></i>Comment</button>
                    <button><i className="fas fa-share"></i>Share</button>
                </div>
            </div>
        </div>
    </div>

  )
}

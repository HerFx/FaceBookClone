import React from 'react'

export default function Main_post({avatar, name, time, post, like, comment, share}) {
  return (
    <div>
        <div className="main_post">
            <div className="main_post_header">
                <div className="main_post_header_left">
                    <img src={avatar} alt="avatar" />
                    <div className="main_post_header_left_name">
                        <h4>{name}</h4>
                        <p>{time}</p>
                    </div>
                </div>
                <div className="main_post_header_right">
                    <i className="fas fa-ellipsis-h"></i>
                </div>
            </div>
            <div className="main_post_body">
                <p>{post}</p>
            </div>
            <div className="main_post_footer">
                <div className="main_post_footer_left">
                    <i className="far fa-thumbs-up"></i>
                    <i className="far fa-comment"></i>
                    <i className="fas fa-share"></i>
                </div>
                <div className="main_post_footer_right">
                    <i className="far fa-bookmark"></i>
                </div>
            </div>
        </div>
    </div>

  )
}

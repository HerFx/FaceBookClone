import React from 'react'
import { Avatar} from '@mui/material';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import './side_nav.css'


export default function left_nav() {
  return (
    <div>
      <div className='left_nav'>
        <div className='left_nav_option'>
          <Avatar src={null} className='left_nav_icon'/>
          <h4>FirstName LastName</h4>
        </div>
        <div className='left_nav_option'>
          <GroupOutlinedIcon fontSize='large'  className='left_nav_icon'/>
          <h4>Friends</h4>
        </div>
        <div className='left_nav_option'>
          <ArticleOutlinedIcon fontSize='large' className='left_nav_icon'/>
          <h4>News</h4>
        </div>
        <div className='left_nav_option'>
          <SupervisedUserCircleOutlinedIcon  fontSize='large' className='left_nav_icon'/>
          <h4>Groups</h4>
        </div>
        <div className='left_nav_option'>
          <StorefrontOutlinedIcon  fontSize='large' className='left_nav_icon'/>
          <h4>MarketPlace</h4>
        </div>
        <div className='left_nav_option'>
          <OndemandVideoOutlinedIcon fontSize='large' className='left_nav_icon'/>
          <h4>Watch</h4>
        </div>
      </div>
    </div>

  )
}

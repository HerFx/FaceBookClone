import React from 'react'
import './nav.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import { Avatar, IconButton } from '@mui/material';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';


export default function nav() {
  return (
    <nav>
        <div className="nav__left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="facebook logo" />
            <div className="nav__input">
                <SearchIcon className='nav__icon'/>
                <input type="text" placeholder="Search Facebook" />
            </div>
        </div>
        <div className="nav__middle">
            <div className="nav__option nav__option--active">
                <HomeIcon fontSize="large" />
            </div>
            <div className="nav__option nav__icon">
                <OndemandVideoOutlinedIcon fontSize="large" />
            </div>
            <div className="nav__option nav__icon">
                <StorefrontOutlinedIcon fontSize="large" />
            </div>
            <div className="nav__option nav__icon">
                <SupervisedUserCircleOutlinedIcon fontSize="large" />
            </div>
            <div className="nav__option nav__icon">
                <SportsEsportsOutlinedIcon fontSize="large" />
            </div>
        </div>
        <div className="nav__right">
            <IconButton color='primary' className='nav__iconButton'>
                <WidgetsOutlinedIcon className='nav__iconButtonicons'/>
            </IconButton>
            <IconButton className='nav__iconButton'>
                <ChatOutlinedIcon className='nav__iconButtonicons'/>
            </IconButton>
            <IconButton className='nav__iconButton'>
                <NotificationsNoneOutlinedIcon className='nav__iconButtonicons'/>
            </IconButton>
            <div className="nav__info">
                <Avatar src={null} />
            </div>
        </div>
    </nav>
  )
}

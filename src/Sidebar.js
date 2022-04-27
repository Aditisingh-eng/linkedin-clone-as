import { Avatar } from '@material-ui/core';
import React from 'react'
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function Sidebar() {
    const user=useSelector(selectUser)
    const recentItem=(topic)=>(
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    ); 
  return (
    <div className='sidebar'>
        <div className='sidebar__top'>
            <img src="https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
            <Avatar src={user.photoUrl} className='sidebar__avatar'>
                {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>
        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>8,990</p>
            </div>
            <div className='sidebar__stat'>
                <p>Who viewed you</p>
                <p className='sidebar__statNumber'>8,990</p>
            </div>
        </div>
        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('content-developer')}
            {recentItem('graphic-designing')}
            {recentItem('programming')}
            {recentItem('software-developer')} 
        </div>
    </div>
  )
}

export default Sidebar
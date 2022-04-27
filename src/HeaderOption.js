import { Avatar } from '@material-ui/core';
import React from 'react'
import "./HeaderOption.css";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
function HeaderOption({avatar,Icon,title,onClick}) {
  const user=useSelector(selectUser);
  return (
    <div onClick={onClick} className="HeaderOption">
        {Icon && <Icon className="HeaderOption__icon"/>}
        {avatar && (
            <Avatar className='HeaderOption__icon'>
              {user?.email[0]}
            </Avatar>
        )}
        <h3 className='HeaderOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption
import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import {logout,selectUser} from "./features/userSlice";
function Header() {
  const dispatch =useDispatch();
  const logoutofApp=()=>{
    dispatch(logout())
    auth.signOut();
  }

  return (
    <div className='header'>
        <div className="header__left">
            <img src="https://cdn-icons.flaticon.com/png/128/3536/premium/3536505.png?token=exp=1649492103~hmac=6208748596ecad376ad5c2e6c13b4aa4" alt=" "/>

            <div className="header__search">
               <SearchIcon />
                <input placeholder='Search' type="text"/>
            </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
          <HeaderOption Icon={ChatIcon} title="Messaging"/>
          <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
          <HeaderOption  avatar={true} title="Me"
          onClick={logoutofApp}
          />

          </div>
    </div>
  )
}

export default Header
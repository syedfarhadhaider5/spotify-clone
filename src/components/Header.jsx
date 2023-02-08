import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css";
import { Avatar } from '@mui/material';
import {useSelector, useDispatch} from 'react-redux'

function Header() {
    const userState = useSelector((state) => state.Users.user);

  return (
    <div className='Header'>
        <div className="header__left">
            <SearchIcon />
            <input type="text" placeholder='Search song and artist'/>
        </div>
        <div className="header__right">
            <Avatar src={userState &&  userState?.images[0]?.url} />
            <h4>{userState && userState.display_name }</h4>
        </div>
    </div>
  )
}

export default Header
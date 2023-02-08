import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import Footer from './Footer';
import Sidebar from './Sidebar';
import "./Player.css";
import Body from './Body';

function Player({spotify}) {
    const userState = useSelector((state) => state.Users.user);
    const userToken = useSelector((state) => state.Users.Token);
    return (
    <div className='Player'>
      {/* <h2>Player we are hereggggggg {userState && userState.display_name}</h2> */}
      <div className="player__body">
          <Sidebar />
          <Body spotify={spotify} />
      </div>
        <Footer />
    </div>
  )
}

export default Player
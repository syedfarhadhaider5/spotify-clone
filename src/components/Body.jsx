import React from 'react'
import "./Body.css";
import Header from './Header';
import {useSelector, useDispatch} from 'react-redux'
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from './SongRow';
function Body() {
  const userState = useSelector((state) => state.Users.playlist);
  const user = useSelector((state) => state.Users.user);

  return (
    <div className='Body'>
        <Header />
      {console.log(userState)}
        <div className="body_album">
          <img src={user &&  user?.images[0]?.url} alt="" />
          <div className="body_album_info">
              <strong>Playlist</strong>
              <h2>Kon Aya</h2>
              <p>This is extreme fantastic movement where we save all world song of different cultures</p>
          </div>
        </div>
        <div className="body_song">
            <div className="play_song_icons">
              <PlayCircleFilledWhiteOutlinedIcon  />
              <FavoriteIcon fontSize="large" className='circle_play' />
              <MoreHorizIcon />
            </div>
        </div>
        <SongRow  />
    </div>
  )
}

export default Body
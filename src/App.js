import React, {useEffect, useState} from 'react'
import Login from './components/Login'
import {getTokenFromResponse} from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import {useSelector, useDispatch} from 'react-redux'
import {getUser} from "./features/userSlice";
import Player from './components/Player';
import {setTokens} from "./features/userSlice";
import {setPlaylist}  from "./features/userSlice";

function App() {
  const dispatch =  useDispatch();
  // global spotify object
  const spotify = new SpotifyWebApi();

  const [token, setToken] = useState(null);

  useEffect(()  =>{
    const hash = getTokenFromResponse();
    window.location.hash = ""; 
    const _token = hash.access_token 
    if(_token)
    {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) =>{
        // set user value in action 
         dispatch(getUser(user))
      })
      
     dispatch(setTokens(_token)) 
     spotify.getUserPlaylists().then((playlist) =>{
          dispatch(setPlaylist(playlist))
     })
     

    }
  }, []);
  return (
    <div className='app'>
      {
        token ? (
          <Player spotify={spotify} />
          ) : (
           <Login />
           )
      }
      
    </div>
  )
}

export default App
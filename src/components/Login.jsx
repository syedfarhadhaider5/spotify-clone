import React from 'react'
import "./Login.css";
import {accessUrl} from "../spotify";
function Login() {
  return (
    <div className='Login'>
        <img src="/images/spotify.png" alt="" />
        <a href={accessUrl}>
          <button>LOGIN WITH SPOTIFY</button>
        </a>
    </div>
  )
}

export default Login
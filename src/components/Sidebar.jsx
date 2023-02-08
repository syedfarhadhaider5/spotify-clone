import React from 'react'
import "./Sidebar.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SidebarOptions from './SidebarOptions';
import {useSelector, useDispatch} from 'react-redux'


function Sidebar() {
    const userState = useSelector((state) => state.Users.playlist);

  return (
    <div className='Sidebar'>
            <div className='sidebar__logo'>
                <img src="/images/spotify.png" alt="" />
            </div>
            <SidebarOptions title="Home"  Icon={HomeIcon}/>
            <SidebarOptions title="Search"  Icon={SearchIcon}/>
            <SidebarOptions title="Library Music" Icon={LibraryMusicIcon}/>
            <br />
            <strong className='Playlist'>PLAYLIST</strong>
            <hr />
            {userState?.items?.map((playlist) => (
                    <SidebarOptions title={playlist.name} />
            ))}
           
            

    </div>
  )
}

export default Sidebar
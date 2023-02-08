import React from 'react'
import "./footer.css";
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import Box from '@mui/material/Box';


function Footer() {
  return (
    <div className='Footer'>
        <div className="footer__left">
            <div className="album_logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPVjI5xNrXgAyznefUXHBatamrnOirKFOH8Q&usqp=CAU" alt="" />
            </div>
            <div className="album_details">
                    <h4>Hip Hop</h4>
                    <p>Nikas</p>
                </div>
        </div>
        <div className="footer__center">
            <ShuffleIcon />
            <SkipPreviousIcon className='green_icon' />
            <PlayCircleFilledWhiteOutlinedIcon fontSize="large" />
            <SkipNextIcon  className='green_icon' />
        </div>
        <div className="footer__right">
        <Grid container spacing={2}>
                <Grid item>
                    <VolumeDownIcon/>
                </Grid>
                <Grid item>
                    <PlaylistPlayIcon/>
                </Grid>
                <Grid item xs={2}>
                <Box width={200}>
                    <Slider
                        size="small"
                        defaultValue={70}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        className="sliderColor"
                    />
                </Box>
                </Grid>
                </Grid>
        </div>
    </div>
  )
}

export default Footer
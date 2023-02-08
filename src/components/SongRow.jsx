import React from 'react'
import "./SongRow.css";
function SongRow() {
    const songs = [
        {
            images: "https://angartwork.akamaized.net/?id=143483220&size=640",
            title: "Haider e Karrar",
            artist: "Nadeem Sarwar",
        },
        {
            images: "https://angartwork.akamaized.net/?id=143483220&size=640",
            title: "Kon Nahi",
            artist: "Yo Yo Honey Singh",
        },
        {
            images: "https://angartwork.akamaized.net/?id=143483220&size=640",
            title: "De Taali",
            artist: "Yo Yo Honey Singh",
        },
        {
            images: "https://angartwork.akamaized.net/?id=143483220&size=640",
            title: "Love Dose",
            artist: "Yo Yo Honey Singh",
        },
        {
            images: "https://angartwork.akamaized.net/?id=143483220&size=640",
            title: "Desi Kalakar",
            artist: "Yo Yo Honey Singh",
        },
        {
            images: "https://angartwork.akamaized.net/?id=143483220&size=640",
            title: "Brown Rang",
            artist: "Yo Yo Honey Singh",
        }
    ];	
  return (
    <>
        {
            songs.map(({images,title,artist}) => {
                return(
                    <div className='SongRow'>

                            <img src={images} alt="" />
                            <div className="song_info">
                            <h1>{title}</h1>
                            <p>{artist}</p>
                            </div>
                            </div>
        
                )
            })
        }
        </>
  )
}

export default SongRow

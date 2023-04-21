import "./Card.css"
import React, { useState } from 'react'
import Streaming from './Streaming'
const Card = ({data})=> {
    const [img,setImg] = useState(false)
  return (
    <>{!img?
    <div className='card' onClick={()=>{setImg(true)}}>
        <img src={data.ImageURL} alt='Oops!! Image not found'/>
        <div className='play-btn'>
            <img src='https://www.freeiconspng.com/thumbs/video-play-icon/video-play-icon-24.png' alt='img not'/>
        </div>
        <h3>{data.Title}</h3>
    </div>:
    <Streaming setImg={setImg} data={data}/>
    }

    
    </>
  )
}
export default Card
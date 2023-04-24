import React, { useState } from 'react'
import "./Card.css"
import Videoplayer from '../../Upload-Search-Streaming/Videoplayer'

const Card = ({data})=> {
    const [toggle,setToggle] = useState(false)
  return (
    <>{!toggle?
    <div className='card' onClick={()=>{setToggle(true)}}>
        <img src={data.imgUrl} alt='image not found'/>
        <div className='btn'>
            <img src='https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-play-icon-png-image_956416.jpg' alt='img not'/>
        </div>
        <h3>{data.tittle}</h3>
    </div>:
    <Videoplayer setToggle={setToggle} data={data}/>
    }

    
    </>
  )
}
export default Card
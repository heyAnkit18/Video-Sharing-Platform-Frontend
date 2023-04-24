import React from 'react'
import "./Videoplayer.css"

function Videoplayer({setToggle,data}) {
  return (

    
    <div className='main'>
    

        <div className='close-icon'>
            <img onClick={()=>{setToggle(false)}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/High-contrast-dialog-close.svg/768px-High-contrast-dialog-close.svg.png"/>
        </div>
        <div className='left'>
            <video src={data.videoUrl} style={{width:"100%",height:"85%"}} controls/>
            <div className='info'>
                <h1>{data.tittle}</h1>
                <h4>{data.desc}</h4>
            </div>
        </div>
        <div className='right'>
            <div className='releted-content'>
                <img src={data.imgUrl} style={{width:"100%",height:"100%"}}/>
                <h3>{data.tittle}</h3>
            </div>
            <div className='releted-content'>
                <img src={data.imgUrl} style={{width:"100%",height:"100%"}}/>
                <h3>{data.tittle}</h3>
            </div>
            <div className='releted-content'><img src={data.imgUrl} style={{width:"100%",height:"100%"}}/>
            <h3>{data.tittle}</h3>
            </div>
        </div>
      
    </div>
  )
}

export default Videoplayer

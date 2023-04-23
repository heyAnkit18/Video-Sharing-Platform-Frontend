import React from "react";

function MyVideoCard({videoData, card, openPopup}){

    return <>
        <div className={`my-video-card${card}`} onClick={openPopup()}>
            <img src={videoData.ImageURL} alt="Image not available"/>
            <div className={`my-video-btn${card}`}>
            <img src='https://thumbs.dreamstime.com/b/computer-generated-illustration-recycle-bin-icon-isolated-white-background-suitable-logo-delete-icon-button-175612353.jpg' alt='play button'/>
            </div> 
            <h3>{videoData.Title}</h3>
        </div>
    </>
}

export default MyVideoCard;
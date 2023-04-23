import React from "react";
import "./Streaming.css";

function VideoStreaming({ setToggle, data }) {
  return (
    <div className="main-div">
      <div className="close-icon">
        <img
          onClick={() => {
            setToggle(false);
          }}
          src="https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-vector-cross-icon-png-image_992292.jpg"
        />
      </div>
      <div className="left-side">
        <video
          src={data.VideoURL}
          style={{ width: "80%", height: "80%" }}
          controls
        />
        <div className="details">
          <h2>{data.Title}</h2>
          <h4>{data.Describtion}</h4>
        </div>
      </div>
      <div className="right-side">
        <div className="releted-content">
          <img src={data.ImageURL} style={{ width: "100%", height: "100%" }} />
          <h3>{data.Title}</h3>
        </div>
        <div className="releted-content">
          <img src={data.ImageURL} style={{ width: "100%", height: "100%" }} />
          <h3>{data.Title}</h3>
        </div>
        <div className="releted-content">
          <img src={data.ImageURL} style={{ width: "100%", height: "100%" }} />
          <h3>{data.Title}</h3>
        </div>
      </div>
    </div>
  );
}

export default VideoStreaming;

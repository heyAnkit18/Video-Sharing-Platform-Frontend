import { useSearchParams } from "react-router-dom";
import "./Upload.css";
import { useState } from "react";

const fileUpload = () => {

  const [image, setImage] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [inputs, setInputs] = useState({});

  const Upload = (e)=>{
    const newToken = localStorage.getItem("mytoken")
    axios.post("https://video-sharing-backend.onrender.com/upload",{...inputs,newToken})
    .then((res)=>{
        window.alert("Video uploaded succesfully")
        // setOpen(false)
    }).catch((err)=>{
        window.alert("Unable to Upload Video")
    })
  }

  return (
    <div id="container">
      <div>
        <h2>Upload New Video</h2>
      </div>
      <div id="input-video">
        <label>Video Upload here : </label>
        <input type="file" accept="video/**" id="upload" onChange={(e) => setVideo(e.target.files[0])}/>
      </div>
      <h1>Name</h1>
      <textarea name="Title" id="title" placeholder="Title"></textarea>
      <textarea
        name="Describtion"
        id="Describtion"
        placeholder="Describtion"
      ></textarea>
      <div className="main">
        <div className="main-div">
          <div className="div-container" id="first-div">
            <label htmlFor="">Category</label>
            <br />
            <select name="category" id="Catergory">
              <option>Education</option>
              <option value="Movie">Travelling</option>
              <option value="Education">Sports</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Movie">Movie</option>
            </select>
            <div className="Visibility">
              <label htmlFor="">Visibility</label>
              <br />
              <select name="visibility" id="Public">
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
          </div>
          <div id="img-input">
            <label>Thumbnail Image: </label>
          </div>
          <button id="button-save" onClick={Upload}>Save</button>
        </div>
      </div>
    </div>
    
  );
};

export default fileUpload;

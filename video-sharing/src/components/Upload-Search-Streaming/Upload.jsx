import React from "react";
import "./Upload.css";
import { useEffect, useState } from "react";
import { ref, getDownloadURL, getStorage, uploadBytes } from "firebase/storage"
import app from "../../firebase";
import axios from "axios";

const FileUpload = () => {

  const [image, setImage] = useState(undefined);
  const [video, setVideo] = useState(undefined);
  const [inputs, setInputs] = useState({});

  const inputChange = (e) => {
    setInputs((previous) => {
      return {...previous, [e.target.name]: e.target.value}
    })
  }

  const uploadToFirebase = (file, urlType) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytes(storageRef, fileName);

    uploadTask.then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setInputs((previous) => {
          return {...previous, [urlType]: url}
        })
      })
    })
  }

  useEffect(() => {
    image && uploadToFirebase(image, "ImageURL")
  }, [image]);

  useEffect(() => {
    video && uploadToFirebase(video, "VideoURL")
  }, [video]);


  const Upload = (e)=>{
    const newToken = localStorage.getItem("mytoken")
    axios.post("localhost:8080/VideoUpload",{...inputs,newToken})
    .then((res)=>{
        window.alert("Video uploaded succesfully")
        // setOpen(false)
    }).catch((err)=>{
        window.alert("Unable to Upload Video")
    })
  }

  return (
    <div id="container">
      <h2>Upload New Video</h2>
      <div id="input-video">
        <label>Video Upload here : </label>
        <input type="file" accept="video/**" id="upload" onChange={(e) => setVideo(e.target.files[0])}/>
      </div>
      <h1>Name</h1>
      <textarea name="Title" id="title" placeholder="Title" onChange={inputChange}></textarea>
      <textarea name="Describtion" id="Describtion"placeholder="Describtion"></textarea>
      <div className="main">
        <div className="main-div">
          <div className="div-container" id="first-div">
            <label htmlFor="">Category</label>
            <br />
            <select name="category" id="Catergory" onChange={inputChange}>
              <option>Education</option>
              <option value="Movie">Travelling</option>
              <option value="Education">Sports</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Movie">Movie</option>
            </select>
            <div className="Visibility">
              <label htmlFor="">Visibility</label>
              <br />
              <select name="visibility" id="Public" onChange={inputChange}>
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </select>
            </div>
          </div>
          <div id="img-input">
            <label>Thumbnail Image: </label>
            <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])}/>
          </div>
          <button id="button-save" onClick={Upload}>Save</button>
        </div>
      </div>
    </div>
    
  );
};

export default FileUpload;
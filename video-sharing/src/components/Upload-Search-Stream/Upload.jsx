import "./Upload.css";

const fileUpload = () => {
  return (
    <div id="container">
      <div>
        <h2>Upload New Video</h2>
      </div>
      <div id="input-video">
        <label>Video:</label>
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
          <button id="button-save">Save</button>
        </div>
      </div>
    </div>
  );
};

export default fileUpload;

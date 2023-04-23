import React from "react";

function PopupCard({popupData, closePopup}){
    return<>
        <div id="delete-main">
            <div id="photo">
                <img src={popupData.ImageURL} alt="Image not available"/>
            </div>
            <div id="photo-name">
                <h1>{popupData.Title}</h1>
            </div>
            <div id="photo-desc">
                <p>{popupData.Describtion}</p>
            </div>
            <div id="photo-btns">
                <button>Delete</button>
                <button onClick={closePopup()}>Cancel</button>
            </div>
        </div>
    </>
}

export default PopupCard;
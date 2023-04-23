import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import MyVideoCard from "./Myvidoescard";
import PopupCard from "./PopupCard";

function Myvidoes(){
    const [toggle, setToggle] = useState(false)
    const [myVideosData, setMyVideosData] = useState([]);
    const [card, setCard] = useState("");
    const [popup, setPopup] = useState("");
    const [popupData, setPopupData] = useState([]);
    
    const openPopup = () => {
        // setPopupData(data);
        setToggle(true);
        setPopup("ri");
        setCard("1");
    }
    const closePopup = () => {
        setToggle(false)
        setCard("");
        setPopup("");
    }
    // useEffect(() => {
    //     const newToken = localStorage.getItem("mytoken")
    //     axios.post("")
    //     .then((res) => {
    //         setMyVideosData(res.data)
    //     }) 
    //     .catch((error) => {
    //         window.alert("Vidoes are unavailable")
    //     })
    // }, [])

    return <>
        <Navbar/>
        <div id='myvideo-main'>
            <div id={`myvideo-left${popup}`}>
                {
                    myVideosData.map((data) => {
                        return <MyVideoCard videoData={data} card={card} openPopup={openPopup}/>
                    })
                }
            </div>
            <div id='myvideo-right'>
                {toggle && <PopupCard popupData={popupData} closePopup={closePopup}/>}
            </div>
        </div>

    </>

}

export default Myvidoes;
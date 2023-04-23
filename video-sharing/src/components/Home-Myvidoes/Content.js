import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Content(){

    const [videoData, setVideoData] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [homeScreen, setHomeScreen] = useState("");
    const [viewButton, setViewButton] = useState("View all");
    
    // useEffect(()=>{
    //     axios.get("localhost:8080/home")
    //     .then((res)=>{
    //         setVideoData(res.data)
    //     })
    //     .catch((error)=>{
    //         window.alert("Unable to fetch the data")
    //     })
    // },[]);

    const videoLayout = ()=>{
        if(viewButton == "View all"){
            setViewButton("View less")
        }
        else{
            setViewButton("View all");
        }
        if(homeScreen){
            setHomeScreen("")
        }
        else{
            setHomeScreen("class")
        }
    }

    return <>
        <div>
            {!toggle?
            <img src={videoData.slice(0,1).map((data) => {return data.ImageURL})} onClick={()=>setToggle(true)}/> :
            <video src={videoData.slice(0,1).map((data) => {return data.VideoURL})} onClick={()=>setToggle(false)} autoPlay controls />
            }
            <div className="details">
                <h1>{videoData.slice(0,1).map((data) => {return data.Title})}</h1>
                <div className="span">
                    <span>{videoData.slice(0,1).map((data) => {return data.createdAt})}</span>
                    <span>40 mins</span>
                    <span>{videoData.slice(0,1).map((data) => {return data.Views})}</span>
                </div>
            </div>

            <div className="videos">
                {!homeScreen? videoData.slice(0,4).map((data) => {
                    return <Card data={data} key={data._id}/>
                }) :
                videoData.map((data) => {
                    return <Card data={data} key={data._id}/>
                })
                }
            </div>
        </div>
    </>
}


export default Content;



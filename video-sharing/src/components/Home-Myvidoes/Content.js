import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function Content(){
    // const data = [
    //     JSON.stringify({"_id":{"$oid":"6444e752a39926787b1e9729"},
    //     "Title":"Godzilla","Describtion":"The project began as an IMAX short film in 2004 but was transferred to Legendary in 2009 to be redeveloped as a feature film.",
    //     "ImageURL":"https://drive.google.com/file/d/1HzuyQBoT21BJgobAHNnDHdUTNbT7Rb6d/view?usp=share_link",
    //     "VideoURL":"https://drive.google.com/file/d/18MJw5CJzHs9h5j5qjXO5t50AsEbGd1DH/view?usp=share_link",
    //     "Views":{"$numberInt":"0"},
    //     "Category":"Education",
    //     "Visiblity":"Private",
    //     "UserID":"6444e645a39926787b1e9722",
    //     "createdAt":{"$date":{"$numberLong":"1682237266407"}},
    //     "updatedAt":{"$date":{"$numberLong":"1682237266407"}},
    //     "__v":{"$numberInt":"0"},
    //     }),
    //     JSON.stringify({"_id":{"$oid":"6444e7fba39926787b1e972d"},
    //     "Title":"Rana Naidu","Describtion":"Rana Naidu is a 2023 Indian Hindi language action crime drama streaming television series on Netflix created and directed by Karan Anshuman and Suparn Verma.",
    //     "ImageURL":"https://drive.google.com/file/d/1I0TzsfCw-SbiOhnxfsJFBCfa9N6AVgwt/view?usp=share_link",
    //     "VideoURL":"https://drive.google.com/file/d/1E6-PF_0rkmsfqhcsqv92WLf8Ir13afg0/view?usp=share_link",
    //     "Views":{"$numberInt":"0"},
    //     "Category":"Travelling",
    //     "Visiblity":"Public","UserID":"6444e645a39926787b1e9722",
    //     "createdAt":{"$date":{"$numberLong":"1682237435394"}},
    //     "updatedAt":{"$date":{"$numberLong":"1682237435394"}},
    //     "__v":{"$numberInt":"0"}
    //     })
    // ]

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



import React from "react"
import axios from "axios";
import { useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Home-Myvidoes/Navbar/Navbar";
import Card from "../Home-Myvidoes/Navbar/Card";

const Search = ()=>{
    const [videos, setVideos] = useState([]);
    const query = useLocation().search;
    const [allVidoesData, setAllVideosData] = useState([]);

    useEffect(() => {
        axios.get("https://video-sharing-platform-backend-5hgw.onrender.com/home")
            .then((res) => {
                setAllVideosData(res.data)
            }).catch((err) => {
                window.alert("Vidoes are unavailable")
            })

    }, []);

    useEffect(() => {
        axios.get(`https://video-sharing-platform-backend-5hgw.onrender.com/search${query}`)
            .then((res) => {
                setVideos(res.data)
            }).catch((err) => {
                window.alert("Vidoes are unavailable")
            })
    }, [query]);
    return <>
        <Navbar />
        <div style={{display:"flex",flexWrap:"wrap",gap:"15px",justifyContent:"space-around",marginTop:"20px"}}>
            {videos.map((data)=>{
                return <Card data={data} videoData={allVidoesData}/>
            })}
        </div>
    </>
}
export default Search
import React from "react"
import { useState} from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Main/Navbar/Navbar";
import Card from "../Main/Navbar/Card";
const Search = ()=>{
    const [videos, setVideos] = useState([]);
  const query = useLocation().search;
    console.log(query)

    return <>
        <Navbar />
        <div style={{display:"flex",flexWrap:"wrap",gap:"15px",justifyContent:"space-around",marginTop:"20px"}}>
            {videos.map((data)=>{
                return <Card data={data}/>
            })}
        </div>
    </>
}
export default Search
import React from "react";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
function Navbar(){
    const navigate = useNavigate();
    const [q, setQ] = useState("");
    const [toggle, setToggle] = useState(true);
    const token = localStorage.getItem("myToken");

    // useEffect(() => {
    //     if(token){
    //         setToggle(true)
    //     }
    //     else{
    //         setToggle(false)
    //     }
    // },[token])

    // const signOut = async ()=>{
    //     const newToken = localStorage.getItem("myToken");
    //     axios.post("",{newToken})
    //     .then((res) => {
    //         if(res.status == 200){
    //             window.alert("Logout Successfully");
    //             localStorage.clear()
    //             setToggle(false);
    //             navigate("/")
    //         }
    //     })
    //     .catch((error) => {
    //         window.alert("Logout unsuccessful");
    //     })
    // }

    return <>
    {!toggle?
    <nav>
        <div className="Container">
                <h1 className="heading" onClick={() => {navigate("/")}}>Tuner</h1>
                <div>
                    <input className="input" type="text" placeholder="Search" onChange={(e) => setQ(e.target.value)}/>
                </div>
                <div className="search-btn1" onClick={navigate(`/search?q=${q}`)}>
                    <img className="searchimg" src="https://icon-library.com/images/blue-search-icon/blue-search-icon-23.jpg" alt="SearchImg"/>
                </div>
                <div className="btn-1" onClick={() => {navigate("/signin")}}>Login</div>
                <div className="com-btn">|</div>
                <div className="btn-2" onClick={() => {navigate("/Register")}}>Register</div>
        </div>
    </nav> : 
    <nav>
        <div className="Container">
                <h1 className="heading" onClick={() => {navigate("/")}}>Tuner</h1>
                <div>
                    <input className="input" type="text" placeholder="Search" onChange={(e) => setQ(e.target.value)}/>
                </div>
                <div className="search-btn1" onClick={navigate(`/search?q=${q}`)}>
                    <img className="searchimg" src="https://icon-library.com/images/blue-search-icon/blue-search-icon-23.jpg" alt="SearchImg"/>
                </div>
                <div className="btn-3" onClick={() => {navigate("/myvidoes")}}>My Vidoes</div>
                <div className="com-btn">|</div>
                <div className="btn-4" >Upload</div>
                <div className="com-btn">|</div>
                <div className="btn-5" >Signout</div>
        </div>
    </nav> 
    }
    </>
}

export default Navbar;
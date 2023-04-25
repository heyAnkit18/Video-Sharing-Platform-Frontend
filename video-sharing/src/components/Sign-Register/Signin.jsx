import './Style.css'
import axios from "axios"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



function SingIn(){
    const navigate = useNavigate();
    const navigate1=useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("");

    const loginuser=async (e)=>{
        e.preventDefault();

        axios.post("https://video-sharing-platform.onrender.com/signin",{email,password})
        .then((res)=>{
            localStorage.setItem("mytoken",res.data.Token);
            window.alert("Signin successful")
            navigate1("/");
        }).catch((err)=>{
            window.alert("Invalid Credentials")
        })

        
    }
    return (<>
        <main>
            <section className="sec-first">
                <img src="https://wallpapercave.com/wp/wp10392517.jpg" alt=""/>
                <div className='logo'>
                <h1>Welcome to Tuner</h1>
                <div ><h3>Tuner is an INDIAN video hosting, sharing, 
                    and services platform provider headquartered in New York City. 
                    Vimeo focuses on the delivery of high-definition video 
                    across a range of devices. Vimeo's business model is through 
                    software as a service.</h3></div>
                
                </div>
                <button  onClick={() => navigate('/register')}>Register</button>
            </section>
            <section className="sec-second">
                <form  className='formdata' method='POST'>
                    <h1>Sign in</h1>
                    <div>Sign in to continue access pages</div><br />
                    <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br />
                    <input type="password" name="passord" id="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br />
                    <input  className="submit" type="submit" name="signup" id="signup" value="Signin" onClick={loginuser}></input><br />
                </form>
            </section>
        </main>
    </>);
}
export default SingIn;
import { useState } from "react"
import "./Register.css"
import { useNavigate } from "react-router-dom"
import  axios from "axios"


function Signin(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const navigate = useNavigate("")
    const Submithandler =(e) =>{
        e.preventDefault()
        
        const res = axios.post("http://localhost:8080/Signin",{
            email: email,
            password:email
        })
        .then(()=>{
            console.log(res.data)
            window.alert(" Sign sucessfully sucess")
            navigate("/")
           })
           .catch(()=>{
            console.log(e)
            window.alert("Please  Register  ")
    
           })

    }
    return<div className="main-container">
         <section className="image">
            <img src="https://3.bp.blogspot.com/-uTzYx5qSqB4/XJkeWdX-6LI/AAAAAAAAAlw/QuKmHlGYtmsEOetLhT3BY0F7_jAolserQCLcBGAs/s1600/f5aa1e75715466bdb6932a14296ea1a3.jpg" alt=""/>
                <div className='logo'>
                <h1 >Tuner</h1>
                <div >Enjoy Multiple videos at one place</div>
                </div>
                <button  onClick={()=> navigate("/")}>Register</button>
            </section>
            <div className="form-container">
                <form action="#" method="post">
                <h1>Sign In</h1>
                    <div>Sign in to continue access pages</div><br />
                    <input type="email" placeholder="Email"  onChange={(e)=>{setEmail(e.target.value)}} value={email}/><br />
                    <input type="password"  placeholder="Password"  onChange={(e)=>{setPassword(e.target.value)}} value={password}/><br />
                    <input  className="submit" type="submit"  onClick={Submithandler}></input><br />


                </form>
            </div>

    </div>
}
export default Signin
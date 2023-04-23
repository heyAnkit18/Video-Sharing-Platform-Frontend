import React from "react";
import { useState } from "react";
import "./Register.css";
import axios from "axios"
import { useNavigate } from "react-router-dom";

function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    confirmpassword: "",
  });
  const [msg,setErrormsg]=useState("");
  const [msg1,setErrormsg1]=useState("");
  const navigate = useNavigate("")
  
  const inputhandler = (property) => {
    return (e) =>
      setUser((prevedata) => ({
        ...prevedata,
        [property]: e.target.value,
      }));
  };

  const Submithandler =async(e) => {
    e.preventDefault();
    // console.log(user)
    const{name,email,phone,profession,password,confirmpassword}=user

    if(password  !== confirmpassword){
        alert("Password and Confirm Password no match");
      }
    // const config = {
    //     headers: {
    //       "content-type": "application/json, text/plain" 
    //     },
    //     method:"POST"
    //   };
       const res = axios.post ("http://localhost:8080/Register",user)
       .then(()=>{
        console.log(res.data)
        window.alert("Registes sucessfully sucess")
        navigate("/signin")
       })
       .catch((e)=>{
        console.log(e)
        // window.alert("Email all Ready Existed")

       })
        
      
        
        
        // else{
        //   alert("failed")
        // }
    //   }).catch((err)=>{
    //     console.log(err.response.data.error.message)
    //     alert(err.response.data.error.message)
    //   })
    // //     debugger
    //     const data= res.json();
    //     if(data.status===400 ){
    //         alert("registration failed")
    //         console.log("failed")
    //       }
    //   })
    // const data=  res.json();
        // console.log(data)
        // if(user.status == "sucess"){
        // alert("sucess full login ")
        // navigate("/signin")
        // console.log("sucess")
    
    
    
  };

  return (
    <div className="main-container">
      <section className="image">
        <img
          src="https://3.bp.blogspot.com/-uTzYx5qSqB4/XJkeWdX-6LI/AAAAAAAAAlw/QuKmHlGYtmsEOetLhT3BY0F7_jAolserQCLcBGAs/s1600/f5aa1e75715466bdb6932a14296ea1a3.jpg"
          alt=""
        />
        <div className="logo">
          <h1>Tuner</h1>
          <div>Enjoy Multiple videos at one place</div>
        </div>
        <button onClick={()=>navigate("/Signin")}>Signin</button>
      </section>
      <div className="form-container">
        <form>
        
          <h1>Register</h1>
          <h3>Register to continue access pages</h3>
          <button id="btn-circle">+</button>
          <br />
          <div className="form-fields">
            <input
              type="text"  name="name"  id="name" placeholder="Name" onChange={inputhandler("name")} value={user.name} 
            />
          </div>
          <div className="form-fields">
            <input
              type="text"   name="email"  id="email" placeholder="Email" onChange={inputhandler("email")}    value={user.email}
            />
          </div>
          <div className="form-fields">
            <input
              type="text"   name="phone"  id="phone"  placeholder="phone"  onChange={inputhandler("phone")}   value={user.phone}
            />
          </div>
          <div className="form-fields">
            <input
              type="text" name="profession"  id="profession"  placeholder="profession" onChange={inputhandler("profession")}  value={user.profession}
            />
          </div>
          <div className="form-fields">
            <input
              type="password" name="password"  id="password" placeholder="password" onChange={inputhandler("password")} value={user.password}
            />
          </div>
          <div className="form-fields">
            <input
              type="password" name="confirmpassword"  id="confirmpassword" placeholder="confirmpassword" onChange={inputhandler("confirmpassword")} value={user.confirmpassword}
            />
          </div>
          <div>
            <button className="submit" type="submit" onClick={Submithandler}>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;

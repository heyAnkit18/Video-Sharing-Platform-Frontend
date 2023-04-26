import React, { useState , useEffect} from 'react'
import axios from 'axios';
import Navbar from './Navbar/Navbar';
import "./Myvideos.css"
import Myvideocard from './Myvideocard';
import Deletecard from './Deletecard';
function Myvideos() {
    const [data,setData] = useState([]);
    const [toggle,setToggle] = useState(false);
    const [data1,setData1] = useState([]);
    const [visible,setVisible] = useState("")
    const [card,setCard] = useState("")
    useEffect(() => {
        const newToken = localStorage.getItem("mytoken")
        axios.post("https://video-sharing-platform-backend-5hgw.onrender.com/myvideos",{newToken})
            .then((res) => {
                setData(res.data)
            }).catch((err) => {
                window.alert("Vidoes are unavailable to load")

            })
    }, []);

  return (
    <>
    <Navbar/>
     <div id='myvideo-main'>
        <div id={`myvideo-left${visible}`}>
           {
            data.map((data)=>{
                return <Myvideocard data={data} setToggle={setToggle} setData1={setData1} setVisible={setVisible} setCard={setCard} card={card}/> 
            })
           }
        </div>

        <div id='myvideo-right'>
           {toggle && <Deletecard data1={data1} setToggle={setToggle} setVisible={setVisible} setCard={setCard}/>}
        </div>

    </div>
    </>
  )
}

export default Myvideos

import React, { useState } from "react";

function Card({data}){
    const [toggle, setToggle] = useState(false);
    return <>
        {!toggle?
        <div className="card" onClick={() => {setToggle(true)}}>
            <img src={data.ImageURL} alt="Image unavailable"/>
            <div className="btn">
                <img src="../../../public\play-button-icon-png-18904.png" alt="Play button"/>
            </div>
        </div> :
        <div>
            
        </div>
    }
    </>
}

export default Card;
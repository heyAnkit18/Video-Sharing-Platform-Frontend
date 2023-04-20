import React from "react";
import LandingPage from "../components/Home-Myvidoes/Landing";
// import Upload from "../components/Upload-Search-Stream/Upload";
// import Streaming from "../components/Upload-Search-Stream/Streaming";


import { BrowserRouter,Routes, Route } from "react-router-dom";
function Router(){
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                {/* <Route path="/upload" element={<Upload/>}/>
                <Route path="/streaming" element={<Streaming/>}/> */}
                
               
            </Routes>
        </BrowserRouter>
    </>
}

export default Router;
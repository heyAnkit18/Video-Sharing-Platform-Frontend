import React from "react";
// import LandingPage from "../components/Home-Myvidoes/Landing";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Upload from "../components/Upload-Search-Stream/Upload";
import Streaming from "../components/Upload-Search-Stream/Streaming";



function Router(){
    return <>
        <BrowserRouter>
            <Routes>
                {/* <Route path="/" element={<LandingPage/>}/> */}
                <Route path="/" element={<Upload/>}/>
                {/* <Route path="/streaming" element={<Streaming/>}/> */}
                
               
            </Routes>
        </BrowserRouter>
    </>
}

export default Router;
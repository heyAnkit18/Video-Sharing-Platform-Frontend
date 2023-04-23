import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from "../components/Home-Myvidoes/LandingPage";
import FileUpload from "../components/Upload-Search-Streaming/Upload";
import VideoStreaming from "../components/Upload-Search-Streaming/Streaming"
import Myvidoes from "../components/Home-Myvidoes/Myvideos";
function Router(){
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/streaming" element={<VideoStreaming/>}/>
                {/* <Route path="/upload" element={<FileUpload/>}/> */}
                <Route path="/myvidoes" element={<Myvidoes/>}/>
            </Routes>
        </BrowserRouter>
    </>
}

export default Router;
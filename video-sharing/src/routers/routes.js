import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Upload from "../components/Upload-Search-Stream/Upload";
import Streaming from "../components/Upload-Search-Stream/Streaming";
import Myvidoes from "../components/Home-Myvidoes/Myvideos";
function Router(){
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/streaming" element={<Streaming/>}/>
                <Route path="/Upload" element={<Upload/>}/>
                <Route path="/myvidoes" element={<Myvidoes/>}/>
            </Routes>
        </BrowserRouter>
    </>
}

export default Router;
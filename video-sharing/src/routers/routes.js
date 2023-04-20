import React from "react";
import LandingPage from "../components/Home-Myvidoes/Landing";
import Streaming from "../components/Upload-Search-Stream/Streaming";
import Upload from "../components/Upload-Search-Stream/Upload";

import { BrowserRouter,Routes, Route } from "react-router-dom";
function Router(){
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
                <Route path="/streaming" element={<Streaming/>}/>
                <Route path="/Upload" element={<Upload/>}/>
               
            </Routes>
        </BrowserRouter>
    </>
}

export default Router;
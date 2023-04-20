import React from "react";
import LandingPage from "../components/Home-Myvidoes/Landing";
import { BrowserRouter,Routes, Route } from "react-router-dom";
function Router(){
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage/>} />
            </Routes>
        </BrowserRouter>
    </>
}

export default Router;
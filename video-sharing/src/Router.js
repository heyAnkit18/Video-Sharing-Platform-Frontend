import React from 'react';
import Singin from './components/Sign-Register/Signin.jsx';
import LandingPage from './components/Home-Myvidoes/Landingpage.jsx';
import Register from './components/Sign-Register/Register.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Myvideos from './components/Home-Myvidoes/Myvideos.jsx';
import Search from './components/Upload-Search-Streaming/Search.jsx';


function Router() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign" element={<Singin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/myvideos" element={<Myvideos />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </BrowserRouter>
  </>);

}
export default Router;
import React from "react";
import LandingPage from "./components/Home-Myvidoes/Landing";
import Router from "./routers/routes";
import UploadFile from "./components/Upload-Search-Stream/Upload.jsx";
function App() {
  return <>
    <Router/>
    <UploadFile/>
    </>
  }
export default App;

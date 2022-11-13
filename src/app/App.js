import React from "react";
import HomePage from "../pages/home/index";
import LoginPage from "../pages/session/login"
import {Route, Routes} from "react-router-dom";
import FlexBoxLayout from "../pages/Layout/FlexBox";
import NotFound from "../pages/session/notFound";


function App() {
  return (
    <div className="App">

        <Routes>
            <Route exact path='/' element={<HomePage props="Hi"/>}/>
            <Route  path='login' element={<LoginPage/>}/>
            <Route  path='flex-Layout' element={<FlexBoxLayout/>}/>
            <Route   path="*" element={<NotFound/>}/>

        </Routes>
    </div>
  );
}

export default App;

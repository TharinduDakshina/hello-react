import React from "react";
import NotFound from "../pages/session/notFound/index.Jsx";
import HomePage from "../pages/home/index";
import LoginPage from "../pages/session/login"
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">

        <Routes>
            <Route exact path='/' element={<HomePage props="Hi"/>}/>
            <Route  path='login' element={<LoginPage/>}/>
            <Route   path="*" element={<NotFound/>}/>

        </Routes>
    </div>
  );
}

export default App;

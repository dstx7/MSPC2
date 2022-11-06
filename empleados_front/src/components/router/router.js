//direccionamientos
import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "../login/login";
import Inicio from "../index/index"


export default function AppRoutes () {
    return(
        <Router>
            <Routes>
                <Route exact path ="/login" element={<Login />}> </Route>
                <Route path ="/index" element={<Inicio />}> </Route>
                <Route path ="/" element={<Inicio />}> </Route>
                <Route path="/*" element = {(<h1 style={{marginTop:300}}>404 <br/>Page Not Found hehe</h1>)}/>

            </Routes>   
        </Router>);
}
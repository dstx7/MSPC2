//direccionamientos
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../login/login";
import Inicio from "../index/index"
import PrivateRoute from "../auth/privaterouter";


export default function AppRoutes () {
    return(
        <Router>
            <Switch>
                <PrivateRoute exact path = {["/home"]} component={Home} />
                <Route exact path ={["/login"]} component={Login} /> 
                <Route exact path ={["/"]} component={Inicio} />
                <Route path={"*"} component = { () => (
                <h1 style={{marginTop:300}}>404 <br/>Page Not Found hehe</h1>
                )} />
            </Switch>   
        </Router>);
}

function Home(){
    return(
    <div>
        <h1>
            Home
        </h1>
    </div>
    );
}
//direccionamientos
import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../login/login";
import Inicio from "../index/index"
import PrivateRoute from "../auth/privaterouter";
import empleados from "../empleados/empleados.buscar";
import Vehiculos from "../vehiculos/vehiculos";


export default function AppRoutes () {
    return(
        <Router>
            <Switch>
                <PrivateRoute exact path = {["/empleados"]} component={empleados} />
                <PrivateRoute exact path ={["/vehiculos"]} component={Vehiculos} /> 
                <Route exact path ={["/login"]} component={Login} /> 
                <Route exact path ={["/"]} component={Inicio} />
                <Route path={"*"} component = { () => (
                <h1 style={{marginTop:300}}>404 <br/>Page Not Found hehe</h1>
                )} />
            </Switch>   
        </Router>);
}

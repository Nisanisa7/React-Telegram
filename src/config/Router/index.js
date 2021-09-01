import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import React from 'react'
import {
    Login,
    Register,
    ForgotPassword,
    Home,
    EmailVerif,
    Profile,




} from "../../pages";
const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login" component={ Login } />
                <Route path="/register" component={ Register } />
                <Route path="/reset" component={ForgotPassword}/>
                <Route path="/success" component={EmailVerif}/>
                <Route path="/profile" component={Profile}/>
                
                <Route path="/" component={Home}/>
            
            </Switch>
        </Router>
    )
}

export default Routes

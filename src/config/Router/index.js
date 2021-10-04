import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from 'react';
import io from 'socket.io-client'

import React from 'react'
import {
    Login,
    Register,
    ForgotPassword,
    Home,
    EmailVerif,
    Profile,




} from "../../pages";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
// PrivateRoute
// PublicRoute


const Routes = () => {
    
    const [socket, setSocket] = useState(null)
    const setupSocket = ()=>{
      const token = localStorage.getItem('token')
      if(token && !socket){
        const resultSocket = io(`${process.env.REACT_APP_BACKEND_BASE}`,{
          query: {
            token: localStorage.getItem('token')
          }
        })
        setSocket(resultSocket)
      }
    }
  
    useEffect(() => {
      setupSocket()
    }, [])

    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/login" component={Login} setSocket={setSocket} />
                <PublicRoute path="/register" component={Register} />
                <PublicRoute path="/reset" component={ForgotPassword} />
                <Route path="/success" component={EmailVerif} />
                <PrivateRoute path="/profile" component={Profile} />

                <PrivateRoute path="/" component={Home} socket={socket}/>

            </Switch>
        </Router>
    )
}

export default Routes

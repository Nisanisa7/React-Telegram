import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, socket, ...rest }) => {
    const isAuth = localStorage.getItem('token')
    return (
      <Route {...rest} render={(props)=>{
        return(
            isAuth ?
            (
            <>
            {/* <Navbar/> */}
            <Component socket={socket} {...props}/> 
            </>
            ): <Redirect to="/login" />
            )
        
    }}/>
    )
}
export default PrivateRoute

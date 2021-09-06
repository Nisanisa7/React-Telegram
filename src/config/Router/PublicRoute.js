import React from 'react'
import { Redirect, Route } from 'react-router-dom'

const PublicRoute = ({ component: Component, setSocket, ...rest }) => {
    const isAuth = localStorage.getItem('token')
    return (
      <Route {...rest} render={(props)=>{
        return(
          isAuth ?
          (
          <>
            <Redirect to="/" />
          </>
          ): 
          <Component setSocket={setSocket} {...props}/> 
          )
      
  }}/>
  )
}
export default PublicRoute

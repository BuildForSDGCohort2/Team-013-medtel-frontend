
import React from 'react';
import { Redirect, Route } from 'react-router';



  const AuthRoute = ({ component: Component, ...rest }) => { 
    const isAuthenticated = localStorage.getItem("isAuth")
    return (
    <Route
     {...rest}
     render={ props => {
      return isAuthenticated ? (<Component {...props} />)
      : (<Redirect to={
        {
          pathname: "/auth/login",
          state: {
            from: props.location
          }
        }
      } />) }
    
    } />
)}
  export default AuthRoute;
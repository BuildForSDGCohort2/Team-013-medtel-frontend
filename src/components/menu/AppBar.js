import React from 'react'
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar
} from "@material-ui/core";
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link,
     NavLink
} from 'react-router-dom'
import './AppBar.css';
import Login from '../pages/authen'


 const AppBarMenu = () => {
    return (
          <Router>
        <div>
          
            <AppBar position = "static"
                    alignitems = "center"
                    color = "primary" >
                <Toolbar>
                    <Grid container justify = "center"
                            wrap = "wrap" >
                    <Grid item >
                    <Typography variant = "h6"> 
                   
                    </Typography>  
                    
                    </Grid>  
                    </Grid>

                 
                     
                     <NavLink 
                     to = "../pages/authen"
                     className = "nav" > <p> Login </p>  </NavLink>
                
                </Toolbar>  

               
            </AppBar>

        </div>
        </Router>
    )
}


export default AppBarMenu
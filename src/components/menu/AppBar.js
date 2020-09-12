import React from 'react'
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Link,
} from "@material-ui/core";

 const AppBarMenu = () => {
    return (
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
                
                </Toolbar>  
            </AppBar>
        </div>
    )
}


export default AppBarMenu
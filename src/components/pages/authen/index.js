// noprotect
import React, {useState} from "react";
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
import './index.css';
import AppBarMenu from '../../menu/AppBar'


const Login = () => {

   

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [authflag, setAuthflag] = useState(1)


    const handleChangeUsername = (e) => {
       setUsername(e.target.value)
    }

    const handleChangePassWord = (e) => {
        setPassword(e.target.value)
    }

    

   const handleSubmit = (event) => {
        event.preventDefault();
        if (
            username == "nkeoualionel@gmail.com" &&
            password == "1111"
        ) {
           alert("Welcome");
        } else {
            alert("Incorrect Credntials!");
        }
    }

    return (
        <div>
            

            <AppBarMenu/>


            <Grid container spacing = {0} justify = "center"
                       direction = "row" >
                 
                <Grid item >
                    <Grid container direction = "column" justify = "center"
                              spacing = {2}
                              className = "login-form" >

                        <Paper variant = "elevation" elevation = {2} className = "login-background" >
                          <Grid item >
                            <Typography component = "h1" variant = "h5" >
                                Sign in
                            </Typography> 
                          </Grid> 
                             
                         <Grid item >

                            <form onSubmit={handleSubmit}>

                            <Grid container direction = "column" spacing = {2}>
                                    <Grid item >
                                    <TextField type = "email" placeholder = "Email" fullWidth
                                            name = "username" variant = "outlined" value = {username}
                                            onChange = {() => setUsername(username)}
                                            required autoFocus/>
                                    </Grid> 
                        
                                <Grid item >
                                <TextField type = "password" placeholder = "Password" fullWidth
                                        name = "password" variant = "outlined" value = {password}
                                        onChange = {() => setPassword(password)}
                                        required/>
                                </Grid> 
                        
                            <Grid item >
                                <Button variant = "contained" color = "primary" type = "submit" 
                                        className = "button-block">
                                Submit 
                                </Button> 
                            </Grid> 
                        </Grid> 
                        </form>

                        </Grid> 
                        
                            <Grid item >
                                <Link href = "#" variant = "body2" >
                                Forgot Password ?
                                </Link> 
                            </Grid> 
                        </Paper> 
                    </Grid> 
                </Grid>
            </Grid>

            
        </div>

    );

  }
  

  export default Login
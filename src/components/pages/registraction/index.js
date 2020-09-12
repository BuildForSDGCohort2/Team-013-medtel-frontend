// noprotect
import React, {
    useState
} from "react";
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

const Registration = () => {

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
            username === "nkeoualionel@gmail.com" &&
            password === "1111"
        ) {
            alert("Welcome");
        } else {
            alert("Incorrect Credntials!");
        }
    }

    return (
        <div>
       

         <AppBarMenu/>
        <Grid container spacing = {0}
              justify = "center" direction = "row" >

        <Grid item>
        <Grid container direction = "column"
              justify = "center" spacing = {2}
              className = "login-form" >

        <Paper variant = "elevation" elevation = {2}
                className = "login-background" >
        <Grid item>
        <Typography component = "h1"
        variant = "h5" >
        Registration
        </Typography>  
        </Grid> 

        <Grid item>

        <form onSubmit = {handleSubmit}>

        <Grid container direction = "column"
        spacing = {2}>

            <Grid item >
                <TextField type = "text" placeholder = "First Name"
                            fullWidth name = "firstname"
                            variant = "outlined"
                            value = {"" }onChange = {() => setPassword(password)} required/>
            </Grid> 

             <Grid item >
                 <TextField type = "text" placeholder = "Last Name"
                            fullWidth name = "lastname"
                            variant = "outlined"
                            value = {""}onChange = {() => setPassword(password)}
                            required/>
                 </Grid>

             <Grid item >
                 <TextField type = "text"
                            placeholder = "City"
                            fullWidth name = "city"
                            variant = "outlined"
                            value = {""}
                            onChange = {() => setPassword(password)}required/>
                 </Grid> 

            <Grid item >
                <TextField type = "text"
                            placeholder = "Country"
                            fullWidth name = "country"
                            variant = "outlined"
                            value = {"" }
                            onChange = {
                                () => setPassword(password)
                            }
                            required / >
                </Grid>          


        <Grid item>
        <TextField type = "email" placeholder = "Email" fullWidth name = "username"
                   variant = "outlined" value = {username}
                   onChange = { () => setUsername(username)}
                   required autoFocus/>
        </Grid> 

        <Grid item >
        <TextField  type = "password"
                    placeholder = "Password"
                    fullWidth name = "password"
                    variant = "outlined"
                    value = {password}
                    onChange = {() => setPassword(password)}
                    required/>
        </Grid> 

         

        <Grid item >
        <Button variant = "contained"
                color = "primary"
                type = "submit"
                className = "button-block" >
        Create Account </Button>  
        </Grid>  
        </Grid>  
        </form>

        </Grid> 

         
        </Paper>  
        </Grid>  
        </Grid> 
        </Grid>


        </div>

    );

}


export default Registration
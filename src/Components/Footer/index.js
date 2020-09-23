import React from 'react'
import {
    Container,
    AppBar,
    Typography,
    Toolbar
} from "@material-ui/core";
import './styles.css';


const Footer = () => {
    return (
        <div>
            <AppBar position="static"
                color="primary" >
                <Container maxWidth="md"
                    style={{ marginTop: "30px", marginBottom: "50px" }}>
                    <Toolbar style={{ marginTop: "30px", marginBottom: "50px", marginRight: "690px" }}>
                        <Typography variant="body1" color="inherit" >
                            &amp;
                            copy;
                            2019 Gistia
                <p> We provide a telemedecine affrodable platefrom for everyone </p>
                        </Typography>


                    </Toolbar>

                    <div style={{ marginTop: "-140px", marginLeft: "0px" }}>

                        <h3> Company </h3>
                        <p style={{ marginLeft: "-45px" }}> About </p>
                        <p style={{ marginLeft: "5px" }}> Find a doctor </p>
                        <p style={{ marginLeft: "-55px" }}> Apps </p>

                    </div>

                    <div style={{ marginTop: "-160px", marginLeft: "700px" }}>

                        <h3>Help</h3>
                        <p style={{ marginLeft: "35px" }}> help center </p>
                        <p style={{ marginLeft: "65px" }}> Contact support </p>
                        <p style={{ marginLeft: "35px" }}> Instructions </p>
                        <p style={{ marginLeft: "45px" }}> How it works </p>
                    </div>
                </Container>
            </AppBar>

        </div>
    )
}


export default Footer


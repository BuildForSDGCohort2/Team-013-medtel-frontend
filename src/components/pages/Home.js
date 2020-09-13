import React from 'react'
import {
    CardMedia,
    Button
} from '@material-ui/core';
import home1 from '../../assets/images/home2.png'
import home2 from "../../assets/images/home1.png";
import "./Home.css";
import AppBarMenu from '../menu/AppBar'
import Footer from '../menu/Footer'

const Home = () => {
    return (
      <div>

        <AppBarMenu />

          <div className = "contenaire" >

        <div className="content-1">
          <div className="aling-text1">
            <h1>Virtual healthcare for you</h1>
            <p>Easy to use web application at your disposal</p>
            <Button className="button1" variant="contained" color="primary" disableElevation >
              FIND A DOCTOR
            </Button>
          </div>
          <div className="aling-img1">
            <img className="home-img1" src={home1} />
          </div>
        </div>

        <div className="content-2">
          <div className="aling-text2">
            <h1 className="text2">Leading healthcare providers</h1>
            <hr style = {{width: '50px', height: '1px', background: "black", marginLeft:"40px" }}/>
            <p style = { {marginLeft: "-130px"}} > We provide the best healthcare application </p>
            <Button variant = "outlined"
            color = "primary"
            disableElevation 
            style = {{ marginTop: "60px", marginLeft: "-300px"}}>
              Learn more
            </Button>
          </div>
          <div className="aling-img2">
            <img className="home-img2" src={home2} />
          </div>
        </div>

        </div>

        <Footer/>
      </div>
    );
}


export default  Home
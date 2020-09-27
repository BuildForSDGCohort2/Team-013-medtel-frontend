import React from 'react'
import { Button } from '@material-ui/core';
import home1 from "../../Assets/images/home2.png";
import home2 from "../../Assets/images/home1.png";
import Footer from '../../Components/Footer';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container className={classes.heroSection} spacing={3} alignItems="center">
          <Grid item xs={12} md={6} lg={6} className={classes.heroText}>
            <Typography
            variant="h2"
            >Virtual healthcare <br/> for you</Typography>
            <p>Easy to use web application at your disposal</p>
            <Button className={classes.roundedBtn} variant="contained" color="primary" disableElevation >
              FIND A DOCTOR
            </Button>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <img className={classes.heroImage} src={home1} alt="Welcome Medtel" />
          </Grid>
        </Grid>
        <Grid container className={classes.sectionTwo} spacing={6} alignItems="center">
          <Grid item xs={12} md={6} lg={6}>
            <img className={classes.heroImage} src={home2} alt="Find a doctor" />
          </Grid>
          <Grid item xs={12} md={6} lg={6} className={classes.sectionTwoText}>
            <Typography
            variant="h3"
            >Leading healthcare providers</Typography>
            <hr style={{ width: '56px', height: '2px', background: "black", margin:'2% 0'}} />
            <p> We provide the best healthcare application </p>
            <Button variant="outlined"
              className={classes.roundedBtn}
              color="primary">
              Learn more
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer/>
    </div >

  );
}
export default Home
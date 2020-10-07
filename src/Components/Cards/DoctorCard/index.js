import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const DoctorCard = ({ doctor }) => {
  const { name, speciality, overview, profile_image } = doctor;
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={profile_image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} md container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {overview}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {speciality}
                </Typography>
              </Grid>
            </Grid>
            <Grid item xs container direction="column" justifyContent="flex-around" spacing={2}>
              <Button variant="primary" color="primary">
                Message Doctor
              </Button>
              <Button variant="outlined" color="secondary">
                View Profile
            </Button>            
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default DoctorCard;
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../../Actions/authActions'
export default function PrimarySearchAppBar() {
  const classes = useStyles();
  
  const dispatch = useDispatch()
  
  const handleLogout = () => {
      dispatch(logout())
  }
  const {isAuthenticated} = useSelector(state => state.auth)

  console.log(isAuthenticated)
  const guestUser = () => {
    return (
      <AppBar className={classes.appbarColor}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          <Link className={classes.logo} to="/home">
            MedTel
          </Link>
        </Typography>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
        <Typography variant="h6" noWrap>
          <Link className={classes.menulink} to="/#">
             Home
            </Link>
          </Typography>
          <Typography  variant="h6" noWrap>
          <Link className={classes.menulink} to="/doctor/search">
              Find a Doctor
            </Link>
          </Typography>
          <Typography variant="h6" noWrap>
            <Link className={classes.menulink}  to="/about">
            About Us
            </Link>
          </Typography>
          <Typography  variant="h6" noWrap>
            <Link className={classes.menulink} to="/apps">
            Apps
            </Link>
          </Typography>
          <Typography  variant="h6" noWrap>
            <Link className={classes.menulink} to="/auth/register">
            Register
            </Link>
          </Typography>
          <Typography variant="h6" noWrap>
            <Link className={classes.menulink}  to="/auth/login">
              Login
            </Link>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
    )
  }

  const loggedUser = () => {
    return (
      <AppBar className={classes.appbarColor}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          <Link className={classes.logo} to="/home">
            MedTel
          </Link>
        </Typography>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
        <Typography variant="h6" noWrap>
          <Link className={classes.menulink} to="/#">
             Home
            </Link>
          </Typography>
          <Typography  variant="h6" noWrap>
          <Link className={classes.menulink} to="/doctor/search">
              Find a Doctor
            </Link>
          </Typography>
          <Typography variant="h6" noWrap>
            <Link className={classes.menulink}  to="/about">
            About Us
            </Link>
          </Typography>
          <Typography  variant="h6" noWrap>
            <Link className={classes.menulink} to="/apps">
            Apps
            </Link>
          </Typography>
          <Typography  variant="h6" noWrap>
            <Link className={classes.menulink} to="/auth/profile">
            profile
            </Link>
          </Typography>
          <Typography variant="h6" noWrap>
            <Link className={classes.menulink} onClick={handleLogout}>
             Sign Out
            </Link>
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
    )
  }


  return (
    <div className={classes.grow}>
   { isAuthenticated ? loggedUser(): guestUser()
}
      <div className={classes.toolbarMargin}></div>
    </div>
  );
}

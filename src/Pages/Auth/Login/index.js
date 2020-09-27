// noprotect
import React, { useState, useEffect } from 'react';
import {
    Button,
    TextField,
    Grid,
    Paper,
    Typography,
    Link,
} from "@material-ui/core";
import './index.css';
import validate from 'validate.js';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
    useLocation
} from "react-router-dom";
import MuiAlert from '@material-ui/lab/Alert';

import { loginUser } from '../../../Actions/authActions';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  

const schema = {
    email: {
        presence: { allowEmpty: false, message: 'is required' },
        email: true,
        length: {
            maximum: 64
        }
    },
    password: {
        presence: { allowEmpty: false, message: 'is required' },
        length: {
          minimum: 6,
          message: "must be at least 6 characters"
        }
      }
};

const Login = () => {
    const dispatch = useDispatch()
    const location = useLocation()

    const [formState, setFormState] = useState({
        isValid: false,
        values: {},
        touched: {},
        errors: {}
    });

    useEffect(() => {
        const errors = validate(formState.values, schema);

        setFormState(formState => ({
            ...formState,
            isValid: errors ? false : true,
            errors: errors || {}
        }));
    }, [formState.values]);

    const authErrors = useSelector((state ) => {
        return state.auth.authError
      })

    const handleChange = event => {
        event.persist();
        setFormState(formState => ({
            ...formState,
            values: {
                ...formState.values,
                [event.target.name]:
                    event.target.type === 'checkbox'
                        ? event.target.checked
                        : event.target.value
            },
            touched: {
                ...formState.touched,
                [event.target.name]: true
            }
        }));
    };
    const handleSignIn = event => {
        event.preventDefault();
        const { values } = formState;
        // Return to previous page after login or return to homepage
        let { from } = location.state || { from: { pathname: "/" } };
        dispatch(loginUser(values, from))
    };

    const hasError = field => {
        return formState.touched[field] && formState.errors[field] ? true : false;
    }

    return (
        <div>
            <Grid container spacing={0} justify="center"
                direction="row" >
                <Paper variant="elevation" elevation={2} className="login-background" >
                    <Grid item >
                        <Typography component="h1" variant="h5" >
                            Sign in
                            </Typography>
                            {authErrors && (<Alert severity="error"> {authErrors} </Alert>)}

                    </Grid>

                    <Grid item >
                        <form onSubmit={handleSignIn}>

                            <Grid container direction="column" spacing={2}>
                                <Grid item >
                                    <TextField
                                        error={hasError('email')}
                                        fullWidth
                                        helperText={
                                            hasError('email') ? formState.errors.email[0] : null
                                        }
                                        label="Email address"
                                        name="email"
                                        onChange={handleChange}
                                        type="text"
                                        value={formState.values.email || ''}
                                        variant="outlined"
                                    />

                                </Grid>
                                <Grid item >
                                    <TextField
                                        error={hasError('password')}
                                        fullWidth
                                        onChange={handleChange}
                                        helperText={
                                            hasError('password') ? formState.errors.password[0] : null
                                        }
                                        label="Password"
                                        name="password"
                                        type="password"
                                        value={formState.values.password || ''}
                                        variant="outlined"
                                    />

                                </Grid>
                                <Grid item >
                                    <Button variant="contained"
                                        color="primary"
                                        type="submit"
                                        disabled={hasError('password') || hasError('email')}
                                        className="button-block">
                                        Submit
                                </Button>
                                </Grid>
                            </Grid>
                        </form>

                    </Grid>

                    <Grid item >
                        <Link href="#" variant="body2" >
                            Forgot Password ?
                                </Link>
                    </Grid>
                </Paper>
            </Grid>
        </div>

    );

}
Login.propTypes = {
    history: PropTypes.object
};

export default Login
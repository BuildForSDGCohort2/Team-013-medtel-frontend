import axios from 'axios';
import { BASE_URL, LOGIN_SUCCESS, LOGIN_FAILURE} from './types';
import { push } from 'connected-react-router';


export const loginUser = (email, password, path) => async dispatch => {
    const userData = {
        "email": email,
        "password": password
    }
    await axios.post(`${BASE_URL}/users/auth`, userData)
        .then(response => {
            // successful login if axios response.data object contains data key
            if (response.data.data){
                dispatch({
                    type: LOGIN_SUCCESS, payload: response.data.access_token

                })
                localStorage.setItem("isAuth", true)
                dispatch(push(path))
            }else {
                dispatch({
                    type: LOGIN_FAILURE, payload: { 
                        error:  "Login Failed! Invalid Credentials",
                        status: 401
                    }
                })
            }

        })
        .catch(err => {
            dispatch({
                type: LOGIN_FAILURE, payload: { error: err, status: err.status }
            })
        })
};


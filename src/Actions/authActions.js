import axios from 'axios';
import { BASE_URL, LOGIN_SUCCESS, SIGN_OUT_SUCCESS, AUTH_FAILURE } from './types';
import { push } from 'connected-react-router';


export const loginUser = (userData, path) => async dispatch => {
   
    await axios.post(`${BASE_URL}/users/auth`, userData)
        .then(response => {
            // successful login if axios response.data object contains data key
            dispatch({
                    type: LOGIN_SUCCESS, payload: response.data.access_token
                })
                localStorage.setItem("isAuth", true)
                dispatch(push(path))
        })
        .catch(err => {
            if (err.response){
                const { data } = err.response
                dispatch({
                    type: AUTH_FAILURE, payload: data.message
                })
            }
            else{
                dispatch({
                    type: AUTH_FAILURE, payload: `Something Went Wrong!`
                })
            }
            
        })
};

export const logout = () => dispatch => {
    localStorage.removeItem("isAuth")
    dispatch({type: SIGN_OUT_SUCCESS})
    dispatch(push('/auth/login'))
}

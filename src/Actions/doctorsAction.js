import axios from 'axios';
import { BASE_URL, FETCH_DOCTORS, FETCH_ERROR, FETCH_DOCTOR} from './types';

export const fetchDoctor = (id) => async dispatch => {
    await axios.get(`${BASE_URL}/doctors/${id}`)
        .then(response => {
            dispatch({
                type: FETCH_DOCTOR, payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_ERROR, payload: { error: err, status: err.status }
            })
        })
};

export const fetchDoctors = () => async dispatch => {
    await axios.get(`${BASE_URL}/doctors`)
        .then(response => {
            
            dispatch({
                type: FETCH_DOCTORS, payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_ERROR, payload: { error: err, status: err.status }
            })
    })
};
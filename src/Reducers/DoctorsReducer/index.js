
import { FETCH_DOCTOR, UPDATE_DOCTOR, FETCH_DOCTORS } from '../../Actions/types';

export const initialState = {
    doctors: null,
    isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DOCTORS:
            return Object.assign({}, state, {
                doctors: action.payload.data,
            })
        case FETCH_DOCTOR:
            return Object.assign({}, state, {
                doctor: action.payload.data
            });
        case UPDATE_DOCTOR:
            return Object.assign({}, state, {
                doctor: action.payload.data,
            });
        default:
            return state;
    }
}

export default authReducer;
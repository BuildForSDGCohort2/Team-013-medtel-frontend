
import {LOGIN_SUCCESS, LOGIN_FAILURE} from '../../Actions/types';

export const initialState = {
    token: null,
    authError: null
};

const authReducer = (state=initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                token: action.payload,
                authError: null
            })
        case LOGIN_FAILURE:
            console.log(action.error)
            return Object.assign({}, state, {
                token: {},
                authError: action.payload
            })
        default:
            return state;
    }
}

export default authReducer;
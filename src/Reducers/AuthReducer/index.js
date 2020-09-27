
import { LOGIN_SUCCESS, AUTH_FAILURE, SIGN_OUT_SUCCESS, REGISTER_SUCCESS } from '../../Actions/types';

export const initialState = {
    token: null,
    authError: null,
    isAuthenticated: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                token: action.payload,
                authError: null,
                isAuthenticated: true
            })
        case REGISTER_SUCCESS:
            return Object.assign({}, state, {
                authError: null,
                token: action.payload,
                isAuthenticated: true
            });
        case SIGN_OUT_SUCCESS:
            return Object.assign({}, state, {
                authError: null,
                token: null,
                isAuthenticated: false
            });
        case AUTH_FAILURE:
            console.log(action.error)
            return Object.assign({}, state, {
                token: {},
                authError: action.payload,
                isAuthenticated: false
            })
        default:
            return state;
    }
}

export default authReducer;
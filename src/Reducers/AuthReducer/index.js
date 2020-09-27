
import {LOGIN_SUCCESS, LOGIN_FAILURE} from '../../Actions/types';

export const initialState = {
    token: {},
    types: {},
    fetchError: null
};

const authReducer = (state=initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                users_data: action.payload.data
            })
        case LOGIN_FAILURE:
            return {
                ...state, fetchError: action.error
            }
        default:
            return state;
    }
}

export default authReducer;
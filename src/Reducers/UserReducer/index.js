
import {FETCH_USERS, FETCH_ERROR} from '../../Actions/types';

export const initialState = {
    users_data: {},
};

const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_USERS:
            return Object.assign({}, state, {
                users_data: action.payload.data
            })
        case FETCH_ERROR:
            return Object.assign({}, state, {
                types: action.payload.data
            })
        default:
            return state;
    }
}

export default usersReducer;
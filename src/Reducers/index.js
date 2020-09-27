import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'
import usersReducer from './UserReducer';
import authReducer from './AuthReducer'



const combineReducer = (history) => combineReducers({
  router: connectRouter(history),
  users: usersReducer,
  auth: authReducer

});

export default combineReducer;
import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router';
import usersReducer from './UserReducer';
import authReducer from './AuthReducer';
import doctorsReducer from './DoctorsReducer';


const combineReducer = (history) => combineReducers({
  router: connectRouter(history),
  users: usersReducer,
  auth: authReducer,
  doctors: doctorsReducer
});

export default combineReducer;
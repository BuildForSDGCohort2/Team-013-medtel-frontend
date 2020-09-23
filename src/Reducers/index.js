import {combineReducers} from 'redux';
import { connectRouter } from 'connected-react-router'
import usersReducer from './UserReducer';





const combineReducer = (history) => combineReducers({
  router: connectRouter(history),
  users: usersReducer,
});

export default combineReducer;
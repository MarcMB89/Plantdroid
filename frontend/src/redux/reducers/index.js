import {combineReducers} from 'redux';
import plants from './plantReducer';
import auth from './authReducer';
import user from './userReducer';

export default combineReducers({
  plants,
  auth,
  user,
});

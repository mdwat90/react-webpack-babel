import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import mainReducer from './bulletin_reducer';

export default combineReducers({
  authReducer,
  mainReducer,
});

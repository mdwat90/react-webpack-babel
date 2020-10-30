import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import mainReducer from './main_reducer';
import storage from 'redux-persist/lib/storage';

const appReducer = combineReducers({
  authReducer,
  mainReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'USER_LOGOUT') {
    // for all keys defined in your persistConfig(s)
    storage.removeItem('persist:root');
    // storage.removeItem('persist:otherKey')
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

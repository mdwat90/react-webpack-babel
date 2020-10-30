import produce from 'immer';
import {
  AUTHENTICATE,
  SET_USER,
  SIGN_OUT,
} from '../actions/auth_actions/types';

export const INITIAL_STATE = {
  authenticated: false,
  userDetails: null,
  signedOut: false,
};
const authReducer = (state = INITIAL_STATE, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      case AUTHENTICATE:
        draft.authenticated = action.payload;
        break;

      case SET_USER:
        draft.userDetails = action.payload;
        break;

      case SIGN_OUT:
        draft.signedOut = action.payload;
        break;

      default:
        break;
    }
  });

export default authReducer;

import produce from 'immer';
// import {
//   SET_AIRCRAFT,
//   SET_SELECTED_AIRCRAFT,
// } from '../pages/Dashboard/actions/types';
// import { AUTH_LOGOUT } from '../actions/types';

export const INITIAL_STATE = {
  authenticated: false,
  user: null,
  signedOut: false,
};
const authReducer = (state = INITIAL_STATE, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      //   case AUTHENTICATE:
      //     draft.authenticated = action.payload;
      //     break;

      //   case SET_USER:
      //     draft.user = action.payload;
      //     break;

      //   case AUTH_LOGOUT:
      //     draft.signedOut = action.payload;
      //     break;
      default:
        break;
    }
  });

export default authReducer;

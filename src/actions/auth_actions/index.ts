import { AUTHENTICATE, SET_USER, USER_LOGOUT } from './types';

export const setAuthenticated = (authState: any) => {
  return {
    type: AUTHENTICATE,
    payload: authState,
  };
};

export const setUserAuthDetails = (userAuthDetails: any) => {
  return {
    type: SET_USER,
    payload: userAuthDetails,
  };
};

export const signOutUser = () => {
  return {
    type: USER_LOGOUT,
    payload: null,
  };
};

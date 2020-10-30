import { AUTHENTICATE, SET_USER, SIGN_OUT } from './types';

export const authenticate = (authState: any) => {
  return {
    type: AUTHENTICATE,
    payload: authState,
  };
};

export const setUserDetails = (userDetails: any) => {
  return {
    type: SET_USER,
    payload: userDetails,
  };
};

export const signOutUser = (signOutState: any) => {
  return {
    type: SIGN_OUT,
    payload: signOutState,
  };
};

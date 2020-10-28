import { useContext } from 'react';
import { UserContext } from '../utils/userContext';
import { RouteComponentProps, navigate } from '@reach/router';
import * as firebase from 'firebase/app';

export const setLocalStorage = (auth: any) => {
  const { displayName, email, photoURL, uid } = auth;
  const now = new Date();

  localStorage.clear();
  localStorage.setItem('displayName', displayName);
  localStorage.setItem('email', email);
  localStorage.setItem('bulletinUID', uid);
  photoURL !== null && localStorage.setItem('photoURL', photoURL);

  localStorage.setItem('expiresAt', JSON.stringify(now.getTime() + 100000000));
};

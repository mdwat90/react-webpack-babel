import { RouteComponentProps, navigate } from '@reach/router';
import * as firebase from 'firebase/app';
import { store } from '../utils/configureStore';
import { signOutUser, setAuthenticated } from '../actions/auth_actions';

export const signOut = () => {
  // TODO: save document to Firebase before signing out
  firebase
    .auth()
    .signOut()
    .then(function () {
      console.log('SIGNED OUT');
      localStorage.clear();
      store.dispatch(signOutUser());
      store.dispatch(setAuthenticated(false));
      navigate('/auth', { replace: true });
    })
    .catch(function (error) {
      console.log('SIGNOUT ERROR', error);
    });
};

export const setLocalStorage = (auth: any) => {
  const { displayName, email, photoURL, uid } = auth;
  const now = new Date();

  localStorage.clear();
  localStorage.setItem('displayName', displayName);
  localStorage.setItem('email', email);
  photoURL !== null && localStorage.setItem('photoURL', photoURL);

  localStorage.setItem('expiresAt', JSON.stringify(now.getTime() + 100000000));
};

export const checkLocalStorageExpiration = (
  navigationProps: RouteComponentProps
): any => {
  let storageExpiration = localStorage.getItem('expiresAt');
  let currTime = JSON.stringify(new Date().getTime());

  // if the item doesn't exist, return null
  if (!storageExpiration) return null;

  storageExpiration = JSON.parse(storageExpiration);
  currTime = JSON.parse(currTime);

  // compare the expiration time with the current time
  if (storageExpiration && currTime > storageExpiration) {
    // If expired, delete the item from storage and signOut
    localStorage.removeItem('expiresAt');
    signOut();
  }

  return null;
};

import { RouteComponentProps } from '@reach/router';
import * as firebase from 'firebase/app';

export const signOut = (navigationProps: RouteComponentProps) => {
  firebase
    .auth()
    .signOut()
    .then(function () {
      // Sign-out successful.
      console.log('SIGNED OUT');
      localStorage.clear();
      navigationProps.navigate(`/`, { replace: true });
    })
    .catch(function (error) {
      // An error happened.
      console.log('SIGNOUT ERROR', error);
    });
};

export const handleLocalStorage = (auth: any) => {
  const { displayName, email, photoURL } = auth;
  const now = new Date();

  localStorage.clear();
  localStorage.setItem('displayName', displayName);
  localStorage.setItem('email', email);
  photoURL !== null && localStorage.setItem('photoURL', photoURL);

  localStorage.setItem('expiresAt', JSON.stringify(now.getTime() + 1000000));
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

  // console.log('storage expiration:::', storageExpiration);
  // console.log('current time:::', currTime);

  // compare the expiration time with the current time
  if (storageExpiration && currTime > storageExpiration) {
    // If expired, delete the item from storage and signOut
    localStorage.removeItem('expiresAt');
    signOut(navigationProps);
    return null;
  }

  return null;
};

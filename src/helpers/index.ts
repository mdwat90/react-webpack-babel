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

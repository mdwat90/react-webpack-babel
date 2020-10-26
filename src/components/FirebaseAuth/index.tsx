import React, { useContext } from 'react';
import * as firebase from 'firebase/app';
import { UserContext } from '../../utils/userContext';
import { RouteComponentProps, Redirect, navigate } from '@reach/router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setLocalStorage } from '../../helpers';
import 'firebase/auth';

const FirebaseAuth = (props: RouteComponentProps) => {
  const { user, setUserDetails } = useContext(UserContext);

  const localStorageUid = localStorage.getItem('bulletinUid');

  if (localStorageUid) {
    return <Redirect noThrow to="dashboard" />;
  }

  // const signInUrl =
  //   process.env.NODE_ENV === 'development'
  //     ? 'http://localhost:3000/dashboard'
  //     : 'http://bulletin.com/dashboard';

  var uiConfig = {
    // signInSuccessUrl: '/dashboard',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],

    callbacks: {
      signInSuccessWithAuthResult: function (authResult: any) {
        const { displayName, email, photoURL, uid } = authResult.user;
        const userDetails = {
          displayName,
          email,
          photoURL,
          uid,
        };
        setUserDetails(userDetails);
        // TODO: Make localStorage expire
        setLocalStorage(authResult.user);
        // TODO: Can we use the uiConfig signInSuccessUrl?
        navigate(`/dashboard`, { replace: true });
        return false;
      },
    },

    // Terms of service url/callback.
    tosUrl: '<your-tos-url>',
    // Privacy policy url/callback.
    privacyPolicyUrl: function () {
      window.location.assign('<your-privacy-policy-url>');
    },
  };

  return (
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
  );
};

export default FirebaseAuth;

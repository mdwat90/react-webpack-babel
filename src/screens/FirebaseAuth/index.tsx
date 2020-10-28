import React, { useState, useContext } from 'react';
import * as firebase from 'firebase/app';
import { UserContext } from '../../utils/userContext';
import { RouteComponentProps, Redirect, navigate } from '@reach/router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setLocalStorage } from '../../helpers';
import StyledContainer from './StyledContainer';
import 'firebase/auth';
import { Typography, CircularProgress } from '@material-ui/core';
import Typing from 'react-typing-animation';

const FirebaseAuth = (props: RouteComponentProps) => {
  const { user, setUserDetails } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const localStorageUID = localStorage.getItem('bulletinUID');

  if (localStorageUID) {
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
        setLoading(false);
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
    <StyledContainer>
      {loading ? (
        <CircularProgress />
      ) : (
        <React.Fragment>
          <Typography variant="h2" gutterBottom>
            <Typing speed={125} loop>
              <span>BULLETIN</span>
              <Typing.Reset count={1} delay={2000} />
            </Typing>
          </Typography>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </React.Fragment>
      )}
    </StyledContainer>
  );
};

export default FirebaseAuth;

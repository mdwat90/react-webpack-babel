import React from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase/app';
import { Redirect, navigate } from '@reach/router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setLocalStorage } from '../../helpers';
import FirebaseAuthStyles from './FirebaseAuthStyles';
import { Typography, CircularProgress } from '@material-ui/core';
import { StyledTypist } from '../../components/styledComponents';
import {
  setUserAuthDetails,
  setAuthenticated,
} from '../../actions/auth_actions';
import { getUserData } from '../../api';
import { setLoading } from '../../actions/main_actions';
import 'firebase/auth';

interface FirebaseAuthProps {
  loading: any;
  authenticated: any;
  setLoading: (bool: boolean) => any;
  setAuthenticated: (bool: boolean) => any;
  setUserAuthDetails: (user: object) => any;
}

const FirebaseAuth = ({
  loading,
  authenticated,
  setLoading,
  setAuthenticated,
  setUserAuthDetails,
}: FirebaseAuthProps) => {
  const classes = FirebaseAuthStyles();

  if (authenticated) {
    return <Redirect noThrow to="/" />;
  }

  const authCallback = (authResult: any) => {
    const { displayName, email, photoURL, uid } = authResult.user;
    const userAuthDetails = {
      displayName,
      email,
      photoURL,
      uid,
    };
    setUserAuthDetails(userAuthDetails);
    getUserData(uid);
    setLocalStorage(authResult.user);
    setAuthenticated(true);
    navigate(`/`, { replace: true });
    setLoading(false);
  };

  // const signInUrl =
  //   process.env.NODE_ENV === 'development'
  //     ? 'http://localhost:3000/dashboard'
  //     : 'http://bulletin.com/dashboard';

  var uiConfig = {
    // signInSuccessUrl: '/dashboard',
    // signInFlow: 'popup',
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],

    callbacks: {
      signInSuccessWithAuthResult: function (authResult: any) {
        authCallback(authResult);
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
    <div className={classes.authContainer}>
      <React.Fragment>
        {loading ? (
          <CircularProgress />
        ) : (
          <Typography variant="h2" gutterBottom>
            <StyledTypist>
              <StyledTypist.Delay ms={1500} />
              <span>BULLETIN</span>
            </StyledTypist>
          </Typography>
        )}
        <StyledFirebaseAuth
          uiCallback={(ui) => {
            if (ui.isPendingRedirect()) {
              setLoading(true);
            }
          }}
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </React.Fragment>
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  const {
    authReducer: { userAuthDetails, authenticated },
    mainReducer: { loading },
  } = state;
  return {
    authenticated: authenticated,
    userAuthDetails: userAuthDetails,
    loading: loading,
  };
};

const actionCreators = {
  setAuthenticated,
  setUserAuthDetails,
  setLoading,
};

export default connect(mapStateToProps, actionCreators)(FirebaseAuth);

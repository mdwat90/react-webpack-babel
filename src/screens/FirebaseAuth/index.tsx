import React from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase/app';
import { Redirect, navigate } from '@reach/router';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { setLocalStorage } from '../../helpers';
import FirebaseAuthStyles from './FirebaseAuthStyles';
import { Typography, CircularProgress } from '@material-ui/core';
import { StyledTypist } from '../../components/styledComponents';
import { setUserDetails } from '../../actions/auth_actions';
import { setLoading } from '../../actions/main_actions';
import 'firebase/auth';

interface FirebaseAuthProps {
  loading: any;
  setLoading: (bool: boolean) => any;
  setUserDetails: (user: object) => any;
}

const FirebaseAuth = ({
  loading,
  setLoading,
  setUserDetails,
}: FirebaseAuthProps) => {
  const classes = FirebaseAuthStyles();

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
    signInFlow: 'popup',
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
    <div className={classes.authContainer}>
      <React.Fragment>
        {loading ? (
          <CircularProgress />
        ) : (
          <Typography variant="h2" gutterBottom>
            <StyledTypist>
              <StyledTypist.Delay ms={1000} />
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
    authReducer: { userDetails },
    mainReducer: { loading },
  } = state;
  return {
    user: userDetails,
    loading: loading,
  };
};

const actionCreators = {
  setUserDetails,
  setLoading,
};

export default connect(mapStateToProps, actionCreators)(FirebaseAuth);

import React from 'react';
import { hot } from 'react-hot-loader';
import { Router, Link, RouteComponentProps } from '@reach/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/analytics';
import './App.css';

const App: React.FC = (): any => {
  var firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DB_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID,
  };

  if (!firebase.apps.length) {
    try {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    } catch (err) {
      console.log(err);
    }
  }

  const signUp = () => {
    firebase.database().ref('users/').set({
      username: 'David',
      email: 'test@test.com',
    });
  };

  let Home = (props: RouteComponentProps) => (
    <div>
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
  let Dash = (props: RouteComponentProps) => <div>Dashboard Component</div>;

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Dash path="dashboard" />
      </Router>
    </div>
  );
};

export default hot(module)(App);

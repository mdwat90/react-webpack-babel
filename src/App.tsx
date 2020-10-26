import React from 'react';
import { hot } from 'react-hot-loader';
import { Router } from '@reach/router';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';
import { UserProvider } from './utils/userContext';
import './App.css';
import FirebaseAuth from './screens/FirebaseAuth';
import Dashboard from './screens/Dashboard';

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

  return (
    <UserProvider>
      <Router>
        <FirebaseAuth path="/" />
        <Dashboard path="dashboard" />
      </Router>
    </UserProvider>
  );
};

export default hot(module)(App);

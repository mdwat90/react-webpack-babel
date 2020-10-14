import React from 'react';
import { hot } from 'react-hot-loader';
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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  console.log(firebase);

  const signUp = () => {
    firebase.database().ref('users/').set({
      username: 'David',
      email: 'test@test.com',
    });
  };
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
};

export default hot(module)(App);

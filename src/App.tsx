import React from 'react';
import { hot } from 'react-hot-loader';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './utils/configureStore';

import 'babel-polyfill';
import FirebaseAuth from './screens/FirebaseAuth';
import Home from './screens/Home';
import Dashboard from './screens/Home/Dashboard';
import NewDocument from './screens/Home/Dashboard/NewDocument';
import EditRecent from './screens/Home/Recents/EditRecent';
import Recents from './screens/Home/Recents';

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <FirebaseAuth path="/auth" />
          <Home path="/">
            <Dashboard path="/" />
            <NewDocument path="new-doc" />
            <Recents path="recents" />
            <EditRecent path="edit-doc" />
          </Home>
          {/* TODO: create a NotFound component => <NotFound default /> */}
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default hot(module)(App);

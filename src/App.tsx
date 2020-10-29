import React from 'react';
import { hot } from 'react-hot-loader';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BulletinReducer from './reducers/bulletin_reducer';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';

import FirebaseAuth from './screens/FirebaseAuth';
import Dashboard from './screens/Dashboard';
import History from './screens/History';
import 'babel-polyfill';
import CombinedProviders from './utils/CombinedProviders';

const store = createStore(BulletinReducer);

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
      <CombinedProviders>
        <Router>
          <FirebaseAuth path="/" />
          <Dashboard path="dashboard" />
          <History path="history" />
        </Router>
      </CombinedProviders>
    </Provider>
  );
};

export default hot(module)(App);

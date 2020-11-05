// import * as firebase from 'firebase/app';
// import 'firebase/database';

import { database } from '../App';

export const getUserData = (userId: any) => {
  return database
    .ref('/users/' + userId)
    .once('value')
    .then(function (snapshot: any) {
      console.log('SNAPSHOT', snapshot.val());
      if (snapshot.val() === null) {
        createRealTimeUser(userId);
      } else {
        console.log(snapshot.val());
      }
    });
};

export const createRealTimeUser = (userId: any) => {
  const timestamp = Date.now();
  return database.ref('users/' + userId).set({
    createdAt: timestamp,
  });
};

export const createNewDocument = (userId: any, tempateId: any) => {
  const timestamp = Date.now();
  var documentListRef = database.ref('documents');
  var newDocumentRef = documentListRef.push();
  return newDocumentRef.set({
    createdAt: timestamp,
    lastUpdated: timestamp,
  });
};

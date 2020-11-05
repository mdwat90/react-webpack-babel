// import * as firebase from 'firebase/app';
// import 'firebase/database';

import { database } from '../App';

export const getUserData = (userId: any) => {
  console.log('GET USER DATA FUNC', userId);
  return database.ref('/users/' + userId).once('value');
};

export const writeUserData = (userId: any) => {
  return database.ref('users/' + userId).set({
    userId: {
      createdAt: new Date().getMilliseconds,
      groups: [],
      documents: [],
      postedAnnouncements: [],
      draftedAnnouncements: [],
    },
  });
};

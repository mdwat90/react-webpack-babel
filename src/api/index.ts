import { database } from '../App';

export const getUserData = (userId: any) => {
  return database
    .ref('/users/' + userId)
    .once('value')
    .then(function (snapshot: any) {
      if (snapshot.val() === null) {
        createRealTimeUser(userId);
      } else {
        console.log(snapshot.val());
        // TODO: dispatch action to set user info to mainReducer
      }
    });
};

export const createRealTimeUser = (userId: any) => {
  const timestamp = Date.now();
  return database.ref('users/' + userId).set({
    createdAt: timestamp,
  });
};

export const createNewDocument = (userId: any, templateId?: any) => {
  const timestamp = Date.now();
  var documentListRef = database.ref('/documents');
  return documentListRef.push().set({
    createdAt: timestamp,
    lastUpdated: timestamp,
    createdBy: userId,
  });
};

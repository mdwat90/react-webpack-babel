import React, { useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import { UserContext } from '../../utils/userContext';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const Dash = (props: RouteComponentProps) => {
  const { user } = useContext(UserContext);

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log('SIGNED OUT');
        localStorage.clear();
        props.navigate(`/`, { replace: true });
      })
      .catch(function (error) {
        // An error happened.
        console.log('SIGNOUT ERROR', error);
      });
  };
  return (
    <div>
      <nav>
        <button onClick={signOut}>SIGN OUT</button>
        <span>Welcome {user.displayName}!</span>
      </nav>
    </div>
  );
};

export default Dash;

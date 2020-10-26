import React, { useContext } from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';
import { UserContext } from '../../utils/userContext';
import Navbar from '../../components/Navbar';

import 'firebase/auth';

const Dashboard = (props: RouteComponentProps) => {
  const { user } = useContext(UserContext);

  const localStorageUid = localStorage.getItem('bulletinUid');

  if (!localStorageUid) {
    return <Redirect noThrow to="/" />;
  }

  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
      }}
    >
      <div>
        <Navbar {...props} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
          backgroundColor: 'grey',
        }}
      >
        Dashboard
      </div>
    </div>
  );
};

export default Dashboard;

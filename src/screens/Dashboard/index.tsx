import React, { useContext } from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';
import { UserContext } from '../../utils/userContext';
import Navbar from '../../components/Navbar';

import 'firebase/auth';
import Textarea from '../../components/Textarea';

const Dashboard = (props: RouteComponentProps) => {
  const { user } = useContext(UserContext);

  const localStorageUID = localStorage.getItem('bulletinUID');

  if (!localStorageUID) {
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
          backgroundColor: '#e0e0e0',
        }}
      >
        <Textarea height="75vh" width="55vw"></Textarea>
      </div>
    </div>
  );
};

export default Dashboard;

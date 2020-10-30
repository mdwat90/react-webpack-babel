import React from 'react';
import { RouteComponentProps, Redirect } from '@reach/router';
import Navbar from '../../components/Navbar';
import DashboardStyles from './DashboardStyles';

import 'firebase/auth';
import Card from '../../components/Card';

interface DashboardProps extends RouteComponentProps {
  children?: any;
}

const Dashboard = ({ children, ...rest }: DashboardProps) => {
  const classes = DashboardStyles();

  const localStorageUID = localStorage.getItem('bulletinUID');

  if (!localStorageUID) {
    return <Redirect noThrow to="/" />;
  }

  return (
    <div>
      <Card title={'New Document'} path={'new-doc'} />
      <Card title={'Explore Templates'} path={'templates'} />
    </div>
  );
};

export default Dashboard;

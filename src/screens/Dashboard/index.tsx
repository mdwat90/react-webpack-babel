import React from 'react';
import { RouteComponentProps } from '@reach/router';
import DashboardStyles from './DashboardStyles';

import 'firebase/auth';
import Card from '../../components/Card';

interface DashboardProps extends RouteComponentProps {
  children?: any;
}

const Dashboard = ({ children, ...rest }: DashboardProps) => {
  const classes = DashboardStyles();

  return (
    <div className={classes.dashContainer}>
      <div className={classes.contentContainer}>
        <Card title={'New Bulletin'} path={'new-doc'} />
        <Card title={'Explore Templates'} path={'templates'} />
      </div>
    </div>
  );
};

export default Dashboard;

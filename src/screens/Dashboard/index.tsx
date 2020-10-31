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

  // icon={<span> </span>}
  return (
    <div className={classes.dashContainer}>
      <div className={classes.contentContainer}>
        <Card title={'New Bulletin'} path={'new-doc'} icon={<span>📃</span>} />
        <Card
          title={'Explore Templates'}
          path={'templates'}
          icon={<span>🔍</span>}
        />
        <Card
          title={'Announcements'}
          path={'announcements'}
          icon={<span>🗣</span>}
        />
      </div>
    </div>
  );
};

export default Dashboard;

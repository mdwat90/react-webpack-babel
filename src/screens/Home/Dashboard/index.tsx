import React from 'react';
import { RouteComponentProps } from '@reach/router';
import DashboardStyles from './DashboardStyles';

import 'firebase/auth';
import { DashboardCard } from '../../../components/Card';

interface DashboardProps extends RouteComponentProps {
  children?: any;
}

const Dashboard = ({ children, ...rest }: DashboardProps) => {
  const classes = DashboardStyles();

  return (
    <div className={classes.dashContainer}>
      <div className={classes.contentContainer}>
        <DashboardCard
          title={'New Bulletin'}
          path={'new-doc'}
          icon={<span>📃</span>}
        />
        {/* <DashboardCard
          title={'Current Bulletin'}
          path={'current-doc'}
          icon={<span>📁</span>}
        /> */}
        <DashboardCard
          title={'Announcements'}
          path={'announcements'}
          icon={<span>📣</span>}
        />
      </div>
    </div>
  );
};

export default Dashboard;

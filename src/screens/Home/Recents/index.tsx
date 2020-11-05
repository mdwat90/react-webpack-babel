import React from 'react';
import { RouteComponentProps } from '@reach/router';
import RecentsStyles from './RecentsStyles';

import 'firebase/auth';
import { RecentsCard } from '../../../components/Card';

interface RecentsProps extends RouteComponentProps {
  children?: any;
}

const Recents = ({ children, ...rest }: RecentsProps) => {
  const classes = RecentsStyles();

  // Will retrieve documents from users.user-id.documents, then retrieve them from "documents" document.
  // Loop through documents and create a RecentsCard for each. Will pass in timestamp and what step document stopped at

  return (
    <div className={classes.dashContainer}>
      <div className={classes.contentContainer}>
        <RecentsCard
          title={'Current Bulletin'}
          path={'edit-doc'}
          icon={<span>📁</span>}
          // timestamp={}
        />
      </div>
    </div>
  );
};

export default Recents;

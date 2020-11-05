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

  // TODO: need to include the document-id in url
  // Will retrieve documents from users.user-id.documents, then retrieve them from "documents" document.
  // Loop through documents and create a RecentsCard for each.

  return (
    <div className={classes.dashContainer}>
      <div className={classes.contentContainer}>
        <RecentsCard
          // Title Prop. Title will be formatted timestamp
          // Step Prop. Will be the step at which this document stopped
          title={'Current Bulletin'}
          path={'edit-doc'}
          icon={<span>📁</span>}
        />
      </div>
    </div>
  );
};

export default Recents;

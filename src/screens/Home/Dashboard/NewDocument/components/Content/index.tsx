import React from 'react';
import { Typography } from '@material-ui/core';
import CustomEditor from '../../../../../../components/CustomEditor';

const Content = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '75vh',
        height: '50vw',
        flexDirection: 'column',
        backgroundColor: 'white',
      }}
    >
      {/* TODO: integrate Draft.js */}
      <Typography variant="h5">Content</Typography>
      <CustomEditor />
    </div>
  );
};

export default Content;

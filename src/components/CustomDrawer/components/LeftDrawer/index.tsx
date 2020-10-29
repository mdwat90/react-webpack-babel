import React from 'react';
import { IconButton, Divider } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import TextEdit from '../../../TextEdit';
import LeftDrawerStyles from './LeftDrawerStyles';

interface DrawerProps {
  open: any;
  toggleDrawer: (bool: boolean) => void;
}

const LeftDrawer = ({ open, toggleDrawer }: DrawerProps) => {
  const classes = LeftDrawerStyles();
  return (
    <React.Fragment>
      <div className={classes.header} />
      {open && (
        <React.Fragment>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              margin: '0px 10px',
              minHeight: '64px',
            }}
          >
            <IconButton onClick={() => toggleDrawer(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              height: '100vh',
              padding: '25px 20px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '10vh',
                padding: '25px 20px',
              }}
            >
              <TextEdit />
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default LeftDrawer;

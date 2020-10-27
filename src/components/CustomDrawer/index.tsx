import React, { useState } from 'react';
import { signOut } from '../../helpers';
import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
  Drawer,
  IconButton,
  Divider,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DrawerStyles from './DrawerStyles';

import { RouteComponentProps } from '@reach/router';

interface DrawerProps {
  open: any;
  toggleDrawer: (bool: boolean) => void;
  navProps: RouteComponentProps;
}

const CustomDrawer = ({ open, toggleDrawer, navProps }: DrawerProps) => {
  const classes = DrawerStyles();

  return (
    <Drawer
      variant="persistent"
      open={open}
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          margin: '0px 10px',
          height: '20vh',
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
          alignItems: 'flex-start',
          justifyContent: 'center',
          height: '100vh',
          padding: '25px 0px',
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => signOut(navProps)}
        >
          SIGN OUT
        </Button>
      </div>
    </Drawer>
  );
};

export default CustomDrawer;

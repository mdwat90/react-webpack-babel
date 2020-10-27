import React, { useState } from 'react';
import { signOut } from '../../helpers';
import StyledDrawer from './StyledDrawer';
import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Divider,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { RouteComponentProps } from '@reach/router';

interface DrawerProps {
  open: any;
  width: any;
  toggleDrawer: (bool: boolean) => void;
  navProps: RouteComponentProps;
}

const Drawer = ({ open, width, toggleDrawer, navProps }: DrawerProps) => {
  return (
    <StyledDrawer open={open} width={width}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          margin: '0px 10px',
          height: '8vh',
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
    </StyledDrawer>
  );
};

export default Drawer;

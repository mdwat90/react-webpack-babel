import React, { useState } from 'react';
import { signOut } from '../../helpers';
import clsx from 'clsx';
import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
  Drawer,
  IconButton,
  Divider,
  useTheme,
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
      variant="permanent"
      open={open}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          margin: '0px 10px',
          height: '10vh',
        }}
      >
        {open ? (
          <IconButton onClick={() => toggleDrawer(false)}>
            <ChevronLeftIcon />
          </IconButton>
        ) : (
          <span></span>
        )}
      </div>
      {open && <Divider />}
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
        {open && (
          <div>
            <h2>Stuff</h2>
            <h2>More Stuff</h2>
            <h2>Nothing</h2>
          </div>
        )}
      </div>
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
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => signOut(navProps)}
          className={clsx({
            [classes.hide]: !open,
          })}
        >
          SIGN OUT
        </Button>
      </div>
    </Drawer>
  );
};

export default CustomDrawer;

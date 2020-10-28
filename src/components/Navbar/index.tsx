import React, { useState, useContext } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import clsx from 'clsx';
import { UserContext } from '../../utils/userContext';
import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Divider,
  useTheme,
} from '@material-ui/core';
import * as firebase from 'firebase/app';

import NavbarStyles from './NavbarStyles';
import MenuIcon from '@material-ui/icons/Menu';
import CustomDrawer from '../CustomDrawer';
import ClearIcon from '@material-ui/icons/Clear';
import { checkLocalStorageExpiration } from '../../helpers';

const Navbar = (props: RouteComponentProps) => {
  const classes = NavbarStyles();
  const { user, setUserDetails, loading, setLoading } = useContext(UserContext);
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const toggleLeftDrawer = (toggle: boolean) => {
    setOpenLeft(toggle);
  };
  const toggleRightDrawer = (toggle: boolean) => {
    setOpenRight(toggle);
  };

  const hasPhoto = !!user.photoURL;

  const firstLetter = user.displayName.charAt(0);

  checkLocalStorageExpiration(props);

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="default"
        className={clsx(
          classes.appBar
          //   {
          //   [classes.appBarShiftLeft]: openLeft,
          //   [classes.appBarShiftRight]: openRight,
          // }
        )}
      >
        <Toolbar className={classes.toolBar}>
          <span>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => toggleLeftDrawer(!openLeft)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </span>
          <span>
            <Typography>Welcome {user.displayName}!</Typography>
          </span>
          {hasPhoto ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => toggleRightDrawer(!openRight)}
              edge="start"
            >
              <Avatar
                src={user.photoURL}
                alt={`photo of ${user.displayName}`}
              />
            </IconButton>
          ) : (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => toggleRightDrawer(!openRight)}
              edge="start"
            >
              <Avatar>{firstLetter}</Avatar>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
      <CustomDrawer
        open={openLeft}
        variant="persistent"
        anchor="left"
        toggleDrawer={toggleLeftDrawer}
        navProps={props}
      />
      <CustomDrawer
        open={openRight}
        variant="persistent"
        anchor="right"
        toggleDrawer={toggleRightDrawer}
        navProps={props}
      />
    </React.Fragment>
  );
};

export default Navbar;

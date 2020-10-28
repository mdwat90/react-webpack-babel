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

const Navbar = (props: RouteComponentProps) => {
  const classes = NavbarStyles();
  const { user, setUserDetails, loading, setLoading } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (toggle: boolean) => {
    setOpen(toggle);
  };

  const hasPhoto = !!user.photoURL;

  const signOut = () => {
    setLoading(true);
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        console.log('SIGNED OUT');
        localStorage.clear();
        navigate(`/`, { replace: true });
        setLoading(false);
      })
      .catch(function (error) {
        // An error happened.
        console.log('SIGNOUT ERROR', error);
        setLoading(false);
      });
  };

  const checkLocalStorageExpiration = (
    navigationProps: RouteComponentProps
  ): any => {
    let storageExpiration = localStorage.getItem('expiresAt');
    let currTime = JSON.stringify(new Date().getTime());

    // if the item doesn't exist, return null
    if (!storageExpiration) return null;

    storageExpiration = JSON.parse(storageExpiration);
    currTime = JSON.parse(currTime);

    // console.log('storage expiration:::', storageExpiration);
    // console.log('current time:::', currTime);

    // compare the expiration time with the current time
    if (storageExpiration && currTime > storageExpiration) {
      // If expired, delete the item from storage and signOut
      localStorage.removeItem('expiresAt');
      signOut();
      return null;
    }

    return null;
  };

  checkLocalStorageExpiration(props);

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        color="default"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolBar}>
          {open ? (
            <span></span>
          ) : (
            <span>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={() => toggleDrawer(true)}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </span>
          )}
          <span>
            <Typography>Welcome {user.displayName}!</Typography>
          </span>
          {hasPhoto ? (
            <div>
              <Avatar
                src={user.photoURL}
                alt={`photo of ${user.displayName}`}
              />
            </div>
          ) : (
            <span></span>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
      <CustomDrawer open={open} toggleDrawer={toggleDrawer} navProps={props} />
    </React.Fragment>
  );
};

export default Navbar;

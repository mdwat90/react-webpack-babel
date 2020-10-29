import React, { useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import clsx from 'clsx';
import { UserContext } from '../../utils/userContext';
import {
  AppBar,
  Avatar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core';

import NavbarStyles from './NavbarStyles';
import MenuIcon from '@material-ui/icons/Menu';
import CustomDrawer from '../CustomDrawer';
import { checkLocalStorageExpiration } from '../../helpers';
import { NavBarContext } from '../../utils/navBarContext';

const Navbar = (props: RouteComponentProps) => {
  const classes = NavbarStyles();
  const { user } = useContext(UserContext);
  const { openLeft, setOpenLeft, openRight, setOpenRight } = useContext(
    NavBarContext
  );

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
      <AppBar position="fixed" color="default" className={clsx(classes.appBar)}>
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
            <Typography>Welcome, {user.displayName} 😎</Typography>
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
        variant="permanent"
        anchor="right"
        toggleDrawer={toggleRightDrawer}
        navProps={props}
      />
    </React.Fragment>
  );
};

export default Navbar;

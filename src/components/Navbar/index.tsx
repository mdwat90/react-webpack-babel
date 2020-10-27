import React, { useState, useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import clsx from 'clsx';
import { checkLocalStorageExpiration } from '../../helpers';
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

import NavbarStyles from './NavbarStyles';
import MenuIcon from '@material-ui/icons/Menu';
import CustomDrawer from '../CustomDrawer';

const Navbar = (props: RouteComponentProps) => {
  const classes = NavbarStyles();
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (toggle: boolean) => {
    setOpen(toggle);
  };

  const hasPhoto = !!user.photoURL;

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

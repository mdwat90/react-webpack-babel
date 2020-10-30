import React from 'react';
import clsx from 'clsx';
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
import { connect } from 'react-redux';
import {
  toggleLeftDrawer,
  toggleRightDrawer,
} from '../../actions/main_actions';

interface NavBarProps {
  user: any;
  openLeft: any;
  openRight: any;
  toggleLeftDrawer: (bool: boolean) => any;
  toggleRightDrawer: (bool: boolean) => any;
}

const Navbar = ({
  user,
  openLeft,
  openRight,
  toggleLeftDrawer,
  toggleRightDrawer,
  ...rest
}: NavBarProps) => {
  const classes = NavbarStyles();

  const hasPhoto = !!user?.photoURL;

  const firstLetter = user?.displayName.charAt(0);

  checkLocalStorageExpiration(rest);

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
            <Typography>Welcome, {user?.displayName} 😎</Typography>
          </span>
          {hasPhoto ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => toggleRightDrawer(!openRight)}
              edge="start"
            >
              <Avatar
                src={user?.photoURL}
                alt={`photo of ${user?.displayName}`}
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
        navProps={rest}
      />
      <CustomDrawer
        open={openRight}
        variant="permanent"
        anchor="right"
        toggleDrawer={toggleRightDrawer}
        navProps={rest}
      />
    </React.Fragment>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  const {
    mainReducer: { leftNavOpen, rightNavOpen },
    authReducer: { userDetails },
  } = state;
  return {
    user: userDetails,
    openLeft: leftNavOpen,
    openRight: rightNavOpen,
  };
};

const actionCreators = {
  toggleLeftDrawer,
  toggleRightDrawer,
};

export default connect(mapStateToProps, actionCreators)(Navbar);

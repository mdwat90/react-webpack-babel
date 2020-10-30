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
import { checkLocalStorageExpiration } from '../../../../helpers';
import { connect } from 'react-redux';
import {
  toggleLeftDrawer,
  toggleRightDrawer,
} from '../../../../actions/main_actions';
import { RouteComponentProps } from '@reach/router';

interface NavBarProps extends RouteComponentProps {
  user: any;
  openLeft: any;
  openRight: any;
  toggleLeftDrawer: (bool: boolean) => any;
  toggleRightDrawer: (bool: boolean) => any;
  children?: any;
}

const Navbar = ({
  user,
  openLeft,
  openRight,
  toggleLeftDrawer,
  toggleRightDrawer,
  children,
  ...rest
}: NavBarProps) => {
  const classes = NavbarStyles();

  const hasPhoto = !!user?.photoURL;

  const firstLetter = user?.displayName.charAt(0);

  checkLocalStorageExpiration(rest);

  // const getSeasonEmoji = () => {
  //   const seasonEmojis = [
  //     <span>⛄</span>,
  //     <span>🌻</span>,
  //     <span>😎</span>,
  //     <span>🍂</span>,
  //   ];

  //   const yearString = new Date().getFullYear();
  //   const dateString = new Date().toLocaleDateString();

  //   const springString = `3/1/${yearString}`;
  //   const summerString = `6/1/${yearString}`;
  //   const fallString = `9/1/${yearString}`;
  //   const winterString = `12/1/${yearString}`;

  //   const currentDate = Date.parse(dateString);
  //   const spring = Date.parse(springString);
  //   const summer = Date.parse(summerString);
  //   const fall = Date.parse(fallString);
  //   const winter = Date.parse(winterString);

  //   if (currentDate > spring && currentDate < summer) {
  //     // Spring emoji
  //     return seasonEmojis[1];
  //   } else if (currentDate > summer && currentDate < fall) {
  //     // Summer emoji
  //     return seasonEmojis[2];
  //   } else if (currentDate > fall && currentDate < winter) {
  //     // Fall emoji
  //     return seasonEmojis[3];
  //   } else {
  //     // Winter emoji
  //     return seasonEmojis[0];
  //   }
  // };

  // const getBackgroundColor = () => {
  //   const seasonEmojis = ['#3d94ff', '#519c53', '#d93604', ' #dbd807'];

  //   const yearString = new Date().getFullYear();
  //   const dateString = new Date().toLocaleDateString();

  //   const springString = `3/1/${yearString}`;
  //   const summerString = `6/1/${yearString}`;
  //   const fallString = `9/1/${yearString}`;
  //   const winterString = `12/1/${yearString}`;

  //   const currentDate = Date.parse(dateString);
  //   const spring = Date.parse(springString);
  //   const summer = Date.parse(summerString);
  //   const fall = Date.parse(fallString);
  //   const winter = Date.parse(winterString);

  //   if (currentDate > spring && currentDate < summer) {
  //     // Spring emoji
  //     return seasonEmojis[1];
  //   } else if (currentDate > summer && currentDate < fall) {
  //     // Summer emoji
  //     return seasonEmojis[2];
  //   } else if (currentDate > fall && currentDate < winter) {
  //     // Fall emoji
  //     return seasonEmojis[3];
  //   } else {
  //     // Winter emoji
  //     return seasonEmojis[0];
  //   }
  // };

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        // style={{ backgroundColor: getBackgroundColor() }}
        className={clsx(classes.appBar)}
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

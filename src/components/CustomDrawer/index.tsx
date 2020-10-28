import React, { useContext } from 'react';
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
import * as firebase from 'firebase/app';
import { UserContext } from '../../utils/userContext';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DrawerStyles from './DrawerStyles';
import { signOut } from '../../helpers';

import { RouteComponentProps, navigate } from '@reach/router';
import LeftDrawer from './components/LeftDrawer';
import RightDrawer from './components/RightDrawer';

interface DrawerProps {
  open: any;
  variant: any;
  anchor: any;
  toggleDrawer: (bool: boolean) => void;
  navProps: RouteComponentProps;
}

const CustomDrawer = ({
  open,
  anchor,
  variant,
  toggleDrawer,
  navProps,
}: DrawerProps) => {
  const { user, setUserDetails, loading, setLoading } = useContext(UserContext);
  const classes = DrawerStyles();

  return (
    <Drawer
      variant={variant}
      anchor={anchor}
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
      {anchor === 'left' ? (
        <LeftDrawer open={open} toggleDrawer={toggleDrawer}></LeftDrawer>
      ) : (
        <RightDrawer open={open} toggleDrawer={toggleDrawer}></RightDrawer>
      )}
    </Drawer>
  );
};

export default CustomDrawer;

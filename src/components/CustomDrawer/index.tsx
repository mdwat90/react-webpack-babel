import React from 'react';
import clsx from 'clsx';
import { Drawer } from '@material-ui/core';
import DrawerStyles from './DrawerStyles';

import { RouteComponentProps } from '@reach/router';
import LeftDrawer from './components/LeftDrawer';
import RightDrawer from './components/RightDrawer';

interface DrawerProps {
  open: any;
  variant: any;
  anchor: any;
  toggleDrawer: (bool: boolean) => void;
  navProps: RouteComponentProps;
}

const CustomDrawer = ({ open, anchor, variant, toggleDrawer }: DrawerProps) => {
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

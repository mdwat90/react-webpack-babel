import React from 'react';
import { IconButton, Divider } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import TextEdit from '../../../../../../components/TextEdit';
import LeftDrawerStyles from './LeftDrawerStyles';

interface DrawerProps {
  open: any;
  toggleDrawer: (bool: boolean) => void;
}

const LeftDrawer = ({ open, toggleDrawer }: DrawerProps) => {
  const classes = LeftDrawerStyles();
  return (
    <React.Fragment>
      <div className={classes.header} />
      {open && (
        <React.Fragment>
          <div className={classes.toggleIconHeader}>
            <IconButton onClick={() => toggleDrawer(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <div className={classes.textEditContainer}>
              <TextEdit />
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default LeftDrawer;

import React from 'react';
import { IconButton, Divider } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import TextEdit from '../../../TextEdit';
import LeftDrawerStyles from './LeftDrawerStyles';
import { connect } from 'react-redux';
import { toggleLeftDrawer } from '../../../../actions';

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
            <IconButton onClick={() => toggleLeftDrawer(false)}>
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

const mapStateToProps = (state: any, ownProps: any) => {
  console.log('STATE', state);
  return {
    // ... computed data from state and optionally ownProps
  };
};

const actionCreators = {
  toggleLeftDrawer,
};

export default connect(mapStateToProps, actionCreators)(LeftDrawer);

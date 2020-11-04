import React from 'react';
import NewDocLeftNav from './components/NewDocLeftNav';
import { connect } from 'react-redux';

interface DrawerProps {
  open: any;
  toggleDrawer: (bool: boolean) => void;
}

const LeftDrawer = ({ open, toggleDrawer }: DrawerProps) => {
  return <NewDocLeftNav open={open} toggleDrawer={toggleDrawer} />;
};

const mapStateToProps = (state: any) => {
  const { leftNavStepValue } = state.mainReducer;
  return {
    leftNavStepValue: leftNavStepValue,
  };
};

export default connect(mapStateToProps)(LeftDrawer);

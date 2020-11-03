import React from 'react';
import NewDocLeftNav from './components/NewDocLeftNav';
import { connect } from 'react-redux';
import { useLocation } from '@reach/router';

interface DrawerProps {
  open: any;
  toggleDrawer: (bool: boolean) => void;
}

const LeftDrawer = ({ open, toggleDrawer }: DrawerProps) => {
  const pathName = useLocation().pathname;
  if (pathName === '/new-doc') {
    return <NewDocLeftNav open={open} toggleDrawer={toggleDrawer} />;
  }
  return null;
};

const mapStateToProps = (state: any) => {
  const { leftNavStepValue } = state.mainReducer;
  return {
    leftNavStepValue: leftNavStepValue,
  };
};

export default connect(mapStateToProps)(LeftDrawer);

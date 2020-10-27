import React from 'react';
import StyledDrawer from './StyledDrawer';

interface DrawerProps {
  open: any;
  width: any;
  children: any;
}

const Drawer = ({ open, width, children }: DrawerProps) => {
  return (
    <StyledDrawer open={open} width={width}>
      {children}
    </StyledDrawer>
  );
};

export default Drawer;

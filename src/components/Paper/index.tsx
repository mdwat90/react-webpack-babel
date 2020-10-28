import React from 'react';
import StyledDiv from './StyledDiv';

interface DrawerProps {
  height: any;
  width: any;
  children: any;
}

const Paper = ({ height, width, children }: DrawerProps) => {
  return (
    <StyledDiv height={height} width={width}>
      {children}
    </StyledDiv>
  );
};

export default Paper;

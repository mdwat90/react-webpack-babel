import React from 'react';
import StyledDiv from './StyledDiv';

interface PaperProps {
  height: any;
  width: any;
  children: any;
}

const Paper = ({ children, ...rest }: PaperProps) => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};

export default Paper;

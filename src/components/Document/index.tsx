import React from 'react';
import StyledDiv from '../styledComponents/StyledDiv';

interface DocumentProps {
  type: any;
  height: any;
  width: any;
  children: any;
}

const Document = ({ children, ...rest }: DocumentProps) => {
  return <StyledDiv {...rest}>{children}</StyledDiv>;
};

export default Document;

import React from 'react';
import { StyledDiv } from '../styledComponents';
import Textarea from '../Textarea';

interface DocumentProps {
  type: any;
  height: any;
  width: any;
}

const Document = (props: DocumentProps) => {
  return (
    <StyledDiv {...props}>
      <Textarea {...props}></Textarea>
    </StyledDiv>
  );
};

export default Document;

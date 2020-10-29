import React from 'react';
import StyledTextarea from '../styledComponents/StyledTextarea';

interface TextareaProps {
  height: any;
  width: any;
}
const Textarea = ({ height, width }: TextareaProps) => {
  return <StyledTextarea height={height} width={width}></StyledTextarea>;
};

export default Textarea;

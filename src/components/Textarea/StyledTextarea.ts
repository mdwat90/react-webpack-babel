import styled from 'styled-components';

interface TextareaProps {
  height: any;
  width: any;
}

const StyledTextarea = styled.textarea<TextareaProps>`
  height: ${(props) => props.height || '75vh'};
  width: ${(props) => props.width || '50vw'};
  border: none;
  font-family: 'Roboto';
  resize: none;
  outline: none;
`;

export default StyledTextarea;

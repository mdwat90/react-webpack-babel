import styled from 'styled-components';

interface DrawerProps {
  height: any;
  width: any;
}

const StyledDiv = styled.div<DrawerProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  background-color: white;
`;

export default StyledDiv;

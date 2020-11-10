import styled from 'styled-components';

interface DrawerProps {
  height?: any;
  width?: any;
  zoom?: any;
  onClick?: () => void;
}

const StyledDiv = styled.div<DrawerProps>`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
  zoom: ${(props) => props.zoom};
  background-color: white;
`;

export default StyledDiv;

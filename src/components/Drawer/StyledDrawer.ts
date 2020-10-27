import styled from 'styled-components';
import { Drawer } from '@material-ui/core';

interface DrawerProps {
  open: any;
  width: any;
  children: any;
}

const StyledDrawer = styled(Drawer)<DrawerProps>`
  & > div {
    width: ${(props) => props.width};
  }
`;

export default StyledDrawer;

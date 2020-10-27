import styled from 'styled-components';
import { Drawer } from '@material-ui/core';

interface DrawerProps {
  open: any;
  width: any;
  children: any;
}

const StyledDrawer = styled(Drawer)<DrawerProps>`
  & > div {
    width: 200px;
  }

  display: flex;
  justify-content: flex-start;
  padding: 5vw;
`;

export default StyledDrawer;

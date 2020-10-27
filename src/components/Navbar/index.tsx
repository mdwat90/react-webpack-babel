import React, { useState, useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import { signOut, checkLocalStorageExpiration } from '../../helpers';
import { UserContext } from '../../utils/userContext';
import {
  AppBar,
  Avatar,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import StyledToolbar from './StyledToolbar';
import Drawer from '../Drawer';

const Navbar = (props: RouteComponentProps) => {
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const hasPhoto = !!user.photoURL;

  checkLocalStorageExpiration(props);

  const toggleDrawer = (toggle: boolean) => {
    setOpen(toggle);
  };

  return (
    <React.Fragment>
      <AppBar position="fixed" color="default">
        <StyledToolbar>
          <span>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => toggleDrawer(true)}
              edge="start"
            >
              <MenuIcon />
            </IconButton>
          </span>
          <span>
            <Typography>Welcome {user.displayName}!</Typography>
          </span>
          {hasPhoto ? (
            <Avatar src={user.photoURL} alt={`photo of ${user.displayName}`} />
          ) : (
            <span
              style={{
                height: '50px',
                width: '50px',
                borderRadius: '20px',
              }}
            ></span>
          )}
        </StyledToolbar>
      </AppBar>
      <Toolbar />
      <Drawer open={open} width="10vw">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            height: '60px',
          }}
        >
          <IconButton onClick={() => toggleDrawer(false)}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <span>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => signOut(props)}
          >
            SIGN OUT
          </Button>
        </span>
      </Drawer>
    </React.Fragment>
  );
};

export default Navbar;

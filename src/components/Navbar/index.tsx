import React, { useContext } from 'react';
import { RouteComponentProps } from '@reach/router';
import { signOut, checkLocalStorageExpiration } from '../../helpers';
import { UserContext } from '../../utils/userContext';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import StyledToolbar from './StyledToolbar';

const Navbar = (props: RouteComponentProps) => {
  const { user } = useContext(UserContext);
  const hasPhoto = !!user.photoURL;

  checkLocalStorageExpiration(props);

  return (
    <React.Fragment>
      <AppBar position="fixed" color="default">
        <StyledToolbar>
          <span>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => signOut(props)}
            >
              SIGN OUT
            </Button>
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
    </React.Fragment>
  );
};

export default Navbar;

import React, { useContext } from 'react';
import clsx from 'clsx';
import { Button, IconButton, Divider } from '@material-ui/core';
import { UserContext } from '../../../../utils/userContext';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import DrawerStyles from '../../DrawerStyles';
import { signOut } from '../../../../helpers';

interface DrawerProps {
  open: any;
  toggleDrawer: (bool: boolean) => void;
}

const RightDrawer = ({ open, toggleDrawer }: DrawerProps) => {
  const { user, setUserDetails, loading, setLoading } = useContext(UserContext);
  const classes = DrawerStyles();

  return (
    <React.Fragment>
      <div
        style={{
          minHeight: '64px',
        }}
      ></div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          margin: '0px 10px',
          minHeight: '64px',
        }}
      >
        {open ? (
          <IconButton onClick={() => toggleDrawer(false)}>
            <ChevronRightIcon />
          </IconButton>
        ) : (
          <span></span>
        )}
      </div>
      {open && <Divider />}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          height: '100vh',
          padding: '25px 20px',
        }}
      >
        {open && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '10vh',
              padding: '25px 20px',
            }}
          >
            <ul>
              <li>ITEM 1</li>
              <li>ITEM 2</li>
              <li>ITEM 3</li>
            </ul>
          </div>
        )}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '10vh',
          padding: '25px 20px',
        }}
      >
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => signOut()}
          className={clsx({
            [classes.hide]: !open,
          })}
        >
          SIGN OUT
        </Button>
      </div>
    </React.Fragment>
  );
};

export default RightDrawer;

import React, { useContext } from 'react';
import { IconButton, Divider } from '@material-ui/core';
import { UserContext } from '../../../../utils/userContext';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DrawerStyles from '../../DrawerStyles';

interface DrawerProps {
  open: any;
  toggleDrawer: (bool: boolean) => void;
}

const LeftDrawer = ({ open, toggleDrawer }: DrawerProps) => {
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
          justifyContent: 'flex-end',
          margin: '0px 10px',
          minHeight: '64px',
        }}
      >
        {open ? (
          <IconButton onClick={() => toggleDrawer(false)}>
            <ChevronLeftIcon />
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
    </React.Fragment>
  );
};

export default LeftDrawer;

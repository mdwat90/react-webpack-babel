import React, { useContext } from 'react';
import {
  Button,
  IconButton,
  Divider,
  Tab,
  Tabs,
  makeStyles,
  Theme,
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { signOut } from '../../../../helpers';
import { navigate } from '@reach/router';
import { RightDrawerContext } from '../../../../utils/rightDrawerContext';

interface DrawerProps {
  open: any;
  toggleDrawer: (bool: boolean) => void;
}

const RightDrawer = ({ open, toggleDrawer }: DrawerProps) => {
  const { value, setValue } = useContext(RightDrawerContext);

  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  }));

  const VerticalTabs = () => {
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };

    return (
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab
            label="Dashboard"
            onClick={(e) => {
              handleChange(e, 0);
              navigate('/dashboard');
            }}
          />
          <Tab
            label="History"
            onClick={(e) => {
              handleChange(e, 1);
              navigate('/history');
            }}
          />
        </Tabs>
      </div>
    );
  };

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
          height: '100%',
          padding: '25px 20px',
        }}
      >
        {open && <VerticalTabs />}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '25px 25px',
          }}
        >
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => signOut()}
          >
            SIGN OUT
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RightDrawer;

import React, { useContext } from 'react';
import clsx from 'clsx';
import {
  Button,
  IconButton,
  Divider,
  Tab,
  Tabs,
  makeStyles,
  withStyles,
  Theme,
} from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
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
    tabRoot: {
      minWidth: '10px',
      width: '10px',
    },
  }));

  const VerticalTabs = ({ open }: any) => {
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
            label={open && 'Dashboard'}
            icon={<DescriptionOutlinedIcon />}
            onClick={(e) => {
              handleChange(e, 0);
              navigate('/dashboard');
            }}
            // classes={{ root: classes.tabRoot }}
          />
          <Tab
            label={open && 'History'}
            icon={<HistoryOutlinedIcon />}
            onClick={(e) => {
              handleChange(e, 1);
              navigate('/history');
            }}
            // classes={{ root: classes.tabRoot }}
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
      {open ? (
        <React.Fragment>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              margin: '0px 10px',
              minHeight: '64px',
            }}
          >
            <IconButton onClick={() => toggleDrawer(false)}>
              <ChevronRightIcon />
            </IconButton>
          </div>

          <Divider />

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
            <VerticalTabs open={open} />
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
      ) : (
        <React.Fragment>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              margin: '0px 10px',
              minHeight: '64px',
            }}
          >
            <IconButton onClick={() => toggleDrawer(true)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'center',
              height: '100%',
              padding: '25px 10px',
            }}
          >
            <VerticalTabs open={open} />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default RightDrawer;

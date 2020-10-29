import React, { useContext } from 'react';
import { Button, IconButton, Divider, Tab, Tabs } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import { signOut } from '../../../../helpers';
import { navigate } from '@reach/router';
import { RightDrawerContext } from '../../../../utils/rightDrawerContext';
import RightDrawerStyles from './RightDrawerStyles';

interface DrawerProps {
  open: any;
  toggleDrawer: (bool: boolean) => void;
}

const RightDrawer = ({ open, toggleDrawer }: DrawerProps) => {
  const { value, setValue } = useContext(RightDrawerContext);

  const classes = RightDrawerStyles();

  const VerticalTabs = ({ open }: any) => {
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
      <div className={classes.header} />
      {open ? (
        <React.Fragment>
          <div className={classes.toggleIconHeader}>
            <IconButton onClick={() => toggleDrawer(false)}>
              <ChevronRightIcon />
            </IconButton>
          </div>

          <Divider />

          <div className={classes.tabsContainerOpen}>
            <VerticalTabs open={open} />
            <div className={classes.signOutContainer}>
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
          <div className={classes.toggleIconHeader}>
            <IconButton onClick={() => toggleDrawer(true)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.tabsContainerClosed}>
            <VerticalTabs open={open} />
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default RightDrawer;

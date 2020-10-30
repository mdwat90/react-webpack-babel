import React from 'react';
import { connect } from 'react-redux';
import { Button, IconButton, Divider, Tab, Tabs } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import { signOut } from '../../../../helpers';
import { navigate } from '@reach/router';
import { setRightNavTabValue } from '../../../../actions/main_actions';
import RightDrawerStyles from './RightDrawerStyles';

interface DrawerProps {
  open: any;
  tabValue: any;
  toggleDrawer: (bool: boolean) => void;
  setRightNavTabValue: (val: number) => void;
}

const RightDrawer = ({
  open,
  tabValue,
  toggleDrawer,
  setRightNavTabValue,
}: DrawerProps) => {
  const classes = RightDrawerStyles();

  const VerticalTabs = ({ open }: any) => {
    const handleChange = (newValue: number) => {
      setRightNavTabValue(newValue);
    };

    return (
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={tabValue}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab
            label={open && 'Dashboard'}
            icon={<DescriptionOutlinedIcon />}
            onClick={(e) => {
              handleChange(0);
              navigate('/dashboard');
            }}
            // classes={{ root: classes.tabRoot }}
          />
          <Tab
            label={open && 'History'}
            icon={<HistoryOutlinedIcon />}
            onClick={(e) => {
              handleChange(1);
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

const mapStateToProps = (state: any, ownProps: any) => {
  const {
    mainReducer: { rightNavTabValue },
  } = state;

  return {
    tabValue: rightNavTabValue,
  };
};

const actionCreators = {
  setRightNavTabValue,
};

export default connect(mapStateToProps, actionCreators)(RightDrawer);

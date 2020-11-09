import React from 'react';
import {
  IconButton,
  Divider,
  Stepper,
  Step,
  StepLabel,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LeftDrawerStyles from './LeftDrawerStyles';
import { connect } from 'react-redux';

export const getSteps = () => {
  return [
    'Choose template',
    'Add content',
    'Announcements',
    'Preview',
    'Print/download',
  ];
};

interface DrawerProps {
  open: any;
  leftNavStepValue: any;
  toggleDrawer: (bool: boolean) => void;
}

const LeftDrawer = ({ open, leftNavStepValue, toggleDrawer }: DrawerProps) => {
  const classes = LeftDrawerStyles();

  const steps = getSteps();

  return (
    <React.Fragment>
      <div className={classes.header} />
      {open ? (
        <React.Fragment>
          <div className={classes.toggleIconHeader}>
            <IconButton onClick={() => toggleDrawer(false)}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div>
            <Stepper activeStep={leftNavStepValue} orientation="vertical">
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel className={classes.stepLabel}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className={classes.toggleIconHeader}>
            <IconButton onClick={() => toggleDrawer(true)}>
              <ChevronRightIcon />
            </IconButton>
          </div>
          <div>
            <Stepper activeStep={leftNavStepValue} orientation="vertical">
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel className={classes.stepLabel}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
          <Divider />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => {
  const { leftNavStepValue } = state.mainReducer;
  return {
    leftNavStepValue: leftNavStepValue,
  };
};

export default connect(mapStateToProps)(LeftDrawer);

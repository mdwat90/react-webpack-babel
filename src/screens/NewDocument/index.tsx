import { Button } from '@material-ui/core';
import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { connect } from 'react-redux';
import NewDocStyles from './NewDocStyles';
import { setLeftNavStepValue } from '../../actions/main_actions';
import { getSteps } from '../Home/components/CustomDrawer/components/LeftDrawer';

interface NewDocumentProps extends RouteComponentProps {
  leftNavStepValue: number;
  setLeftNavStepValue: (num: number) => void;
}

const NewDocument = ({
  leftNavStepValue,
  setLeftNavStepValue,
  ...rest
}: NewDocumentProps) => {
  const classes = NewDocStyles();
  const steps = getSteps();

  console.log('REST', rest);

  const handleNext = () => {
    setLeftNavStepValue(leftNavStepValue + 1);
  };

  const handleBack = () => {
    setLeftNavStepValue(leftNavStepValue - 1);
  };

  const returnComponent = (step: number): boolean => {
    if (step === 0) console.log('CHOOSE TEMPLATE');
    else if (step === 1) console.log('ADD CONTENT');
    else if (step === 2) console.log('ANNOUNCEMENTS');
    else if (step === 3) console.log('PRINT/DOWNLOAD');
    return false;
  };

  return (
    <div className={classes.dashContainer}>
      <div className={classes.contentContainer}>
        <div>{returnComponent(leftNavStepValue)}</div>
        <div>
          <Button disabled={leftNavStepValue === 0} onClick={handleBack}>
            Back
          </Button>
          <Button variant="contained" color="primary" onClick={handleNext}>
            {leftNavStepValue === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { leftNavStepValue } = state.mainReducer;
  return {
    leftNavStepValue: leftNavStepValue,
  };
};

const actionCreators = {
  setLeftNavStepValue,
};

export default connect(mapStateToProps, actionCreators)(NewDocument);

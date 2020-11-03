import { Button } from '@material-ui/core';
import { navigate, RouteComponentProps } from '@reach/router';
import React from 'react';
import { connect } from 'react-redux';
import NewDocStyles from './NewDocStyles';
import { setLeftNavStepValue } from '../../actions/main_actions';
import { getSteps } from '../Home/components/CustomDrawer/components/LeftDrawer/components/NewDocLeftNav';

interface NewDocumentProps extends RouteComponentProps {
  leftNavStepValue: number;
  setLeftNavStepValue: (step: number) => void;
}

const NewDocument = ({
  leftNavStepValue,
  setLeftNavStepValue,
}: NewDocumentProps) => {
  const classes = NewDocStyles();
  const steps = getSteps();

  const handleNext = (navStep: any) => {
    if (navStep === steps.length - 1) {
      navigate('/', { replace: true });
    }
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
        {leftNavStepValue < 4 && (
          <div>
            <Button disabled={leftNavStepValue === 0} onClick={handleBack}>
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleNext(leftNavStepValue)}
            >
              {leftNavStepValue === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </div>
        )}
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

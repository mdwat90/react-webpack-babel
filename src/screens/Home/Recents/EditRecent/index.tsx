import { Button, Typography } from '@material-ui/core';
import { navigate, RouteComponentProps } from '@reach/router';
import React from 'react';
import { connect } from 'react-redux';
import EditRecentStyles from './EditRecentStyles';
import { setLeftNavStepValue } from '../../../../actions/main_actions';
import { getSteps } from '../../components/CustomDrawer/components/LeftDrawer/components/NewDocLeftNav';

interface RecentDocumentsProps extends RouteComponentProps {
  leftNavStepValue: number;
  setLeftNavStepValue: (step: number) => void;
}

const EditRecent = ({
  leftNavStepValue,
  setLeftNavStepValue,
}: RecentDocumentsProps) => {
  const classes = EditRecentStyles();
  const steps = getSteps();

  const handleSubmit = () => {
    navigate('/', { replace: true });
  };

  const handleNext = (navStep: any) => {
    if (navStep === steps.length - 1) {
      handleSubmit();
    }
    setLeftNavStepValue(leftNavStepValue + 1);
  };

  const handleBack = () => {
    setLeftNavStepValue(leftNavStepValue - 1);
  };

  const returnComponent = (step: any): any => {
    switch (step) {
      case 0:
        return <Typography variant="h5">Template</Typography>;
      case 1:
        return <Typography variant="h5">Add Content</Typography>;
      case 2:
        return <Typography variant="h5">Announcements</Typography>;
      case 3:
        return <Typography variant="h5">Print/Download</Typography>;
      default:
        <div />;
    }
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

export default connect(mapStateToProps, actionCreators)(EditRecent);

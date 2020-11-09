import { Button } from '@material-ui/core';
import { navigate, RouteComponentProps } from '@reach/router';
import React from 'react';
import { connect } from 'react-redux';
import NewDocStyles from './NewDocStyles';
import { setLeftNavStepValue } from '../../../../actions/main_actions';
import { getSteps } from '../../components/CustomDrawer/components/LeftDrawer/components/NewDocLeftNav';
import {
  Announcements,
  Content,
  Preview,
  PrintDownload,
  Template,
} from './components';
import { createNewDocument } from '../../../../api';

interface NewDocumentProps extends RouteComponentProps {
  userAuthDetails: any;
  leftNavStepValue: number;
  setLeftNavStepValue: (step: number) => void;
}

const NewDocument = ({
  userAuthDetails,
  leftNavStepValue,
  setLeftNavStepValue,
}: NewDocumentProps) => {
  const classes = NewDocStyles();
  const steps = getSteps();

  const handleSubmit = () => {
    console.log('HANDLE SUBMIT');
    setLeftNavStepValue(0);
    navigate('/', { replace: true });
  };

  const handleNext = (navStep: any) => {
    console.log('save-document');
    if (navStep === 0) {
      console.log('CREATE NEW DOC', userAuthDetails);
      // createNewDocument(userAuthDetails.uid);
    } else if (navStep === steps.length - 1) {
      handleSubmit();
    } else {
      setLeftNavStepValue(leftNavStepValue + 1);
    }
  };

  const handleBack = () => {
    setLeftNavStepValue(leftNavStepValue - 1);
  };

  const returnComponent = (step: any): any => {
    switch (step) {
      case 0:
        return <Template />;
      case 1:
        return <Content />;
      case 2:
        return <Announcements />;
      case 3:
        return <Preview />;
      case 4:
        return <PrintDownload />;
      default:
        <div />;
    }
  };

  return (
    <div className={classes.dashContainer}>
      <div className={classes.contentContainer}>
        <div>{returnComponent(leftNavStepValue)}</div>
        {leftNavStepValue < steps.length && (
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
  const { userAuthDetails } = state.authReducer;
  return {
    leftNavStepValue: leftNavStepValue,
    userAuthDetails: userAuthDetails,
  };
};

const actionCreators = {
  setLeftNavStepValue,
};

export default connect(mapStateToProps, actionCreators)(NewDocument);

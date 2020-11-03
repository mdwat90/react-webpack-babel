import {
  TOGGLE_LEFT_DRAWER,
  TOGGLE_RIGHT_DRAWER,
  SET_RIGHT_NAV_TAB_VALUE,
  SET_LEFT_NAV_STEP_VALUE,
  SET_LOADING,
} from './types';

export const toggleLeftDrawer = (openState: any) => {
  return {
    type: TOGGLE_LEFT_DRAWER,
    payload: openState,
  };
};

export const toggleRightDrawer = (openState: any) => {
  return {
    type: TOGGLE_RIGHT_DRAWER,
    payload: openState,
  };
};

export const setRightNavTabValue = (index: any) => {
  return {
    type: SET_RIGHT_NAV_TAB_VALUE,
    payload: index,
  };
};

export const setLeftNavStepValue = (index: any) => {
  return {
    type: SET_LEFT_NAV_STEP_VALUE,
    payload: index,
  };
};

export const setLoading = (loadingState: any) => {
  return {
    type: SET_LOADING,
    payload: loadingState,
  };
};

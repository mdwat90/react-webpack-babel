import { TOGGLE_LEFT_DRAWER, TOGGLE_RIGHT_DRAWER } from './types';

export const toggleLeftDrawer = (openState: any) => {
  console.log('OPEN STATE ACTION', openState);
  return {
    type: TOGGLE_LEFT_DRAWER,
    payload: openState,
  };
};

export const toggleRightDrawer = (openState: any) => ({
  type: TOGGLE_RIGHT_DRAWER,
  payload: openState,
});

import produce from 'immer';
// import {
//   SET_AIRCRAFT,
//   SET_SELECTED_AIRCRAFT,
// } from '../pages/Dashboard/actions/types';
// import { AUTH_LOGOUT } from '../actions/types';

export const INITIAL_STATE = {
  currentDocument: null,
  authenticated: false,
  user: null,
  history: [],
  leftNavOpen: false,
  rightNavOpen: false,
  rightNavTabValue: null,
  loading: false,
};
const reducer = (state = INITIAL_STATE, action: any) =>
  produce(state, (draft) => {
    switch (action.type) {
      //   case AUTH_LOGOUT:
      //     return INITIAL_DASHBOARD_STATE;

      //   case SET_SELECTED_AIRCRAFT:
      //     draft.selectedAircraftId = action.payload.aircraftId;
      //     break;

      //   case SET_AIRCRAFT: {
      //     const [accountAircraftIds, accountAircraft] = action.payload;

      //     draft.accountAircraftIds = accountAircraftIds;
      //     draft.accountAircraft = accountAircraft;
      //     break;
      //   }

      default:
        break;
    }
  });

export default reducer;

import produce from 'immer';
import { TOGGLE_LEFT_DRAWER, TOGGLE_RIGHT_DRAWER } from '../actions/types';
// import { AUTH_LOGOUT } from '../actions/types';

export const INITIAL_STATE = {
  currentDocument: null,
  userHistory: [],
  leftNavOpen: false,
  rightNavOpen: false,
  // leftNavContext renders conditional options based on current page
  leftNavContext: null,
  rightNavTabValue: null,
  loading: false,
};

const mainReducer = (state = INITIAL_STATE, action: any) =>
  produce(state, (draft) => {
    console.log('REDUCERSTATE::::::::', state);
    console.log('ACTION::::::::', action);
    switch (action.type) {
      case TOGGLE_LEFT_DRAWER:
        console.log('ACTION PAYLOAD', action.payload);
        draft.leftNavOpen = action.payload;
        break;
      case TOGGLE_RIGHT_DRAWER:
        draft.rightNavOpen = action.payload;
        break;

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

export default mainReducer;

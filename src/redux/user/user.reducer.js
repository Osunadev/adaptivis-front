import { getUserFromJwt } from 'utils/token-helper';

import UserActionTypes from './user.types';

const INITIAL_STATE = {
  currentUser: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER_FROM_TOKEN:
      return {
        ...state,
        currentUser: getUserFromJwt()
      };

    case UserActionTypes.REMOVE_CURRENT_USER:
      return {
        ...state,
        currentUser: null
      };

    default:
      return state;
  }
};

export default userReducer;

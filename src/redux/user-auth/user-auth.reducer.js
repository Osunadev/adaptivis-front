import UserAuthActionTypes from './user-auth.types';

const INITIAL_STATE = {
  currentUser: null
};

const userAuthReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserAuthActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default userAuthReducer;

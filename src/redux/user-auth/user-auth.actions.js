import UserAuthActionTypes from './user-auth.types';

export const setCurrentUser = user => ({
  type: UserAuthActionTypes.SET_CURRENT_USER,
  payload: user
});

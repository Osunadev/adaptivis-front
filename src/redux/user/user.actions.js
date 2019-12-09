import UserActionTypes from './user.types';

export const setCurrentUserFromToken = () => ({
  type: UserActionTypes.SET_CURRENT_USER_FROM_TOKEN
});

export const removeCurrentUser = () => ({
  type: UserActionTypes.REMOVE_CURRENT_USER
});

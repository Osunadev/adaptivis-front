import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

export const selectCurrentUserType = createSelector(
  [selectCurrentUser],
  currentUser => currentUser.type
);

export const selectCurrentUserName = createSelector(
  [selectCurrentUser],
  currentUser => currentUser.name
);

export const selectCurrentUserImage = createSelector(
  [selectCurrentUser],
  currentUser => currentUser.imgUrl
);

export const selectCurrentUserIde = createSelector(
  [selectCurrentUser],
  currentUser => currentUser.user_ide
);

export const selectIsFirstTimeAccess = createSelector(
  [selectCurrentUser],
  currentUser => currentUser.isFirstTimeAccess
);

import { createSelector } from 'reselect';

const selectUser = state => state.userAuth;

export const selectCurrentUser = createSelector(
  [selectUser],
  user => user.currentUser
);

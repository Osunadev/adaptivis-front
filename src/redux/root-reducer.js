import { combineReducers } from 'redux';

import userAuthReducer from './user-auth/user-auth.reducer';

// Basically we combine our little pieces of state (reducers) into
// a one big rootReducer, that consists of our single source of truth
const rootReducer = combineReducers({
  userAuth: userAuthReducer
});

export default rootReducer;

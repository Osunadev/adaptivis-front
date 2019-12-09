import { combineReducers } from 'redux';

// Here we're going to import all of our reducers
import userReducer from 'redux/user/user.reducer';

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;

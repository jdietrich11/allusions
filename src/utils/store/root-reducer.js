import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { teamsReducer } from './teams/teams.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  teams: teamsReducer,
});

import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { teamsReducer } from './teams/teams.reducer';
import { selectedCardpacksReducer } from './selectedCardpacks/selectedCardpacks.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  teams: teamsReducer,
  selectedCardpacks: selectedCardpacksReducer,
});

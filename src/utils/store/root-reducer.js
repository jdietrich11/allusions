import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { teamsReducer } from './teams/teams.reducer';
import { selectedCardpacksReducer } from './selectedCardpacks/selectedCardpacks.reducer';
import { playtimeReducer } from './playtime/playtime.reducer';
import { roundReducer } from './round/round.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  teams: teamsReducer,
  selectedCardpacks: selectedCardpacksReducer,
  playtime: playtimeReducer,
  round: roundReducer,
});

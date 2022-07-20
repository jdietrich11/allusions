import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { teamsReducer } from './teams/teams.reducer';
import { selectedCardpacksReducer } from './selectedCardpacks/selectedCardpacks.reducer';
import { playtimeReducer } from './playtime/playtime.reducer';
import { roundReducer } from './round/round.reducer';
import { activePlayerReducer } from './activePlayer/activePlayer.reducer';
import { turnCounterReducer } from './turnCounter/turnCounter.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  teams: teamsReducer,
  selectedCardpacks: selectedCardpacksReducer,
  playtime: playtimeReducer,
  round: roundReducer,
  activePlayer: activePlayerReducer,
  turnCounter: turnCounterReducer,
});

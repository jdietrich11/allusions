import { USER_ACTION_TYPES } from './teams.types';
import { createAction } from '../createAction';

export const addUserToTeam1 = (user) =>
  createAction(USER_ACTION_TYPES.ADD_USER_TO_TEAM1, user);

export const addUserToTeam2 = (user) =>
  createAction(USER_ACTION_TYPES.ADD_USER_TO_TEAM2, user);

export const removeUserFromTeam1 = (user) =>
  createAction(USER_ACTION_TYPES.REMOVE_USER_FROM_TEAM1, user);

export const removeUserFromTeam2 = (user) =>
  createAction(USER_ACTION_TYPES.REMOVE_USER_FROM_TEAM2, user);
export const correctGuessTeam1 = (index, player, score) =>
  createAction(USER_ACTION_TYPES.TEAM1_CORRECT, [index, player, score]);
export const correctGuessTeam2 = (player, score) =>
  createAction(USER_ACTION_TYPES.TEAM2_CORRECT, (player, score));
export const resetTeams = () => createAction(USER_ACTION_TYPES.RESET_TEAMS)





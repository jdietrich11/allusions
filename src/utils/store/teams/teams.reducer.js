/* eslint-disable no-dupe-keys */
import { USER_ACTION_TYPES } from './teams.types';
import update from 'react-addons-update';

const INITIAL_STATE = {
  team1: [],
  team2: [],
};

export const teamsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.ADD_USER_TO_TEAM1:
      return { ...state, team1: [...state.team1, {player : payload, score: 0 }] };
    case USER_ACTION_TYPES.ADD_USER_TO_TEAM2:
      return { ...state, team2: [...state.team2, {player : payload, score: 0 }] };
    case USER_ACTION_TYPES.REMOVE_USER_FROM_TEAM1:
      return {
        ...state,
        team1: [...state.team1.filter((teamMember) => teamMember !== payload)],
      };
    case USER_ACTION_TYPES.REMOVE_USER_FROM_TEAM2:
      return {
        ...state,
        team2: [...state.team2.filter((teamMember) => teamMember !== payload)],
      };
    case USER_ACTION_TYPES.TEAM1_CORRECT:
      let i = payload[0];
      console.log(payload);
        return state;
    case USER_ACTION_TYPES.TEAM2_CORRECT:
      return {
        ...state,
        team2: [...state.team2, {player: payload.player, score: payload.score}]
      }
    case USER_ACTION_TYPES.RESET_TEAMS:
      return {
        ...state,
        team1: [],
        team2: [],
      }
    default:
      return state;
  }
};

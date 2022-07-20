import { USER_ACTION_TYPES } from './teams.types';

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
        return {
          ...state,
          team1: [...state.team1, {player: payload.player, score: payload.score}]
        }
    case USER_ACTION_TYPES.TEAM2_CORRECT:
      return {
        ...state,
        team2: [...state.team2, {player: payload.player, score: payload.score}]
      }
    default:
      return state;
  }
};

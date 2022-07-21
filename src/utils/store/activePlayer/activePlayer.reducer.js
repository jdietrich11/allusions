import { SET_ACTIVE_PLAYER } from "./activePlayer.types";

const INITIAL_STATE = {
    activePlayer: undefined
}

export const activePlayerReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case SET_ACTIVE_PLAYER.SET_ACTIVE_PLAYER:
            return {...state, activePlayer: payload };
        case SET_ACTIVE_PLAYER.RESET_ACTIVE_PLAYER: 
            return {...state, activePlayer: undefined};
        case SET_ACTIVE_PLAYER.INCREASE_ACTIVE_SCORE:
            return {...state, activePlayer: {player: state.activePlayer.player, score: payload}}
        default:
            return state;
    }
    
}
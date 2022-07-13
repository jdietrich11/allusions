import { SET_ROUND } from "./round.types";

const INITIAL_STATE = {
    round: 1,
}

export const roundReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch(type) {
        case SET_ROUND.SET_ROUND:   
            return {...state, round: payload}
        default:
            return state;
    }
}
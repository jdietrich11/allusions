import { INCREASE_TURN_COUNTER } from "./turnCounter.types";

const INITIAL_STATE = {
    turnCounter: 0
}

export const turnCounterReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;

    switch (type) {
        case INCREASE_TURN_COUNTER.INCREASE_TURN_COUNTER:
            return {...state, turnCounter: payload}
        default:
            return state

    }
}
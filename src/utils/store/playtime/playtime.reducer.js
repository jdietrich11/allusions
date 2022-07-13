import { SET_PLAYTIME } from "./playtime.types";

const INITIAL_STATE = {
    playtime: 60
}

export const playtimeReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case SET_PLAYTIME.SET_PLAYTIME: 
            return {...state, playtime: payload};
        default:
            return state;
    }
}
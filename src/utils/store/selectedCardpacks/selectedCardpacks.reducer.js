import { SELECT_CARDPACKS_ACTION_TYPES } from "./selectedCardpacks.types";

const INITIAL_STATE = {
    selectedCardpacks: []
}

export const selectedCardpacksReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case SELECT_CARDPACKS_ACTION_TYPES.ADD_CARDPACK_ACTION_TYPES:
            return {...state, selectedCardpacks: [...state.selectedCardpacks, payload]};
        case SELECT_CARDPACKS_ACTION_TYPES.REMOVE_CARDPACK_ACTION_TYPES:
            return {...state, selectedCardpacks: state.selectedCardpacks.filter(data => data !== payload)}
        default: 
            return state;
    }
}
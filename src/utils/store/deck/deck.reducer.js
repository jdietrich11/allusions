import { SET_DECK } from "./deck.types";

const INITIAL_STATE = {
    deck: [],
}

export const deckReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case SET_DECK.SET_DECK:
            return {...state, deck: [...state.deck, payload]}
        default:
            return state;
    }
}
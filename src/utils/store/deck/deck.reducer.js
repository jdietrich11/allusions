import { SET_DECK } from "./deck.types";

const INITIAL_STATE = {
    deck: [],
    activeCard: [],
    discardPile: [],
}

export const deckReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch(type) {
        case SET_DECK.SET_DECK:
            return {...state, deck: [...state.deck, payload]};
        case SET_DECK.RESET_DECK:
            return {...state, deck: [], activeCard: [], discardPile: []};
        case SET_DECK.SHUFFLE_DECK:
            return {...state, deck: [state.deck.sort(() => Math.random() -.5)]};
        case SET_DECK.DRAW_CARD:
            let index = () => Math.floor(Math.random * state.deck.length);
            return {...state, activeCard: state.deck[index]};
        default:
            return state;
    }
}
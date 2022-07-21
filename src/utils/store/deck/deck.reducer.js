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
        case SET_DECK.SHUFFLE_DECK:
            return {...state, deck: payload};
        case SET_DECK.RESET_DECK:
            return {...state, deck: [], activeCard: [], discardPile: []};
        case SET_DECK.DRAW_CARD:
            return {...state, activeCard: state.deck[0]};
        case SET_DECK.DISCARD_CARD:
            return {...state, discardPile: [...state.discardPile, payload], deck: state.deck.filter(deck => deck !== payload)}

        default:
            return state;
    }
}
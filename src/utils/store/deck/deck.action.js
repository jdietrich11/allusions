import { SET_DECK } from "./deck.types";
import { createAction } from "../createAction";

export const setDeck = (cards) => createAction(SET_DECK.SET_DECK, cards);
export const drawCard = card => createAction(SET_DECK.DRAW_CARD, card);
export const resetDeck = (deck) => createAction(SET_DECK.RESET_DECK, deck);
export const shuffleDeck = deck => createAction(SET_DECK.SHUFFLE_DECK, deck);
export const discardCard = card => createAction(SET_DECK.DISCARD_CARD, card);

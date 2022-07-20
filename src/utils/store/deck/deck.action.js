import { SET_DECK } from "./deck.types";
import { createAction } from "../createAction";

export const setDeck = (cards) => createAction(SET_DECK.SET_DECK, cards);
export const drawCard = card => createAction(SET_DECK.DRAW_CARD, card);
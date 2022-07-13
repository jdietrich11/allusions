import { SET_ROUND } from "./round.types";
import { createAction } from "../createAction";

export const setRound = (round ) => createAction(SET_ROUND.SET_ROUND, round);
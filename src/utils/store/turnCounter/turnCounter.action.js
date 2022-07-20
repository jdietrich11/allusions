import { INCREASE_TURN_COUNTER } from "./turnCounter.types";
import { createAction } from "../createAction";

export const increaseTurnCounter = (counter) => createAction(INCREASE_TURN_COUNTER.INCREASE_TURN_COUNTER, counter);
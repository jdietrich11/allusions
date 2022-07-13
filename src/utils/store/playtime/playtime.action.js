import { SET_PLAYTIME } from "./playtime.types";
import { createAction } from "../createAction";

export const setPlaytime = (time) => createAction(SET_PLAYTIME.SET_PLAYTIME, time);
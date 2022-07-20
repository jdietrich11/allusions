import { SET_ACTIVE_PLAYER } from "./activePlayer.types";
import { createAction } from "../createAction";

export const setActivePlayer = player => createAction(SET_ACTIVE_PLAYER.SET_ACTIVE_PLAYER, player);
export const resetActivePlayer = player => createAction(SET_ACTIVE_PLAYER.RESET_ACTIVE_PLAYER, player);
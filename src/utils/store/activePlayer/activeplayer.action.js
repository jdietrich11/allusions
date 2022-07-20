import { SET_ACTIVE_PLAYER } from "./activePlayer.types";
import { createAction } from "../createAction";

export const setActivePlayer = player => createAction(SET_ACTIVE_PLAYER.SET_ACTIVE_PLAYER, player);
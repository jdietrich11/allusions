import { SELECT_CARDPACKS_ACTION_TYPES } from './selectedCardpacks.types';
import { createAction } from '../createAction';

export const addCardpack = (id) => 
    createAction(SELECT_CARDPACKS_ACTION_TYPES.ADD_CARDPACK_ACTION_TYPES, id);
    
export const removeCardpack = id => 
    createAction(SELECT_CARDPACKS_ACTION_TYPES.REMOVE_CARDPACK_ACTION_TYPES, id);
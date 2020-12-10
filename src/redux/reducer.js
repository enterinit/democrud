import {EDIT_HOTDOG, GET_HOTDOGS} from './actions';

export function reducerget (state = [], action) {
  switch (action.type) {
    case GET_HOTDOGS:
      return [...action.payload];
    default:
      return state;
  }
};

export function hotdogs (state = {}, action) {
  switch (action.type) {
      case EDIT_HOTDOG:    
       return action.payload
    default:
      return state;
  }
};
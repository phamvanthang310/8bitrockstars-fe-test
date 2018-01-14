import { ADD_ADDRESS, EDIT_ADDRESS } from '../constants/ActionTypes';

const initialState = [];

export default function addresses(state = initialState, action) {
  switch (action.type) {
    case ADD_ADDRESS:
      return [
        ...state,
        action.address
      ];
    case EDIT_ADDRESS:
    // return state.map(address)
    default:
      return state;
  }
}
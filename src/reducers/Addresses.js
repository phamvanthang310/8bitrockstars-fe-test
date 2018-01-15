import { ADD_ADDRESS_FINISHED, EDIT_ADDRESS, FETCH_ADDRESSES_FINISHED } from '../constants/ActionTypes';

const initialState = [];

export default function addresses(state = initialState, action) {
  switch (action.type) {
    case FETCH_ADDRESSES_FINISHED:
      return Object.assign([], action.addresses);
    case ADD_ADDRESS_FINISHED:
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
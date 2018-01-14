import { ADD_ADDRESS, EDIT_ADDRESS, FETCH_ADDRESSES_FULFILLED } from '../constants/ActionTypes';

const initialState = [];

export default function addresses(state = initialState, action) {
  switch (action.type) {
    case FETCH_ADDRESSES_FULFILLED:
      console.log('FETCH_ADDRESSES_FULFILLED: ', action.addresses);
      return action.addresses;
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
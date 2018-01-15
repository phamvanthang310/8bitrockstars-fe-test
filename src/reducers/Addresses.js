import { ADD_ADDRESS_FINISHED, FETCH_ADDRESSES_FINISHED, SELECT_ADDRESS } from '../constants/ActionTypes';

const initialState = {
  addresses: [],
  selectedAddress: {}
};

export function addresses(state = initialState.addresses, action) {
  switch (action.type) {
    case FETCH_ADDRESSES_FINISHED:
      return Object.assign([], action.addresses);
    case ADD_ADDRESS_FINISHED:
      return [
        ...state,
        action.address
      ];
    default:
      return state;
  }
}

export function selectedAddress(state = initialState.selectedAddress, action) {
  switch (action.type) {
    case SELECT_ADDRESS:
      console.log('SELECT_ADDRESS', action.address);
      return Object.assign({}, action.address);
    default:
      return state;
  }
}

import {
  FETCH_ADDRESSES_FINISHED, SAVE_ADDRESS_FINISHED, SELECT_ADDRESS,
  UPDATE_ADDRESS_FINISHED
} from '../constants/ActionTypes';

const initialState = {
  addresses: [],
  selectedAddress: {}
};

export function addresses(state = initialState.addresses, action) {
  switch (action.type) {
    case FETCH_ADDRESSES_FINISHED:
      return Object.assign([], action.addresses);
    case SAVE_ADDRESS_FINISHED:
      return [
        ...state,
        action.address
      ];
    case UPDATE_ADDRESS_FINISHED:
      return state.map(address => {
        if (address.key === action.address.key) {
          return action.address;
        }
        return address;
      });
    default:
      return state;
  }
}

export function selectedAddress(state = initialState.selectedAddress, action) {
  switch (action.type) {
    case SELECT_ADDRESS:
      return Object.assign({}, action.address);
    default:
      return state;
  }
}

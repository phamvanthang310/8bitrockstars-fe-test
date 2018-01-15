import { combineReducers } from 'redux';
import { addresses, selectedAddress } from './Addresses';

const rootReducer = combineReducers({
  addresses,
  selectedAddress
});

export default rootReducer
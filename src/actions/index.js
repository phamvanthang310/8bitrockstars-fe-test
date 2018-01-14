import * as types from '../constants/ActionTypes';
import FireBaseClient from '../services/FireBaseClient';
import { mergeMap } from 'rxjs/operators';

export const fetchAddresses = () => ({type: types.FETCH_ADDRESSES});
const fullFillAddresses = (addresses) => ({type: types.FETCH_ADDRESSES_FULFILLED, addresses});
export const addAddress = (address) => ({type: types.ADD_ADDRESS, address});
export const editAddress = (index, address) => ({type: types.EDIT_ADDRESS, index, address});

export const fetchAddressesEpic = (action$, store) => {
  return action$.ofType(types.FETCH_ADDRESSES)
    .pipe(
      mergeMap(action => {
        return FireBaseClient.readAddresses().map(addresses => {
          console.log('fetchAddressesEpic', fullFillAddresses(addresses));
          return fullFillAddresses(addresses);
        });
      })
    );
};

import { FETCH_ADDRESSES, SAVE_ADDRESS } from '../constants/ActionTypes';
import { fullFillAddresses, saveAddressFinished, updateAddressFinished } from '../actions';
import FireBaseClient from '../providers/FireBaseClient';
import { mergeMap } from 'rxjs/operators';

export const fetchAddressesEpic = (action$, store) => {
  return action$.ofType(FETCH_ADDRESSES)
    .pipe(
      mergeMap(action => {
        return FireBaseClient.readAddresses().map(addresses => {
          return fullFillAddresses(addresses);
        });
      })
    );
};

export const saveAddressEpic = (actions$, store) => {
  return actions$.ofType(SAVE_ADDRESS)
    .pipe(
      mergeMap(action => {
        if (action.address.key) {
          // Update address
          return FireBaseClient.writeAddress(action.address).map(res => updateAddressFinished(action.address));
        }
        // Save address
        return FireBaseClient.writeAddress(action.address).map(address => saveAddressFinished(address));
      })
    );
};

import { ADD_ADDRESS, FETCH_ADDRESSES } from '../constants/ActionTypes';
import { fullFillAddresses, saveAddressFinished } from '../actions';
import FireBaseClient from '../services/FireBaseClient';
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
  return actions$.ofType(ADD_ADDRESS)
    .pipe(
      mergeMap(action => {
        return FireBaseClient.writeAddress(action.address).map(address => {
          return saveAddressFinished(address);
        })
      })
    );
};
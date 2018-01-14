import { FETCH_ADDRESSES } from '../constants/ActionTypes';
import { fullFillAddresses } from '../actions';
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
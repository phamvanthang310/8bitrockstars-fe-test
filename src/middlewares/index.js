import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { fetchAddressesEpic, saveAddressEpic } from './Addresses';

const rootEpic = combineEpics(fetchAddressesEpic, saveAddressEpic);
export const epicMiddleware = createEpicMiddleware(rootEpic);

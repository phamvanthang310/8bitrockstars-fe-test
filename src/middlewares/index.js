import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { fetchAddressesEpic } from './Addresses';

const rootEpic = combineEpics(fetchAddressesEpic);
export const epicMiddleware = createEpicMiddleware(rootEpic);

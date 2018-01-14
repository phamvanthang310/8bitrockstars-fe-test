import { fetchAddressesEpic } from '../actions';
import { combineEpics, createEpicMiddleware } from 'redux-observable';

const rootEpic = combineEpics(fetchAddressesEpic);
export const epicMiddleware = createEpicMiddleware(rootEpic);
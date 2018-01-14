import * as types from '../constants/ActionTypes';

export const fetchAddresses = () => ({type: types.FETCH_ADDRESSES});
export const fullFillAddresses = (addresses) => ({type: types.FETCH_ADDRESSES_FULFILLED, addresses});
export const addAddress = (address) => ({type: types.ADD_ADDRESS, address});
export const editAddress = (index, address) => ({type: types.EDIT_ADDRESS, index, address});

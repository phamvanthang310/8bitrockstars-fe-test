import * as types from '../constants/ActionTypes';

export const fetchAddresses = () => ({type: types.FETCH_ADDRESSES});
export const fullFillAddresses = (addresses) => ({type: types.FETCH_ADDRESSES_FINISHED, addresses});
export const saveAddress = (address) => ({type: types.ADD_ADDRESS, address});
export const saveAddressFinished = (address) => ({type: types.ADD_ADDRESS_FINISHED, address});
export const editAddress = (index, address) => ({type: types.EDIT_ADDRESS, index, address});
export const selectAddress = (address) => ({type: types.SELECT_ADDRESS, address});
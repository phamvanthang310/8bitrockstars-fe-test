import * as types from '../constants/ActionTypes';

export const fetchAddresses = () => ({type: types.FETCH_ADDRESSES});
export const fullFillAddresses = (addresses) => ({type: types.FETCH_ADDRESSES_FINISHED, addresses});

export const saveAddress = (address) => ({type: types.SAVE_ADDRESS, address});
export const saveAddressFinished = (address) => ({type: types.SAVE_ADDRESS_FINISHED, address});

export const updateAddress = (address) => ({type: types.UPDATE_ADDRESS, address});
export const updateAddressFinished = (address) => ({type: types.UPDATE_ADDRESS_FINISHED, address});

export const selectAddress = (address) => ({type: types.SELECT_ADDRESS, address});
import * as types from '../constants/ActionTypes';

export const addAddress = (address) => ({type: types.ADD_ADDRESS, address});
export const editAddress = (index, address) => ({type: types.EDIT_ADDRESS, index, address});
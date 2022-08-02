import { itemTypes } from '../types/itemTypes';
const initialState = {
  getItem: {},
  getItems: {},
};

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case itemTypes.getItems:
      return { ...state, getItems: action.payload };
    case itemTypes.getItem:
      return { ...state, getItem: action.payload };
    default:
      return state;
  }
};

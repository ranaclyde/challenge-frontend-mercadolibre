import axios from 'axios';
import { itemTypes } from '../types/itemTypes';

const apiUrl = 'http://localhost:3050/api';

export const getProducts =
  (query = '') =>
  async (dispatch) => {
    try {
      const response = await fetch(`${apiUrl}/items?q=${query}`);
      const data = await response.json();
      dispatch({
        type: itemTypes.getItems,
        payload: data,
      });
    } catch (err) {
      return new Error(err);
    }
  };

export const getProduct = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${apiUrl}/items/${id}`);
    const values = {
      item: {
        ...res.data,
      },
      author: {
        name: 'Matias Emanuel',
        lastname: 'Sanhueza',
      },
    };
    dispatch(actionProduct(values));
  } catch (err) {
    console.log(err);
    return new Error(err);
  }
};

export const actionProduct = (values) => {
  return {
    type: itemTypes.getItem,
    payload: values,
  };
};

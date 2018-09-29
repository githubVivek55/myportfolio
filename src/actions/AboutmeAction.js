import axios from 'axios';
import {GET_ABOUTME} from './types';

export const getAboutme = () => dispatch => {
  axios.get ('http://localhost:5000/api/items/about').then (res => {
    dispatch ({
      type: GET_ABOUTME,
      payload: res.data[0],
    });
  });
  return {
    type: GET_ABOUTME,
  };
};

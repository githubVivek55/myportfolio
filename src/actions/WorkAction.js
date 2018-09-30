import axios from 'axios';
import {GET_WORK} from './types';

export const getMyWork = () => dispatch => {
  axios.get ('/api/items/mywork').then (res => {
    dispatch ({
      type: GET_WORK,
      payload: res.data[0],
    });
  });
  return {
    type: GET_WORK,
  };
};

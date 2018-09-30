import axios from 'axios';
import {GET_HOME} from './types';

export const getHomeContent = () => dispatch => {
  axios.get ('/api/items').then (res => {
    dispatch ({
      type: GET_HOME,
      payload: res.data[0],
    });
  });
  return {
    type: GET_HOME,
  };
};

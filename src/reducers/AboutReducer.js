import {GET_ABOUTME} from '../actions/types';

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ABOUTME:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

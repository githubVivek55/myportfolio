import {GET_WORK} from '../actions/types';

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WORK:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

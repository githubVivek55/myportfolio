import {GET_HOME} from '../actions/types';

const initialState = {
  data: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HOME:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}

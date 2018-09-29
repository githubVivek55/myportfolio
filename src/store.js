import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore (
  rootReducer,
  initialState,
  compose (applyMiddleware (...middleware))
);

export default store;

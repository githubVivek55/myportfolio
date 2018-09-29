import {combineReducers} from 'redux';
import HomeReducer from './HomeReducer';
import AboutReducer from './AboutReducer';
import WorkReducer from './WorkReducer';

export default combineReducers ({
  home: HomeReducer,
  Aboutme: AboutReducer,
  MyWork: WorkReducer,
});

import { combineReducers } from 'redux';
import news from './news/reducers.js';
import filter from './filter/reducers';

export default combineReducers({
    news,
    // filter
  });
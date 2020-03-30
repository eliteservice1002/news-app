import { combineReducers } from 'redux';
import news from './news-reducers';
import filter from './filter-reducers';
import article from './article-reducer';

export default combineReducers({
    news,
    filter,
    article
  });
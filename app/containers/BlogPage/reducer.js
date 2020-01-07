import { combineReducers } from 'redux';

import { createLoaderReducers } from 'utils';
import * as constants from './constants';

const initialState = {
  postsList: [],
  currentPost: {},
};

const loaderReducers = createLoaderReducers({
  requestActions: [constants.LOAD_POSTS_REQUEST, constants.LOAD_POST_REQUEST],
  successActions: [constants.LOAD_POSTS_SUCCESS, constants.LOAD_POST_SUCCESS],
});

const postsList = (state = initialState.postsList, { type, payload }) => {
  switch (type) {
    case constants.LOAD_POSTS_SUCCESS:
      return [...payload];
    default:
      return state;
  }
};

const currentPost = (state = initialState.currentPost, { type, payload }) => {
  switch (type) {
    case constants.LOAD_POST_SUCCESS:
      return { ...payload };
    default:
      return state;
  }
};

export default combineReducers({
  ...loaderReducers,
  postsList,
  currentPost,
});

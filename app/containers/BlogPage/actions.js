import * as constants from './constants';

// all posts
export const loadAllPostsRequest = () => ({
  type: constants.LOAD_POSTS_REQUEST,
});

export const allPostsLoaded = payload => ({
  type: constants.LOAD_POSTS_SUCCESS,
  payload,
});

// one post
export const loadPostRequest = () => ({
  type: constants.LOAD_POSTS_REQUEST,
});

export const postLoaded = payload => ({
  type: constants.LOAD_POSTS_SUCCESS,
  payload,
});

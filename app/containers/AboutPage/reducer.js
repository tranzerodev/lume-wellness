/*
 *
 * AboutPage reducer
 *
 */
import { combineReducers } from 'redux';
import { createLoaderReducers } from 'utils';
import * as constants from './constants';

export const initialState = {
  members: [],
  aboutValues: [],
  aboutContent: {},
};

const loaderReducers = createLoaderReducers({
  requestActions: [constants.LOAD_MEMBERS_REQUEST],
  successActions: [constants.LOAD_MEMBERS_SUCCESS],
});

const members = (state = initialState.members, { type, payload }) => {
  switch (type) {
    case constants.LOAD_MEMBERS_SUCCESS:
      return [...payload];
    default:
      return state;
  }
};

const aboutValues = (state = initialState.aboutValues, { type, payload }) => {
  switch (type) {
    case constants.LOAD_ABOUT_VALUES_SUCCESS:
      return [...payload];
    default:
      return state;
  }
};

const aboutContent = (state = initialState.aboutContent, { type, payload }) => {
  switch (type) {
    case constants.LOAD_ABOUT_PAGE_SUCCESS:
      return { ...payload };
    default:
      return state;
  }
};

export default combineReducers({
  ...loaderReducers,
  members,
  aboutValues,
  aboutContent,
});

/*
 *
 * AboutPage reducer
 *
 */
import { combineReducers } from 'redux';
import { createLoaderReducers } from 'utils';
import * as constants from './constants';

export const initialState = {
  locationInfo: {},
  experience: [],
  helpInfo: [],
};

const loaderReducers = createLoaderReducers({
  requestActions: [constants.LOAD_EXPERIENCE_REQUEST],
  successActions: [constants.LOAD_EXPERIENCE_SUCCESS],
});

const locationInfo = (state = initialState.locationInfo, {type, payload}) => {
  switch (type) {
    case constants.LOAD_LOCATION_INFO_SUCCESS:
      return {...payload};
    default:
      return state;
  }
}

const experience = (state = initialState.experience, {type, payload }) => {
  switch (type) {
    case constants.LOAD_EXPERIENCE_SUCCESS:
      return [...payload];
    default:
      return state;
  }
};

const helpInfo = (state = initialState.helpInfo, { type, payload }) => {
  switch (type) {
    case constants.LOAD_HELP_INFO_SUCCESS:
      return [...payload];
    default:
      return state;
  }
};

export default combineReducers({
  ...loaderReducers,
  locationInfo,
  experience,
  helpInfo,
});

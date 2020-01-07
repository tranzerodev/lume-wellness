import { combineReducers } from 'redux';

import { createLoaderReducers } from 'utils';
import * as constants from './constants';

const initialState = {
  servicesList: [],
};

const loaderReducers = createLoaderReducers({
  requestActions: [constants.LOAD_SERVICES_REQUEST],
  successActions: [constants.LOAD_SERVICES_SUCCESS],
});

const servicesList = (state = initialState.servicesList, { type, payload }) => {
  switch (type) {
    case constants.LOAD_SERVICES_SUCCESS:
      return [...payload];
    default:
      return state;
  }
};

export default combineReducers({
  ...loaderReducers,
  servicesList,
});

import * as constants from './constants';

// all services
export const loadAllServicesRequest = () => ({
  type: constants.LOAD_SERVICES_REQUEST,
});

export const allServicesLoaded = payload => ({
  type: constants.LOAD_SERVICES_SUCCESS,
  payload,
});

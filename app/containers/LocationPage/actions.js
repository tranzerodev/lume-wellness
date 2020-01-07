import * as constants from './constants';

// Location Info
export const getLocationInfo = () => ({
  type: constants.LOAD_LOCATION_INFO_REQUEST,
});

export const allLocationInfoLoaded = payload => ({
  type: constants.LOAD_LOCATION_INFO_SUCCESS, 
  payload,
});

// Experience
export const getExperience = () => ({
  type: constants.LOAD_EXPERIENCE_REQUEST,
});

export const allExperienceLoaded = payload => ({
  type: constants.LOAD_EXPERIENCE_SUCCESS,
  payload,
});

// Help info
export const getHelpInfo = () => ({
  type: constants.LOAD_HELP_INFO_REQUEST,
});

export const allHelpInfoLoaded = payload => ({
  type: constants.LOAD_HELP_INFO_SUCCESS,
  payload,
});

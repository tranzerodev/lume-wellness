import * as constants from './constants';

// Member Profile
export const getTeamMembers = () => ({
  type: constants.LOAD_MEMBERS_REQUEST,
});

export const allTeamMembersLoaded = payload => ({
  type: constants.LOAD_MEMBERS_SUCCESS,
  payload,
});

// About values
export const getAboutValues = () => ({
  type: constants.LOAD_ABOUT_VALUES_REQUEST,
});

export const allAboutValuesLoaded = payload => ({
  type: constants.LOAD_ABOUT_VALUES_SUCCESS,
  payload,
});

// About page
export const getAboutPage = () => ({
  type: constants.LOAD_ABOUT_PAGE_REQUEST,
});

export const allAboutPageLoaded = payload => ({
  type: constants.LOAD_ABOUT_PAGE_SUCCESS,
  payload,
});

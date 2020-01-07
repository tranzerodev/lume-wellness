/*
 *
 * TermsofServicesPage actions
 *
 */

import * as constants from './constants';

// Term of Services Information
export const getTermsofServicesContent = () => ({
	type: constants.LOAD_TERMS_OF_SERVICES_REQUEST,
});

export const allTermsofServicesContentLoaded = payload => ({
	type: constants.LOAD_TERMS_OF_SERVICES_SUCCESS,
	payload,
})
/*
 *
 * PrivacyPolicyPage actions
 *
 */

import * as constants from './constants';

// Privacy Policies Informations
export const getPrivacyPolicesContent = () => ({
	type: constants.LOAD_PRIVACY_POLICES_REQUEST,
});

export const allPrivacyPoliciesContentLoaded = payload => ({
	type: constants.LOAD_PRIVACY_POLICES_SUCCESS,
	payload,
});

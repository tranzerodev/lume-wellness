/*
 *
 * PrivacyPolicyPage reducer
 *
 */
import { combineReducers } from 'redux';
import { createLoaderReducers } from 'utils';
import * as constants from './constants';

export const initialState = {
	privacyPoliciesContent: {},
};

const privacyPoliciesContent = (state = initialState.privacyPoliciesContent, {type, payload}) => {
	switch(type){
		case constants.LOAD_PRIVACY_POLICES_SUCCESS:
			return {...payload};
		default:
			return state;
	}
};


export default combineReducers({ privacyPoliciesContent });

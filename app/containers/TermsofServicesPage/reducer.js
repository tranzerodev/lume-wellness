/*
 *
 * TermsofServicesPage reducer
 *
 */
import { combineReducers } from 'redux';
import { createLoaderReducers } from 'utils';
import * as constants from './constants';

export const initialState = {
	termsOfServicesContent: {},
};

const termsOfServicesContent = (state = initialState.termsOfServicesContent, {type, payload}) => {
	switch(type){
		case constants.LOAD_TERMS_OF_SERVICES_SUCCESS:
		    return {...payload};
		default:
		    return state;
	}
};

export default combineReducers({termsOfServicesContent});
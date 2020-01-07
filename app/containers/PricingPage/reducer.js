/*
 *
 * PricingPage reducer
 *
 */
import { combineReducers } from 'redux';
import { createLoaderReducers } from 'utils';
import * as constants from './constants';

export const initialState = {
    promotionalPacks: [], 
    servicesPricing: [], 
    giftCertificates: [], 
};

const promotionalPacks = (state = initialState.promotionalPacks, {type, payload}) => {
	switch(type){
		case constants.LOAD_PROMOTIONAL_PACKS_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

const servicesPricing = (state = initialState.servicesPricing, {type, payload}) => {
	switch(type){
		case constants.LOAD_SERVICES_PRICING_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

const giftCertificates = (state = initialState.giftCertificates, {type, payload}) => {
	switch(type){
		case constants.LOAD_GIFT_CERTIFICATES_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

export default combineReducers({
	promotionalPacks, 
	servicesPricing,
	giftCertificates,
});

/*
 *
 * PricingPage actions
 *
 */

import * as constants from './constants';

// Promotional Packs
export const getPromotionalPacks = () => ({
	type: constants.LOAD_PROMOTIONAL_PACKS_REQUEST,
});

export const allPromotionalPacksLoaded = payload => ({
	type: constants.LOAD_PROMOTIONAL_PACKS_SUCCESS,
	payload,
});

// Services Pricing
export const getServicesPricing = () => ({
	type: constants.LOAD_SERVICES_PRICING_REQUEST,
});

export const allServicesPricingLoaded = payload => ({
	type: constants.LOAD_SERVICES_PRICING_SUCCESS,
	payload,
});

// Gift Cerficates
export const getGiftCertificates = () => ({
	type: constants.LOAD_GIFT_CERTIFICATES_REQUEST, 
});

export const allGiftCertificatesLoaded = payload => ({
	type: constants.LOAD_GIFT_CERTIFICATES_SUCCESS, 
	payload,
});

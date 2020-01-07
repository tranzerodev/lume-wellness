/*
 *
 * SaunaPage actions
 *
 */

import * as constants from './constants';

// Sauna Information
export const getSaunaInfo = () => ({
	type: constants.LOAD_SAUNA_INFO_REQUEST,
});

export const allSaunaInfoLoaded = payload => ({
	type: constants.LOAD_SAUNA_INFO_SUCCESS,
	payload,
});

// Sauna Menu
export const getSaunaOptions = () => ({
	type: constants.LOAD_SAUNA_OPTIONS_REQUEST,
});

export const allSaunaOptionsLoaded = payload => ({
	type: constants.LOAD_SAUNA_OPTIONS_SUCCESS, 
	payload,
});


// Sauna Slide
export const getSaunaSlides = () => ({
	type: constants.LOAD_SAUNA_SLIDES_REQUEST,
});

export const allSaunaSlidesLoaded = payload => ({
	type: constants.LOAD_SAUNA_SLIDES_SUCCESS, 
	payload,
});


// Sauna Question Answers
export const getSaunaQAs = () => ({
	type: constants.LOAD_SAUNA_QA_REQUEST,
});

export const allSaunaQAsLoaded = payload => ({
	type: constants.LOAD_SAUNA_QA_SUCCESS, 
	payload,
});


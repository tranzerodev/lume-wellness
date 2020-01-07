/*
 *
 * CryoPage actions
 *
 */

import * as constants from './constants';

// Cryo Therapy Information
export const getCryoTherapyInfo = () => ({
	type: constants.LOAD_CRYO_THERAPY_INFO_REQUEST,
});

export const allCryoTherapyInfoLoaded = payload => ({
	type: constants.LOAD_CRYO_THERAPY_INFO_SUCCESS,
	payload,
});


// Cryo Therapy Menu
export const getCryoTherapyOptions = () => ({
	type: constants.LOAD_CRYO_THERAPY_OPTIONS_REQUEST,
});

export const allCryoTherapyOptionsLoaded = payload => ({
	type: constants.LOAD_CRYO_THERAPY_OPTIONS_SUCCESS, 
	payload,
});


// Cryo Therapy Slide
export const getCryoTherapySlides = () => ({
	type: constants.LOAD_CRYO_THERAPY_SLIDES_REQUEST,
});

export const allCryoTherapySlidesLoaded = payload => ({
	type: constants.LOAD_CRYO_THERAPY_SLIDES_SUCCESS, 
	payload,
});


// Cryo Therapy Question Answers
export const getCryoTherapyQAs = () => ({
	type: constants.LOAD_CRYO_THERAPY_QA_REQUEST,
});

export const allCryoTherapyQAsLoaded = payload => ({
	type: constants.LOAD_CRYO_THERAPY_QA_SUCCESS, 
	payload,
});


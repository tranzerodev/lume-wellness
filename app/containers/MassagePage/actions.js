/*
 *
 * MassagePage actions
 *
 */

import * as constants from './constants';

// Massage Information
export const getMassageInfo = () => ({
	type: constants.LOAD_MASSAGE_INFO_REQUEST
});

export const allMassageInfoLoaded = payload => ({
	type: constants.LOAD_MASSAGE_INFO_SUCCESS,
	payload,
});


// Massage Menu
export const getMassageOptions = () => ({
	type: constants.LOAD_MASSAGE_OPTIONS_REQUEST,
});

export const allMassageOptionsLoaded = payload => ({
	type: constants.LOAD_MASSAGE_OPTIONS_SUCCESS, 
	payload,
});


// Massage Ingredients
export const getMassageIngredients= () => ({
	type: constants.LOAD_MASSAGE_INGREDIENTS_REQUEST,
});

export const allMassageIngredientsLoaded = payload => ({
	type: constants.LOAD_MASSAGE_INGREDIENTS_SUCCESS, 
	payload,
});


// Massage Slides
export const getMassageSlides= () => ({
	type: constants.LOAD_MASSAGE_SLIDES_REQUEST,
});

export const allMassageSlidesLoaded = payload => ({
	type: constants.LOAD_MASSAGE_SLIDES_SUCCESS, 
	payload,
});


// Massage Question Answers
export const getMassageQAs = () => ({
	type: constants.LOAD_MASSAGE_QA_REQUEST,
});

export const allMassageQAsLoaded = payload => ({
	type: constants.LOAD_MASSAGE_QA_SUCCESS, 
	payload,
});


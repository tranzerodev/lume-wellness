/*
 *
 * IvDripPage actions
 *
 */
import * as constants from './constants';

// IV Drips Information
export const getIVDripsInfo = () => ({
	type: constants.LOAD_IV_DRIPS_INFO_REQUEST,
});

export const allIVDripsInfoLoaded = payload => ({
	type: constants.LOAD_IV_DRIPS_INFO_SUCCESS, 
	payload,
});


// IV Drips Menu
export const getIVDripsOptions = () => ({
	type: constants.LOAD_IV_DRIPS_OPTIONS_REQUEST,
});

export const allIVDripsOptionsLoaded = payload => ({
	type: constants.LOAD_IV_DRIPS_OPTIONS_SUCCESS, 
	payload,
});


// IV Drips Ingredients
export const getIVDripsIngredients = () => ({
	type: constants.LOAD_IV_DRIPS_INGREDIENTS_REQUEST,
});

export const allIVDripsIngredientsLoaded = payload => ({
	type: constants.LOAD_IV_DRIPS_INGREDIENTS_SUCCESS, 
	payload,
});


// IV Drips Question Answers
export const getIVDripsQA = () => ({
	type: constants.LOAD_IV_DRIPS_QA_REQUEST,
});

export const allIVDripsQALoaded = payload => ({
	type: constants.LOAD_IV_DRIPS_QA_SUCCESS, 
	payload,
});


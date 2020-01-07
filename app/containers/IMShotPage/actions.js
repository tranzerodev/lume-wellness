/*
 *
 * MassagePage actions
 *
 */

import * as constants from './constants';

// BoosterShot Information
export const getBoosterShotInfo = () => ({ 
	type: constants.LOAD_BOOSTER_SHOT_INFO_REQUEST,
});

export const allBoosterShotLoaded = payload => ({
	type: constants.LOAD_BOOSTER_SHOT_INFO_SUCCESS,
	payload,
});


// Booster Shot Menu
export const getBoosterShotOptions = () => ({
	type: constants.LOAD_BOOSTER_SHOT_OPTIONS_REQUEST,
});

export const allBoosterShotOptionsLoaded = payload => ({
	type: constants.LOAD_BOOSTER_SHOT_OPTIONS_SUCCESS, 
	payload,
});


// Booster Shot Ingredients
export const getBoosterShotIngredients = () => ({
	type: constants.LOAD_BOOSTER_SHOT_INGREDIENTS_REQUEST,
});

export const allBoosterShotIngredientsLoaded = payload => ({
	type: constants.LOAD_BOOSTER_SHOT_INGREDIENTS_SUCCESS, 
	payload,
});


// Booster Shot Question Answers
export const getBoosterShotQAs = () => ({
	type: constants.LOAD_BOOSTER_SHOT_QA_REQUEST,
});

export const allBoosterShotQAsLoaded = payload => ({
	type: constants.LOAD_BOOSTER_SHOT_QA_SUCCESS, 
	payload,
}); 


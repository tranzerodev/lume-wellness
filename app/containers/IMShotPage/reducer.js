/*
 *
 * MassagePage reducer
 *
 */
import { combineReducers } from 'redux';
import { createLoaderReducers } from 'utils';
import * as constants from './constants';

export const initialState = {
	boosterShotInfo: {},
	boosterShotOptions: [],
	boosterShotIngredients: [],
	boosterShotQAs: [],
};


const boosterShotInfo = (state = initialState.boosterShotInfo, {type, payload}) => {
	switch(type){
		case constants.LOAD_BOOSTER_SHOT_INFO_SUCCESS:
		    return {...payload};
		default:
		    return state;
	}
};

const boosterShotOptions = (state = initialState.boosterShotOptions, {type, payload}) => {
	switch(type){
		case constants.LOAD_BOOSTER_SHOT_OPTIONS_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

const boosterShotIngredients = (state = initialState.boosterShotIngredients, {type, payload}) => {
	switch(type){
		case constants.LOAD_BOOSTER_SHOT_INGREDIENTS_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

const boosterShotQAs = (state = initialState.boosterShotQAs, {type, payload}) => {
	switch(type){
		case constants.LOAD_BOOSTER_SHOT_QA_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};


export default combineReducers({
	boosterShotQAs,
	boosterShotInfo,
	boosterShotOptions,
	boosterShotIngredients,
});

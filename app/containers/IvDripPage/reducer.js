/*
 *
 * IvDripPage reducer
 *
 */
import { combineReducers } from 'redux';
import { createLoaderReducers } from 'utils';
import * as constants from './constants';

export const initialState = {
	ivDripsInfo: {},
	ivDripsOptions: [],
	ivDripsIngredients: [],
	ivDripsQAs: [],
};

const ivDripsInfo = (state = initialState.ivDripsInfo, {type, payload}) => {
	switch(type){
		case constants.LOAD_IV_DRIPS_INFO_SUCCESS:
			return {...payload};
		default:
			return state;
	}
};

const ivDripsOptions = (state = initialState.ivDripsOptions, {type, payload}) => {
	switch(type){
		case constants.LOAD_IV_DRIPS_OPTIONS_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

const ivDripsIngredients = (state = initialState.ivDripsIngredients, {type, payload}) => {
	switch(type){
		case constants.LOAD_IV_DRIPS_INGREDIENTS_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

const ivDripsQAs = (state = initialState.ivDripsQAs, {type, payload}) => {
	switch(type){
		case constants.LOAD_IV_DRIPS_QA_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};


export default combineReducers({
	ivDripsQAs,
	ivDripsInfo,
	ivDripsOptions,
	ivDripsIngredients,
});

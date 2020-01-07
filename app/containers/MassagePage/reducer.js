/*
 *
 * MassagePage reducer
 *
 */
import { combineReducers } from 'redux';
import { createLoaderReducers } from 'utils';
import * as constants from './constants';

export const initialState = {
	massageInfo: {},
	massageQAs: [],
	massageSlides: [],
	massageIngredients: [],
	massageOptions: [],
};

const massageInfo = (state = initialState.massageInfo, {type, payload}) => {
	switch(type){
		case constants.LOAD_MASSAGE_INFO_SUCCESS:
		    return {...payload};
		default:
		    return state;
	}
}

const massageOptions = (state = initialState.massageOptions, {type, payload}) => {
	switch(type){
		case constants.LOAD_MASSAGE_OPTIONS_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

const massageIngredients = (state = initialState.massageIngredients, {type, payload}) => {
	switch(type){
		case constants.LOAD_MASSAGE_INGREDIENTS_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

const massageSlides = (state = initialState.massageSlides, {type, payload}) => {
	switch(type){
		case constants.LOAD_MASSAGE_SLIDES_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

const massageQAs = (state = initialState.massageQAs, {type, payload}) => {
	switch(type){
		case constants.LOAD_MASSAGE_QA_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

export default combineReducers({
	massageInfo,
	massageQAs, 
	massageOptions, 
	massageSlides,
	massageIngredients,
});

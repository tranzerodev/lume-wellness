/*
 *
 * SaunaPage reducer
 *
 */
import { combineReducers } from 'redux';
import { createLoaderReducers } from 'utils';
import * as constants from './constants';

export const initialState = {
	saunaInfo: {},
	saunaQAs: [], 
	saunaSlides: [],
	saunaOptions: [],
};

const saunaInfo = (state = initialState.saunaInfo, {type, payload}) => {
	switch(type){
		case constants.LOAD_SAUNA_INFO_SUCCESS:
		    return {...payload};
		default:
		    return state;
	}
}

const saunaOptions = (state = initialState.saunaOptions, {type, payload}) => {
	switch(type){
		case constants.LOAD_SAUNA_OPTIONS_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

const saunaSlides = (state = initialState.saunaSlides, {type, payload}) => {
	switch(type){
		case constants.LOAD_SAUNA_SLIDES_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

const saunaQAs = (state = initialState.saunaQAs, {type, payload}) => {
	switch(type){
		case constants.LOAD_SAUNA_QA_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

export default combineReducers({
	saunaQAs,
	saunaInfo,
	saunaOptions,
	saunaSlides,
});

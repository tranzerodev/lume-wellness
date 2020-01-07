/*
 *
 * CryoPage reducer
 *
 */
import { combineReducers } from 'redux';
import { createLoaderReducers } from 'utils';
import * as constants from './constants';

export const initialState = {
	cryoTherapyInfo: {},
	cryoTherapyQAs: [],
	cryoTherapySlides: [],
	cryoTherapyOptions: [],
};

const cryoTherapyInfo = (state = initialState.cryoTherapyInfo, {type, payload}) => {
	switch(type){
		case constants.LOAD_CRYO_THERAPY_INFO_SUCCESS:
			return {...payload};
		default:
			return state;
	}
}

const cryoTherapyOptions = (state = initialState.cryoTherapyOptions, {type, payload}) => {
	switch(type){
		case constants.LOAD_CRYO_THERAPY_OPTIONS_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

const cryoTherapySlides = (state = initialState.cryoTherapySlides, {type, payload}) => {
	switch(type){
		case constants.LOAD_CRYO_THERAPY_SLIDES_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

const cryoTherapyQAs = (state = initialState.cryoTherapyQAs, {type, payload}) => {
	switch(type){
		case constants.LOAD_CRYO_THERAPY_QA_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

export default combineReducers({
	cryoTherapyQAs,
	cryoTherapyInfo,
	cryoTherapyOptions,
	cryoTherapySlides,
});

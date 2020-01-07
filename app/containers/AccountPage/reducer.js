/*
 *
 * AccountPage reducer
 *
 */
import { combineReducers } from 'redux';
import { createLoaderReducers } from 'utils';
import * as constants from './constants';

export const initialState = {
	userInfo: {},
	creditCards: [], 
	appointments: [],
};

const userInfo = (state = initialState.userInfo, {type, payload}) => {
	switch(type){
		case constants.LOAD_USER_INFO_SUCCESS:
		    return {...payload};
		case constants.UPDATE_USER_INFO_SUCCESS:
		    return {...payload};
		case constants.CREATE_NEW_USER_SUCCESS:
		    return {...payload};
		default:
		    return state;
	}
};

const creditCards = (state = initialState.creditCards, {type, payload}) => {
	switch(type){
		case constants.LOAD_CREDIT_CARDS_SUCCESS:
		    return [...payload];
		case constants.ADD_NEW_CREDIT_CARD_SUCCESS:
			return [...state, payload];
		case constants.DELETE_CREDIT_CARD_SUCCESS:
		    return state.filter(item => {return item.id != payload.id})
		default:
		    return state;
	}
};

const appointments = (state = initialState.appointments, {type, payload}) => {
	switch(type){
		case constants.LOAD_APPOINTMENTS_SUCCESS:
		    return [...payload];
		default:
		    return state;
	}
};

export default combineReducers({
	userInfo, 
	appointments,
	creditCards, 
}); 

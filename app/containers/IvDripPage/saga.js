import { put, takeLatest } from 'redux-saga/effects';
import { agent } from 'utils/agent';

import { getAllIvDripsInfo, getAllIvDripsOptions, getAllIvDripsIngredients, getAllIvDripsQAs } from '../../constants/api';
import { allIVDripsInfoLoaded, allIVDripsOptionsLoaded, allIVDripsIngredientsLoaded, allIVDripsQALoaded} from './actions';

import * as constants from './constants';

export function* getIvDripsInfo(){
	try {
		const { data } = yield agent.get(getAllIvDripsInfo);
		yield put(allIVDripsInfoLoaded(data));
		console.log("IV DRIP INFO",data);
	} catch (err){
		console.log({err});
	}
}

export function* getIvDripsOptions(){
	try {
		const { data } = yield agent.get(getAllIvDripsOptions);
		console.log("Get IV Drips Options", data.entries);
		yield put(allIVDripsOptionsLoaded(data.entries));
	} catch (err) {
		console.log({err});
	}
}

export function* getIvDripsIngredients(){
    try {
		const {data} = yield agent.get(getAllIvDripsIngredients);
		console.log("Get IV Drips Ingredients", data);
		yield put(allIVDripsIngredientsLoaded(data.entries));
	} catch (err) {
		console.log({err});
	}
}

export function* getIvDripsQAs(){
	try {
		const {data} = yield agent.get(getAllIvDripsQAs);
		console.log("Get IV Drips FAQs:", data.entries);
		yield put(allIVDripsQALoaded(data.entries))
	} catch (err) {
        console.log({err});
	}
}

export default function* ivDripsPageSaga(){
	yield takeLatest(constants.LOAD_IV_DRIPS_INFO_REQUEST, getIvDripsInfo);
	yield takeLatest(constants.LOAD_IV_DRIPS_OPTIONS_REQUEST, getIvDripsOptions);
	yield takeLatest(constants.LOAD_IV_DRIPS_INGREDIENTS_REQUEST, getIvDripsIngredients);
	yield takeLatest(constants.LOAD_IV_DRIPS_QA_REQUEST, getIvDripsQAs);
}
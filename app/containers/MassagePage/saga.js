import { put, takeLatest } from 'redux-saga/effects';
import { agent } from 'utils/agent';

import { getAllMassageInfo, getAllMassageOptions, getAllMassageIngredients, getAllMassageSlides, getAllMassageQAs } from '../../constants/api';
import { allMassageInfoLoaded, allMassageOptionsLoaded, allMassageQAsLoaded, allMassageIngredientsLoaded, allMassageSlidesLoaded } from './actions';

import * as constants from './constants';

export function* getMassageInfo(){
	try {
		const {data} = yield agent.get(getAllMassageInfo);
		yield put(allMassageInfoLoaded(data));
		console.log("Massage Info data", data);
	} catch (err){
		console.log({err});
	}
}

export function* getMassageOptions(){
    try {
		const {data} = yield agent.get(getAllMassageOptions);
		yield put(allMassageOptionsLoaded(data.entries));
		console.log("Massage options data", data.entries);
	} catch (err){
		console.log({err});
	}
}

export function* getMassageIngredients(){
    try {
		const {data} = yield agent.get(getAllMassageIngredients);
		yield put(allMassageIngredientsLoaded(data.entries));
		console.log("Massage ingredients data", data.entries);
	} catch (err){
		console.log({err});
	}

}

export function* getMassageSlides(){
    try {
		const {data} = yield agent.get(getAllMassageSlides);
		yield put(allMassageSlidesLoaded(data.entries));
		console.log("Massage slides data", data.entries);
	} catch (err){
		console.log({err});
	}

}

export function* getMassageQAs(){
    try {
		const {data} = yield agent.get(getAllMassageQAs);
		yield put(allMassageQAsLoaded(data.entries));
		console.log("Massage QA data", data.entries);
	} catch (err){
		console.log({err});
	}
}

export default function* massagePageSage(){
	yield takeLatest(constants.LOAD_MASSAGE_INFO_REQUEST, getMassageInfo);
	yield takeLatest(constants.LOAD_MASSAGE_OPTIONS_REQUEST, getMassageOptions);
	yield takeLatest(constants.LOAD_MASSAGE_INGREDIENTS_REQUEST, getMassageIngredients);
	yield takeLatest(constants.LOAD_MASSAGE_SLIDES_REQUEST, getMassageSlides);
	yield takeLatest(constants.LOAD_MASSAGE_QA_REQUEST, getMassageQAs);
}
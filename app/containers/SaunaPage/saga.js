import { put, takeLatest } from 'redux-saga/effects';
import { agent } from 'utils/agent';  

import { getAllSaunaInfo, getAllSaunaOptions, getAllSaunaSlides, getAllSaunaQAs } from '../../constants/api';
import { allSaunaInfoLoaded, allSaunaOptionsLoaded, allSaunaQAsLoaded, allSaunaSlidesLoaded  } from './actions';

import * as constants from './constants';

export function* getSaunaInfo(){
    try {
        const {data} = yield agent.get(getAllSaunaInfo);
        yield put(allSaunaInfoLoaded(data));
        console.log("Sauna Data", data);
    } catch (err){
    	console.log({err});
    }
}

export function* getSaunaOptions(){
	try {
		const { data } = yield agent.get(getAllSaunaOptions);
		console.log("Get Sauna Drips Options", data.entries);
		yield put(allSaunaOptionsLoaded(data.entries));
	} catch (err){
		console.log({err});
	}
}

export function* getSaunaSlides(){
    try {
		const {data} = yield agent.get(getAllSaunaSlides);
		console.log("Get IV Drips Slides", data);
		yield put(allSaunaSlidesLoaded(data.entries));
	} catch (err){
		console.log({err});
	}
}

export function* getSaunaQAs(){
	try {
		const {data} = yield agent.get(getAllSaunaQAs);
		console.log("Get IV Drips FAQs:", data.entries);
		yield put(allSaunaQAsLoaded(data.entries))
	} catch (err) {
        console.log({err});
	}
}

export default function* SaunaPageSaga(){
	yield takeLatest(constants.LOAD_SAUNA_INFO_REQUEST, getSaunaInfo);
	yield takeLatest(constants.LOAD_SAUNA_OPTIONS_REQUEST, getSaunaOptions);
	yield takeLatest(constants.LOAD_SAUNA_SLIDES_REQUEST, getSaunaSlides);
	yield takeLatest(constants.LOAD_SAUNA_QA_REQUEST, getSaunaQAs);
}
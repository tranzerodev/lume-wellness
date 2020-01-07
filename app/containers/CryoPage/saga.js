import { put, takeLatest } from 'redux-saga/effects';
import { agent } from 'utils/agent';

import { getAllCryoTherapyInfo, getAllCryoTherapyOptions, getAllCryoTherapySlides,  getAllCryoTherapyQAs} from '../../constants/api';
import { allCryoTherapyInfoLoaded, allCryoTherapyOptionsLoaded, allCryoTherapyQAsLoaded, allCryoTherapySlidesLoaded } from './actions';

import * as constants from './constants';

export function* getCryoTherapyInfo(){
	try {
        const {data} = yield agent.get(getAllCryoTherapyInfo);
        yield put(allCryoTherapyInfoLoaded(data));
        console.log("CRYODATA", data);
	} catch (err){
		console.log({err});
	}
}

export function* getCryoTherapyOptions(){
	try {
		const { data } = yield agent.get(getAllCryoTherapyOptions);
		console.log("Get CryoTherapy Drips Options", data.entries);
		yield put(allCryoTherapyOptionsLoaded(data.entries));
	} catch (err){
		console.log({err});
	}
}

export function* getCryoTherapySlides(){
    try {
		const {data} = yield agent.get(getAllCryoTherapySlides);
		console.log("Get IV Drips Slides", data.entries);
		yield put(allCryoTherapySlidesLoaded(data.entries));
	} catch (err){
		console.log({err});
	}
}

export function* getCryoTherapyQAs(){
	try {
		const {data} = yield agent.get(getAllCryoTherapyQAs);
		console.log("Get IV Drips FAQs:", data.entries);
		yield put(allCryoTherapyQAsLoaded(data.entries))
	} catch (err) {
        console.log({err});
	}
}

export default function* CryoTherapyPageSaga(){
	yield takeLatest(constants.LOAD_CRYO_THERAPY_INFO_REQUEST, getCryoTherapyInfo);
	yield takeLatest(constants.LOAD_CRYO_THERAPY_OPTIONS_REQUEST, getCryoTherapyOptions);
	yield takeLatest(constants.LOAD_CRYO_THERAPY_SLIDES_REQUEST, getCryoTherapySlides);
	yield takeLatest(constants.LOAD_CRYO_THERAPY_QA_REQUEST, getCryoTherapyQAs);
}
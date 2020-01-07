import { put, takeLatest } from 'redux-saga/effects';
import { agent } from 'utils/agent';  

import { getAllBoosterShotInfo, getAllBoosterShotOptions, getAllBoosterShotIngredients, getAllBoosterShotQAs} from '../../constants/api';
import { allBoosterShotLoaded, allBoosterShotIngredientsLoaded, allBoosterShotOptionsLoaded, allBoosterShotQAsLoaded } from './actions';

import * as constants from './constants';

export function* getBoosterShotInfo(){
	try {
		const {data} = yield agent.get(getAllBoosterShotInfo);
		yield put(allBoosterShotLoaded(data));
		console.log("Booster Shot Data", data);
	} catch (err){
		console.log({err});
	}

}

export function* getBoosterShotOptions(){
	try {
		const { data } = yield agent.get(getAllBoosterShotOptions);
		console.log("Get Booster Shot Options", data.entries);
		yield put(allBoosterShotOptionsLoaded(data.entries));
	} catch (err) {
		console.log({err});
	}
}

export function* getBoosterShotIngredients(){
    try {
		const {data} = yield agent.get(getAllBoosterShotIngredients);
		console.log("Get IV Drips Ingredients", data);
		yield put(allBoosterShotIngredientsLoaded(data.entries));
	} catch (err) {
		console.log({err});
	}
}

export function* getBoosterShotQAs(){
	try {
		const {data} = yield agent.get(getAllBoosterShotQAs);
		console.log("Get Booster Shot FAQs:", data.entries);
		yield put(allBoosterShotQAsLoaded(data.entries))
	} catch (err) {
        console.log({err});
	}
}

export default function* ivDripsPageSaga(){
	yield takeLatest(constants.LOAD_BOOSTER_SHOT_INFO_REQUEST, getBoosterShotInfo);
	yield takeLatest(constants.LOAD_BOOSTER_SHOT_OPTIONS_REQUEST, getBoosterShotOptions);
	yield takeLatest(constants.LOAD_BOOSTER_SHOT_INGREDIENTS_REQUEST, getBoosterShotIngredients);
	yield takeLatest(constants.LOAD_BOOSTER_SHOT_QA_REQUEST, getBoosterShotQAs);
}
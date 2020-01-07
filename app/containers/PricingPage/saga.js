import { put, takeLatest } from 'redux-saga/effects';
import { agent } from 'utils/agent'; 

import {getAllServicesPricing, getAllPromotionalPacks, getAllGiftCertificates} from '../../constants/api';
import {allServicesPricingLoaded, allPromotionalPacksLoaded, allGiftCertificatesLoaded} from './actions';

import * as constants from './constants';

export function* getPromotionalPacks(){
	try {
		const {data} = yield agent.get(getAllPromotionalPacks);
		console.log("Promotional Packs", data.entries);
		yield put(allPromotionalPacksLoaded(data.entries));
		
	} catch (err){
		console.log({err});
	}
}

export function* getServicesPricing(){
	try {
		const {data} = yield agent.get(getAllServicesPricing);
		yield put(allServicesPricingLoaded(data.entries));
		console.log("Services Pricing", data.entries);
	} catch (err){
		console.log({err});
	}
}

export function* getGiftCertificates(){
	try {
		const {data} = yield agent.get(getAllGiftCertificates);
		yield put(allGiftCertificatesLoaded(data.entries));
		console.log("Gift Cerificates", data.entries);
	} catch (err){
		console.log({err});
	}
}

export default function* PricingPageSaga(){
	yield takeLatest(constants.LOAD_PROMOTIONAL_PACKS_REQUEST, getPromotionalPacks);
	yield takeLatest(constants.LOAD_SERVICES_PRICING_REQUEST, getServicesPricing);
	yield takeLatest(constants.LOAD_GIFT_CERTIFICATES_REQUEST, getGiftCertificates);
}
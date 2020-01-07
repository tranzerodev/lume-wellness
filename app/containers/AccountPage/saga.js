import { put, takeLatest } from 'redux-saga/effects';
import { agent, lambda } from 'utils/agent';  

import { getAllUserInfo, getAllCreditCards, getAllAppointments} from '../../constants/api';
import { allUserInfoLoaded, allCreditCardsLoaded, allAppointmentsLoaded} from './actions';

import * as constants from './constants';

export function* getUserInfo({email}){
	try {

		const {data} = yield lambda.post(getAllUserInfo,{email:email});
		console.log("Inside saga Getusers", email, "with data: ", data);
		yield put(allUserInfoLoaded(data.data));
	} catch (err){
    	console.log({err});
	}
}

export function* getAppointments({email}){
	try {
		const {data} = yield lambda.post(getAllAppointments,{email:email});
		console.log("Get Appointments for ", email, "with data: ", data.data);
		yield put(allAppointmentsLoaded(data.data))
	} catch (err){
    	console.log({err});
	}
}

export function* getCreditCards({customer_id}){
	try {
		const {data} = yield lambda.post(getAllCreditCards, {customer_id:"cus_G6gHK5HWh6xBob"})
		console.log("Get Credit Cards", data.cards);
		yield put(allCreditCardsLoaded(data.cards));
	} catch(err){
		console.log({err});
	}
}

export default function* accountPageSage(){
	yield takeLatest(constants.LOAD_USER_INFO_REQUEST, getUserInfo);
	yield takeLatest(constants.LOAD_APPOINTMENTS_REQUEST, getAppointments);
	yield takeLatest(constants.LOAD_CREDIT_CARDS_REQUEST, getCreditCards);
} 
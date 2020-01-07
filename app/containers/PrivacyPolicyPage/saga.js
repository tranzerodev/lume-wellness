import { put, takeLatest } from 'redux-saga/effects';
import { agent } from 'utils/agent';

import { getPrivacyPoliciesContent } from '../../constants/api';
import { allPrivacyPoliciesContentLoaded } from './actions';

import * as constants from './constants';

export function* getPrivacyPolicyContent(){
	try {
		const { data } = yield agent.get(getPrivacyPoliciesContent);
		yield put(allPrivacyPoliciesContentLoaded(data));
		console.log("Privacy Data",data);
	} catch (err){
		console.log({err});
	}
}

export default function* privacyPolicyPageSaga(){
	yield takeLatest(constants.LOAD_PRIVACY_POLICES_REQUEST, getPrivacyPolicyContent);
}
import { put, takeLatest } from 'redux-saga/effects';
import { agent } from 'utils/agent';

import { getTermsOfServicesContent} from '../../constants/api';
import { allTermsofServicesContentLoaded } from './actions';

import * as constants from './constants';

export function* getTermsofServicesContent(){
	try {
		const {data} = yield agent.get(getTermsOfServicesContent);
		console.log("Terms of Services", data);
		yield put(allTermsofServicesContentLoaded(data));
	} catch(err){
		console.log({err});
	}
}

export default function* termsOfServicesPageSaga(){
	yield takeLatest(constants.LOAD_TERMS_OF_SERVICES_REQUEST, getTermsofServicesContent);
}
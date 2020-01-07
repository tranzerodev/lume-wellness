import { put, takeLatest } from 'redux-saga/effects';
import { agent } from 'utils/agent';
import { getAllServices } from '../../constants/api';
import { allServicesLoaded } from './actions';
import * as constants from './constants';

export function* getServices() {
  try {
    const { data } = yield agent.get(getAllServices);
    
    console.log("Before sorted", data.entries);
    data.entries.sort(function (a,b){
    	return a.id -  b.id;
    })

    console.log("After sorted", data.entries);
    yield put(allServicesLoaded(data.entries));
    
  } catch (err) {
    console.log({ err });
  }
}

export default function* blogPageSaga() {
  yield takeLatest(constants.LOAD_SERVICES_REQUEST, getServices);
}

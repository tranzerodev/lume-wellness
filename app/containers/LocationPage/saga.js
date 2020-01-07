import { put, takeLatest } from 'redux-saga/effects';
import { agent } from 'utils/agent';

import { getAllExperience, getAllHelpInfo, getAllLocationInfo } from '../../constants/api';
import { allExperienceLoaded, allHelpInfoLoaded, allLocationInfoLoaded } from './actions';

import * as constants from './constants';

export function* getLocationInfo(){
  try {
    const { data} = yield agent.get(getAllLocationInfo);
    yield put(allLocationInfoLoaded(data));
  } catch (err){
    console.log({ err });
  }
}

export function* getExperience() {
  try {
    const { data } = yield agent.get(getAllExperience);
    yield put(allExperienceLoaded(data.entries));
  } catch (err) {
    console.log({ err });
  }
}

export function* getHelpInfo() {
  try {
    const { data } = yield agent.get(getAllHelpInfo);
    yield put(allHelpInfoLoaded(data.entries));
  } catch (err) {
    console.log({ err });
  }
}

// Individual exports for testing
export default function* locationPageSaga() {
  yield takeLatest(constants.LOAD_LOCATION_INFO_REQUEST, getLocationInfo);
  yield takeLatest(constants.LOAD_EXPERIENCE_REQUEST, getExperience);
  yield takeLatest(constants.LOAD_HELP_INFO_REQUEST, getHelpInfo);
}

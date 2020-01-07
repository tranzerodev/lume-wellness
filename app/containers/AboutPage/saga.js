import { put, takeLatest } from 'redux-saga/effects';
import { agent } from 'utils/agent';


import {
  getAllTeamMembers,
  getAllAboutValues,
  getAllAboutPageInfo,
} from '../../constants/api';

import {
  allTeamMembersLoaded,
  allAboutValuesLoaded,
  allAboutPageLoaded,
} from './actions';

import * as constants from './constants';

export function* getMembers() {
  try {
    const { data } = yield agent.get(getAllTeamMembers);
    yield put(allTeamMembersLoaded(data.entries));
  } catch (err) {
    console.log({ err });
  }
}

export function* getAboutValues() {
  try {
    const { data } = yield agent.get(getAllAboutValues);
    yield put(allAboutValuesLoaded(data.entries));
  } catch (err) {
    console.log({ err });
  }
}

export function* getAboutContent() {
  try {
    const { data } = yield agent.get(getAllAboutPageInfo);
    console.log("About Page Info", data);
    yield put(allAboutPageLoaded(data));
  } catch (err) {
    console.log({ err });
  }
}

// Individual exports for testing
export default function* aboutPageSaga() {
  yield takeLatest(constants.LOAD_MEMBERS_REQUEST, getMembers);
  yield takeLatest(constants.LOAD_ABOUT_VALUES_REQUEST, getAboutValues);
  yield takeLatest(constants.LOAD_ABOUT_PAGE_REQUEST, getAboutContent);
}

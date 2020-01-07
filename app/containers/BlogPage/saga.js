import { put, takeLatest } from 'redux-saga/effects';

import { agent } from 'utils/agent';
import { getAllPosts } from '../../constants/api';
import { allPostsLoaded } from './actions';
import * as constants from './constants';

export function* getPosts() {
  try {
    const { data } = yield agent.get(getAllPosts);
    yield put(allPostsLoaded(data.entries));
    
  } catch (err) {
    console.log({ err });
  }
}

export default function* blogPageSaga() {
  yield takeLatest(constants.LOAD_POSTS_REQUEST, getPosts);
}

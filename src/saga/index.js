import { fork, all, takeLatest } from 'redux-saga/effects';
import { fetch } from '../api/config';

import { getSummoner } from './summoner';

export function* watchGetSummoner(): Generator<() => void, void, *> {
  yield takeLatest('GET_SUMMONER', getSummoner, fetch);
}

function* rootSaga(): Generator<Array<() => void>, void, *> {
  yield all([fork(watchGetSummoner)]);
}

export default rootSaga;

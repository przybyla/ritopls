import { fork, all, takeLatest } from 'redux-saga/effects';
import { fetch } from '../api/config';

import { getSummoner, getChampionMastery } from './summoner';

export function* watchGetSummoner(): Generator<() => void, void, *> {
  yield takeLatest('GET_SUMMONER', getSummoner, fetch);
}

export function* watchGetChampionMastery(): Generator<() => void, void, *> {
  yield takeLatest('GET_CHAMPION_MASTERY', getChampionMastery, fetch);
}

function* rootSaga(): Generator<Array<() => void>, void, *> {
  yield all([fork(watchGetSummoner), fork(watchGetChampionMastery)]);
}

export default rootSaga;

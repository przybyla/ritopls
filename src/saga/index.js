import { fork, all, takeLatest } from 'redux-saga/effects';
import { fetch } from '../api/config';

import { getSummoner, getChampionMastery, getRecentHistory } from './summoner';

export function* watchGetSummoner(): Generator<() => void, void, *> {
  yield takeLatest('GET_SUMMONER', getSummoner, fetch);
}

export function* watchGetChampionMastery(): Generator<() => void, void, *> {
  yield takeLatest('GET_CHAMPION_MASTERY', getChampionMastery, fetch);
}

export function* watchGetRecentHistory(): Generator<() => void, void, *> {
  yield takeLatest('GET_RECENT_HISTORY', getRecentHistory, fetch);
}
function* rootSaga(): Generator<Array<() => void>, void, *> {
  yield all([
    fork(watchGetSummoner),
    fork(watchGetChampionMastery),
    fork(watchGetRecentHistory)
  ]);
}

export default rootSaga;

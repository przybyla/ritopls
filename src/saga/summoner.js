import { put, call, select } from 'redux-saga/effects';
import * as actions from '../scenes/actions';
import { API_KEY, SUMMONER_NAME, CHAMPION_MASTERY } from '../api/config';

export function* getSummoner(api: () => Object): Generator<*, *, *> {
  const state = yield select();
  const summoner = state.summoner.get('input');
  yield put(actions.setFetchStatus('getSummoner', 'processing'));
  const { response } = yield call(
    api,
    `${SUMMONER_NAME}${summoner}${API_KEY}`,
    {
      method: 'GET'
    }
  );
  if (response && !response.error) {
    const json = yield response.json();
    yield put(actions.setFetchStatus('getSummoner', 'success'));
    yield put(actions.setSummoner(json));
  } else {
    yield put(actions.setFetchStatus('getSummoner', 'error'));
  }
}
export function* getChampionMastery(
  api: () => Object,
  action
): Generator<*, *, *> {
  const state = yield select();
  const summonerId = state.summoner.getIn(['summoner', 'id']);
  console.log(summonerId);
  yield put(actions.setFetchStatus('getChampionMastery', 'processing'));
  const { response } = yield call(
    api,
    `${CHAMPION_MASTERY}${summonerId}${API_KEY}`,
    {
      method: 'GET'
    }
  );
  if (response && !response.error) {
    const json = yield response.json();
    yield put(actions.setFetchStatus('getChampionMastery', 'success'));
    yield put(actions.setChampionMastery(json));
  } else {
    yield put(actions.setFetchStatus('getChampionMastery', 'error'));
  }
}

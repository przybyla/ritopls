import { put, call } from 'redux-saga/effects';
import * as actions from '../scenes/actions';
import { API_KEY, SUMMONER_NAME } from '../api/config';

export function* getSummoner(api: () => Object): Generator<*, *, *> {
  yield put(actions.setFetchStatus('getSummoner', 'processing'));
  const { response } = yield call(api, `${SUMMONER_NAME}${API_KEY}`, {
    method: 'GET'
  });
  if (response && !response.error) {
    const json = yield response.json();
    yield put(actions.setFetchStatus('getSummoner', 'success'));
    yield put(actions.setSummoner(json));
  } else {
    yield put(actions.setFetchStatus('getSummoner', 'error'));
  }
}

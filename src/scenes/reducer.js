import { Map, fromJS } from 'immutable';
import * as type from './actionTypes';

export type StateType = Map<string, any>;

export type ActionType = {
  type: string,
  payload: Array<string>
};

export const initialState = Map({
  sumonner: Map({})
});

export const summoner = (
  state: StateType = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case type.SET_SUMMONER:
      return state.set('sumonner', fromJS(action.payload));
    case type.SET_FETCH_STATUS:
      return state.setIn(['fetchStatus', action.payload[0]], action.payload[1]);
    default:
      return state;
  }
};

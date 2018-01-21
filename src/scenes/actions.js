import * as types from './actionTypes';

type PayloadType = string | number | Array<any>;

export type ActionReturnType = {
  type: string,
  payload?: PayloadType
};

export function setSummoner(payload: PayloadType): ActionReturnType {
  return {
    type: types.SET_SUMMONER,
    payload
  };
}

export function getSummoner(): ActionReturnType {
  return {
    type: types.GET_SUMMONER
  };
}

export function setFetchStatus(...args: any): ActionReturnType {
  return {
    type: types.SET_FETCH_STATUS,
    payload: [...args]
  };
}

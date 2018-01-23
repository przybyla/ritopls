import 'whatwg-fetch';

export const API_KEY = '?api_key=RGAPI-19c72b06-487c-46c5-872b-e9f869b444cc';
export const SUMMONER_NAME = '/lol/summoner/v3/summoners/by-name/';
export const CHAMPION_MASTERY =
  '/lol/champion-mastery/v3/champion-masteries/by-summoner/';

export function payload(data: any) {
  const json = JSON.stringify(data, null, 2);
  return json;
}

export function fetch(url: string, opts: any) {
  const PROXY_URL = 'http://localhost:3002/';
  const MAIN_URL = 'https://eun1.api.riotgames.com';
  return window
    .fetch(`${PROXY_URL}${MAIN_URL}${url}`, opts)
    .then(response => {
      if (response.status >= 200 && response.status < 300) return { response };
      throw response;
    })
    .catch(error => ({ error }));
}

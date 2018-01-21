import 'whatwg-fetch';

export const API_KEY = '?api_key=RGAPI-6837ae76-31d0-404f-9bc8-468a32b24f13';
export const SUMMONER_NAME = '/lol/summoner/v3/summoners/by-name/Furek';

export function payload(data: any) {
  const json = JSON.stringify(data, null, 2);
  return json;
}

export function fetch(url: string, opts: any) {
  const MAIN_URL = 'https://eun1.api.riotgames.com';
  return window
    .fetch(`${MAIN_URL}${url}`, opts)
    .then(response => {
      if (response.status >= 200 && response.status < 300) return { response };
      throw response;
    })
    .catch(error => ({ error }));
}

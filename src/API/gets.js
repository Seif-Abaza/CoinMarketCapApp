import { key, apiURL } from './api-values';

export function getCoinsData() {
  return fetch(`${apiURL}/listings/latest`, {
    headers: {
      Accept: 'application/json',
      'X-CMC_PRO_API_KEY': key
    }
  });
}

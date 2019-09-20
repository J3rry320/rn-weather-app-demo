import {SEARCH_CITY} from '../constants/Search';

export const searchCity = (payload: any) => ({
  payload,
  type: SEARCH_CITY,
});

import {SEARCH_CITY} from '../constants/Search_Constants';

export const searchCity = (payload: any) => ({
  payload,
  type: SEARCH_CITY,
});

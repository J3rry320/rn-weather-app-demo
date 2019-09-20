import {call, put, takeEvery} from 'redux-saga/effects';
import {getRequest} from '../../modules/networkRequestUtils';
import {API_SEARCH_WEATHER} from '../../modules/requestURL';
import * as SearchConstants from '../constants/Search_Constants';
function* searchWeather(cityName: any) {
  try {
    const url = API_SEARCH_WEATHER(cityName.payload);
    const payload = yield call(getRequest, url);
    yield put({type: SearchConstants.SEARCH_CITY_WEATHER_SUCCESS, payload});
  } catch (error) {
    yield put({error, type: SearchConstants.SEARCH_CITY_WEATHER_FAILURE});
  }
}
export function* rootSearchSaga() {
  yield takeEvery(SearchConstants.SEARCH_CITY_WEATHER, searchWeather);
}

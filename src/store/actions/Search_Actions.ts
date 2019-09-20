import * as Search_Constants from '../constants/Search_Constants';

export const searchWeatherForCity = (payload: string) => ({
  payload,
  type: Search_Constants.SEARCH_CITY_WEATHER,
});
export const searchWeatherForCitySuccess = (payload: Weatherapp.WeatherResults) => ({
  payload,
  type: Search_Constants.SEARCH_CITY_WEATHER_SUCCESS,
});
export const searchWeatherForCityFailure = (error: Error) => ({
  error,
  type: Search_Constants.SEARCH_CITY_WEATHER_FAILURE,
});

import * as SearchWeather from '../constants/Search_Constants';

const INIT_STATE: Weatherapp.IWeatherReducers = {
  weatherResults: null,
  weatherResultsLoading: null,
  weatherResultsError: null,
};
export default function(state = INIT_STATE, action: any) {
  switch (action.type) {
    case SearchWeather.SEARCH_CITY_WEATHER: {
      return {
        ...state,
        weatherResultsLoading: true,
      };
    }
    case SearchWeather.SEARCH_CITY_WEATHER_SUCCESS: {
      return {
        ...state,
        weatherResultsLoading: false,
        weatherResults: action.payload,
      };
    }
    case SearchWeather.SEARCH_CITY_WEATHER_FAILURE: {
      return {
        ...state,
        weatherResultsLoading: false,
        weatherResultsError: action.error,
      };
    }
    default: {
      return state;
    }
  }
}

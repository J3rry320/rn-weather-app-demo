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
    default: {
      return state;
    }
  }
}

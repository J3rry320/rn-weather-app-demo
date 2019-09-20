import {combineReducers} from 'redux';
// Imports: Reducers
import weatherResults from './Search_Reducers';
// Redux: Root Reducer
export const rootReducer = combineReducers<Weatherapp.IAppState>({
  weatherResults,
});
// Exports

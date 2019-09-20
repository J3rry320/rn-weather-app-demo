import {combineReducers} from 'redux';
// Imports: Reducers
import searchReducer from './Search_Reducers';
// Redux: Root Reducer
export const rootReducer = combineReducers({
  searchReducer,
});
// Exports


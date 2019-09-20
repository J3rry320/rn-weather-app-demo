import {all, fork} from 'redux-saga/effects';
import {rootSearchSaga} from './Search_Sagas';
// Imports: Redux Sagas

// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([fork(rootSearchSaga)]);
}

import { all } from 'redux-saga/effects';
import configSaga from 'store/config/configSaga';

export function* rootSaga() {
  yield all([spawn(configSaga)]);
}

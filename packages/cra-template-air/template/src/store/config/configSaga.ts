import { call, put, takeLeading } from 'redux-saga/effects';
import { errorHandler, getJson } from 'store/utils';
import { ACTION_ENDPOINTS, API_VERSION, CONFIG_PATH } from 'utils/apiPaths';
import { handleGetConfig } from './configActions';
import { configActionTypes, ConfigResponseType } from './configTypes';

export function* getConfigSaga() {
  try {
    const config = yield* getJson<ConfigResponseType>(CONFIG_PATH(API_VERSION.v1));

    yield put(handleGetConfig.success(config));
  } catch (err) {
    yield call(errorHandler, err.status || 500, ACTION_ENDPOINTS.GET_CONFIG);
  }
}

export function* configSaga() {
  yield takeLeading(configActionTypes.HANDLE_GET_CONFIG, getConfigSaga);
}

export default configSaga;

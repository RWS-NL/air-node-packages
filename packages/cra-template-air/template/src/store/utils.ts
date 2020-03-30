import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { ACTION_ENDPOINTS, API_METHOD } from 'utils/apiPaths';
import ApiClient, { FetchResponse, FetchResultTypes } from 'utils/apiClient';
import { call, put } from 'redux-saga/effects';
import { AIRHandledError, HTTP_SUCCESS_CODES, defaultToastrOptions } from 'utils/constants';
import { BAD_REQUEST, FORBIDDEN, NOT_FOUND, REQUEST_TIMEOUT } from 'http-status';
import { actions as toastrActions, toastType } from 'react-redux-toastr';
import i18n from 'config/i18n';

export const composeEnhancers = composeWithDevTools({});

/**
 * Gets some data from the backend
 * @param path The API path to get data from
 * @returns the data from the backend in JSON format
 */
export function* getJson<T>(path: string) {
  const response: FetchResponse<T> = yield call([ApiClient, 'fetch'], API_METHOD.GET, path, FetchResultTypes.JSON);

  if (!response) throw new AIRHandledError(REQUEST_TIMEOUT, 'timed_out_no_response');

  if (!Object.keys(response.data).length && !HTTP_SUCCESS_CODES.includes(response.status)) {
    throw new AIRHandledError(response.status || BAD_REQUEST, 'bad_request');
  }

  return response.data;
}

/**
 * Posts some data to an endpoint on the backend
 * @param path The API path to post data to
 * @param body The object to include as the body of the post
 * @returns The body returned by the backend in JSON format
 */
export function* postJson<T>(path: string, body: any) {
  const response: FetchResponse<T> = yield call(
    [ApiClient, 'fetch'],
    API_METHOD.POST,
    path,
    FetchResultTypes.JSON,
    body
  );

  if (!response) throw new AIRHandledError(REQUEST_TIMEOUT, 'timed_out_no_response');

  if (!Object.keys(response.data).length && !HTTP_SUCCESS_CODES.includes(response.status)) {
    throw new AIRHandledError(response.status || BAD_REQUEST, 'bad_request');
  }

  return response.data;
}

/**
 * Puts some data to an endpoint on the backend
 * @param path The API path to put data to
 * @param body The object to include as the body of the put
 * @returns The body returned by the backend in JSON format
 */
export function* putJson<T>(path: string, body: any) {
  const response: FetchResponse<T> = yield call(
    [ApiClient, 'fetch'],
    API_METHOD.PUT,
    path,
    FetchResultTypes.JSON,
    body
  );

  if (!response) throw new AIRHandledError(REQUEST_TIMEOUT, 'timed_out_no_response');

  if (response.data && !Object.keys(response.data).length && !HTTP_SUCCESS_CODES.includes(response.status)) {
    throw new AIRHandledError(response.status || BAD_REQUEST, 'bad_request');
  }

  return response.data;
}

/**
 * Generates a toastr message
 * @param message The message to show in the toastr
 * @param type Optional type of the toastr
 */
export const displayToastr = (message: string, type: toastType = 'success') => {
  return toastrActions.add({
    ...defaultToastrOptions,
    message,
    type
  });
};

/**
 * Handles HTTP status codes by generating toastrs
 * @param code The HTTP status code that was returned
 * @param action The endpoint where the status code occured on
 */
export function* errorHandler(code: number, action: ACTION_ENDPOINTS) {
  switch (code) {
    case BAD_REQUEST:
      return yield put(displayToastr(i18n.t(`toasts.badRequest.${action}`), 'error'));
    case FORBIDDEN:
      return yield put(displayToastr(i18n.t(`toasts.forbidden.${action}`), 'error'));
    case NOT_FOUND:
      return yield put(displayToastr(i18n.t(`toasts.notFound.${action}`), 'error'));
    case REQUEST_TIMEOUT:
      return yield put(displayToastr(i18n.t(`toasts.requestTimeout.${action}`), 'error'));
    default:
      return yield put(displayToastr(i18n.t('toasts.unhandledError'), 'error'));
  }
}

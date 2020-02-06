import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { API_METHOD } from 'utils/apiPaths';
import ApiClient, { FetchResponse } from 'utils/apiClient';
import { call } from 'redux-saga/effects';
import { AIRHandledError, HTTP_SUCCESS_CODES } from 'utils/constants';
import { REQUEST_TIMEOUT, BAD_REQUEST } from 'http-status';

export const composeEnhancers = composeWithDevTools({});

/**
 * Makes a call to the API and returns data if available
 * @param apiMethod The API Method to perform
 * @param path The API path to call
 * @param data Optional data to send in the body
 * @returns data or error
 */
export function* doRequest<R>(apiMethod: API_METHOD, path: string, data?: unknown) {
  const response: FetchResponse<R> =
    apiMethod === API_METHOD.GET
      ? yield call([ApiClient, 'request'], apiMethod, path)
      : yield call([ApiClient, 'request'], apiMethod, path, data);

  if (!response) throw new AIRHandledError(REQUEST_TIMEOUT, 'timed_out_no_response');

  if (!Object.keys(response.data).length && !HTTP_SUCCESS_CODES.includes(response.status)) {
    throw new AIRHandledError(response.status || BAD_REQUEST, 'bad_request');
  }

  return response.data;
}

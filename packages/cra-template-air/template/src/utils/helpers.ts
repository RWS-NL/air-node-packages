import i18n from 'config/i18n';
import { BAD_REQUEST, FORBIDDEN, NOT_FOUND, REQUEST_TIMEOUT } from 'http-status';
import { actions as toastrActions } from 'react-redux-toastr';
import { put } from 'redux-saga/effects';
import { ACTION_ENDPOINTS } from './apiPaths';
import { defaultToastrOptions } from './constants';

export const noOp = () => undefined;

export function* errorHandler(code: number, action: ACTION_ENDPOINTS) {
  switch (code) {
    case BAD_REQUEST:
      return yield put(
        toastrActions.add({ ...defaultToastrOptions, message: i18n.t(`toasts.badRequest.${action}`), type: 'error' })
      );
    case FORBIDDEN:
      return yield put(
        toastrActions.add({ ...defaultToastrOptions, message: i18n.t(`toasts.forbidden.${action}`), type: 'error' })
      );
    case NOT_FOUND:
      return yield put(
        toastrActions.add({ ...defaultToastrOptions, message: i18n.t(`toasts.notFound.${action}`), type: 'error' })
      );
    case REQUEST_TIMEOUT:
      return yield put(
        toastrActions.add({
          ...defaultToastrOptions,
          message: i18n.t(`toasts.requestTimeout.${action}`),
          type: 'error'
        })
      );
    default:
      return yield put(
        toastrActions.add({ ...defaultToastrOptions, message: i18n.t('toasts.unhandledError'), type: 'error' })
      );
  }
}

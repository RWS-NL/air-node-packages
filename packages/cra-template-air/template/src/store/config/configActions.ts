import { createAsyncAction } from 'typesafe-actions';
import { configActionTypes, ConfigResponseType } from './configTypes';

export const handleGetConfig = createAsyncAction(
  configActionTypes.HANDLE_GET_CONFIG,
  configActionTypes.HANDLE_GET_CONFIG_SUCCESS,
  configActionTypes.HANDLE_GET_CONFIG_FAILED
)<undefined, ConfigResponseType, Error>();

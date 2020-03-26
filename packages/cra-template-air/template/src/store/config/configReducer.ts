import { ConfigContextDefaults } from 'contexts/ConfigContext';
import { createReducer, getType } from 'typesafe-actions';
import { handleGetConfig } from './configActions';
import { configState } from './configTypes';

export const initialState: configState = ConfigContextDefaults;

const reducer = createReducer(initialState).handleType(getType(handleGetConfig.success), (state, action) => ({
  ...state,
  ...action.payload,
  hasLoaded: true
}));

export default reducer;

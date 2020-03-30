import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';
import configReducer from 'store/config/configReducer';

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    toastr: toastrReducer,
    config: configReducer
  });

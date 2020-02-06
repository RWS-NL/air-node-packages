import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { combineReducers } from 'redux';

export default (history: History) =>
  combineReducers({
    router: connectRouter(history),
    toastr: toastrReducer
  });

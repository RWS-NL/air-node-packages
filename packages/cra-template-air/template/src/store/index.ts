import { routerMiddleware as createRouterMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { HotNodeModule, RootAction, RootState } from '{{APP_NAME_REDUX}}';
import { applyMiddleware, createStore } from 'redux';
import { createLogger, LogEntryObject } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import { rootSaga } from './root-sagas';
import { composeEnhancers } from './utils';
import { isDevEnv, isTestEnv } from '@rws-air/utils';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

export const initialState = {};

const routerMiddleware = createRouterMiddleware(history);
const middlewares = [routerMiddleware, sagaMiddleware];
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(rootReducer(history), initialState, enhancer);

const logger = createLogger({
  collapsed: (_getState: () => RootState, _action: RootAction, _logEntry?: LogEntryObject) => true,
  predicate: (_getState: () => RootState) => {
    return !isTestEnv;
  }
});

if (isDevEnv) {
  middlewares.push(logger);
}

// Hot reloading in development
if ((module as HotNodeModule).hot) {
  (module as HotNodeModule).hot.accept('../App.tsx', () => {
    store.replaceReducer(rootReducer(history));
  });
}

sagaMiddleware.run(rootSaga);

export default store;

declare module 'typesafe-actions' {
  interface Types {
    RootAction: RootAction;
  }
}

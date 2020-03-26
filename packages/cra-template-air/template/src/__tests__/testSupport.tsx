import { CssBaseline, NoSsr } from '@material-ui/core';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createTheme } from 'App';
import 'config/i18n';
import { ConnectedRouter } from 'connected-react-router';
import { mount, ReactWrapper } from 'enzyme';
import { OK } from 'http-status';
import React, { Component, FC } from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import configureMockStore, { MockStoreEnhanced } from 'redux-mock-store';
import { history } from 'store';
import { initialState as initialConfigState } from 'store/config/configReducer';
import { RootState } from '{{APP_NAME_REDUX}}';
import { FetchResponse } from 'utils/apiClient';

export const initialTestState: RootState = {
  router: {
    location: {
      pathname: '/',
      search: '',
      state: null,
      hash: ''
    },
    action: 'REPLACE'
  },
  toastr: { toastrs: [] },
  config: { ...initialConfigState }
};

export interface ComponentProviderSetupOptions {
  PrimaryComponent: any;
  SubComponent?: any;
  state?: any;
  componentProps?: object;
  permissionContext?: object;
}

const TestComponent: FC = () => <div />;

export const componentWithProvidersSetup = async <P extends object = object, S = object, C = Component>(
  options: ComponentProviderSetupOptions
): Promise<ComponentWithProvidersSetupReturnType<P, S, C>> => {
  const subComponent = options.SubComponent || TestComponent;
  const testStore: MockStoreEnhanced<RootState> = configureMockStore<RootState>([])(options.state);

  const providerMount = mount(
    <Provider store={testStore} context={ReactReduxContext}>
      <MuiThemeProvider theme={createTheme}>
        <ConnectedRouter history={history} context={ReactReduxContext}>
          <NoSsr>
            <CssBaseline />
            <ReduxToastr closeOnToastrClick />
            <options.PrimaryComponent {...options.componentProps} />
          </NoSsr>
        </ConnectedRouter>
      </MuiThemeProvider>
    </Provider>
  );

  return {
    providerMount,
    component: (providerMount.find(subComponent) as unknown) as ReactWrapper<P, S, C>,
    store: testStore
  };
};

interface ComponentWithProvidersSetupReturnType<P extends object = object, S = object, C = Component> {
  providerMount: ReactWrapper<any, Readonly<object>, Component<object, object, any>>;
  component: ReactWrapper<P, S, C>;
  store: MockStoreEnhanced<RootState>;
}

export const baseSagaTestResponse: FetchResponse<{}> = {
  headers: new Headers(),
  status: OK,
  statusText: 'ok',
  data: {}
};

test('testSupport', () => {
  expect(true).toBe(true);
});

export default componentWithProvidersSetup;

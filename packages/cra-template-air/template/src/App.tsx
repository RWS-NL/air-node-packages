import MomentUtils from '@date-io/moment';
import CssBaseline from '@material-ui/core/CssBaseline';
import NoSsr from '@material-ui/core/NoSsr';
import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { StylesProvider } from '@material-ui/styles';
import { ConnectedRouter } from 'connected-react-router';
import ConnectedAppBase from 'containers/AppBase';
import React, { FC } from 'react';
import { Provider, ReactReduxContext } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import store, { history } from 'store';
import { ThemeColours } from 'utils/constants';

export const createTheme: Theme = createMuiTheme({
  ...ThemeColours,
  typography: {
    fontFamily: ['rijksoverheidsanstext', 'verdana', 'arial', 'sans-serif'].join(','),
    fontSize: 16
  },
  shape: {
    borderRadius: 0
  }
});

const App: FC = () => {
  return (
    <Provider store={store} context={ReactReduxContext}>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={createTheme}>
          <ConnectedRouter history={history} context={ReactReduxContext}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <NoSsr>
                <CssBaseline />
                <ReduxToastr closeOnToastrClick preventDuplicates />
                <ConnectedAppBase />
              </NoSsr>
            </MuiPickersUtilsProvider>
          </ConnectedRouter>
        </MuiThemeProvider>
      </StylesProvider>
    </Provider>
  );
};

export default App;

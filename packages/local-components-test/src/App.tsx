import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import Home from 'Home';
import React, { FC } from 'react';
import { ThemeColours } from 'utils/constants';

const createTheme: Theme = createMuiTheme({
  ...ThemeColours,
  typography: {
    fontFamily: [
      'rijksoverheidsanstext',
      'verdana',
      'arial',
      'sans-serif'
    ].join(','),
    fontSize: 16,
  },
});

const App: React.FC = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={createTheme}>
      <Home />
    </MuiThemeProvider>
  </StylesProvider>
);

export default App;
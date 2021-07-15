import { createTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './Home';
import { ThemeColours } from './utils/constants';

const theme: Theme = createTheme({
  ...ThemeColours,
  typography: {
    fontFamily: ['rijksoverheidsanstext', 'verdana', 'arial', 'sans-serif'].join(','),
    fontSize: 16
  },
  shape: {
    borderRadius: 0
  }
});

const App: React.FC = () => (
  <StylesProvider injectFirst>
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </MuiThemeProvider>
  </StylesProvider>
);

export default App;

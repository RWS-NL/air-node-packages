import { createTheme, ThemeProvider, Theme } from '@mui/material/styles';
import { StylesProvider } from '@mui/styles';
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
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  </StylesProvider>
);

export default App;

import { createMuiTheme, MuiThemeProvider, Theme } from '@material-ui/core/styles';
import { StylesProvider } from '@material-ui/styles';
import { blue, red, yellow } from './utils/constants';
import Home from './Home';
import React, { FC } from 'react';

// @ts-ignore
const createTheme: Theme = createMuiTheme({
  palette: {
    contrastThreshold: 3,
    error: { main: red },
    primary: { main: blue },
    secondary: { main: yellow },
    tonalOffset: 0.2,
    type: 'light',
  },
  typography: {
    fontFamily: [
      'rijksoverheidsanstext',
      'verdana',
      'arial',
      'sans-serif'
    ].join(','),
    fontSize: 16,
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
      disableTouchRipple: true,
    },
  },
});

const Providers: FC = () => {
  return (
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={createTheme}>
        <Home />
      </MuiThemeProvider>
    </StylesProvider>
  );
};

export default Providers;

import { createMuiTheme } from '@material-ui/core';
import { ThemeColours } from './constants';

export const baseRWSTheme = createMuiTheme({
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
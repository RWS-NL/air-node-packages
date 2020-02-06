import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { CREATED, NO_CONTENT, OK } from 'http-status';
import { AddToastPayload as ToastrOptions } from 'react-redux-toastr';

export const ThemeColours: Pick<ThemeOptions, 'palette'> = {
  palette: {
    common: {
      black: '#000000',
      white: '#FFFFFF'
    },
    background: {
      paper: '#FFFFFF',
      default: '#FAFAFA'
    },
    primary: {
      light: '#8FCAE7',
      main: '#007BC7',
      dark: '#154273',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#F8F4C2',
      main: '#F9E11E',
      dark: '#FFB612',
      contrastText: '#000000'
    },
    error: {
      light: '#E06056',
      main: '#D94034',
      dark: '#D52B1E',
      contrastText: '#FFFFFF'
    },
    text: {
      primary: '#222222',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    }
  }
};

/** Default TOASTR Timeout */
export const TOASTR_TIMEOUT = 3000;

/** Package personal error class for logging API errors */
export class AIRHandledError extends Error {
  public readonly status: number;

  public constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
    this.name = 'AIRHandledError';
  }
}

/** Default options for Toastr's */
export const defaultToastrOptions: ToastrOptions = {
  type: 'success',
  position: 'bottom-left',
  options: {
    timeOut: TOASTR_TIMEOUT,
    progressBar: false,
    removeOnHover: false,
    transitionIn: 'fadeIn',
    transitionOut: 'fadeOut',
    showCloseButton: true
  }
};

export const HTTP_SUCCESS_CODES = [OK, NO_CONTENT, CREATED];

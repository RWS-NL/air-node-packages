import { isDevEnv } from '@rws-air/utils';
import App from 'App';
import 'config/i18n';
import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/styles.scss';
import 'whatwg-fetch';
import { HotNodeModule } from '{{APP_NAME_REDUX}}';

const target = document.querySelector('#root');
ReactDOM.render(<App />, target);

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.ready.then((registration) => {
    registration.unregister();
  });
}

if (isDevEnv) {
  if ((module as HotNodeModule).hot) {
    (module as HotNodeModule).hot.accept('./App.tsx', () => {
      // eslint-disable-next-line
      const NextApp = require('./App').default;
      ReactDOM.render(<NextApp />, target);
    });
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import * as Sentry from '@sentry/browser';

import App from 'app';
import AppProviders from 'contexts';
import * as serviceWorker from './serviceWorker';
import store, { persistor } from './app/store';

import './index.scss';

Sentry.init({
  dsn: 'https://86c5ac0c278b47dd92f4ea5c116098a6@sentry.io/4109811'
});

const AudioContext = window.AudioContext || window.webkitAudioContext;
// eslint-disable-next-line no-unused-vars
const audioCtx = new AudioContext();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppProviders>
          <App />
        </AppProviders>
      </PersistGate>
    </Provider>,
    document.getElementById('root')
  );
};
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

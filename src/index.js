import React from 'react';
import ReactDOM from 'react-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from 'app';

import * as serviceWorker from './serviceWorker';
import './index.scss';

import store, { persistor } from './app/store';

const AudioContext = window.AudioContext || window.webkitAudioContext;
// eslint-disable-next-line no-unused-vars
const audioCtx = new AudioContext();

const render = () => {
  ReactDOM.render(
    <audioCtx>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </audioCtx>,
    document.getElementById('root')
  );
};
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

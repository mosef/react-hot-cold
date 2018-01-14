import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './components/reducers/store';

import './reset.css';
import './index.css';

import Game from './components/js/game';

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
);
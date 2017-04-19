import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './containers/TicTacToe';
import {Provider} from 'react-redux';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <TicTacToe text={Math.random()}/>
  </Provider>,
  document.getElementById('root')
);

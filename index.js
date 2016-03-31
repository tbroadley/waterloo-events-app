import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import App from './components/app';
import main from './reducers/main';
import { fetchEvents } from './actions/main';

import Promise from 'es6-promise';
Promise.polyfill();

let store = createStore(main, applyMiddleware(thunkMiddleware));

store.dispatch(fetchEvents());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import flatsReducer from './reducers/flats_reducer';
import selectFlatReducer from './reducers/select_flat_reducer';

// State and reducers
const reducers = combineReducers({
  flats: flatsReducer,
  selectedFlat: selectFlatReducer
});

const middlewares = applyMiddleware(logger);


ReactDOM.render(
  <Provider store={createStore(reducers, {}, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);

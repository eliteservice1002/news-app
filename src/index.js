import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import  './mainStyles/variables.scss';

import App from './app';
import 'normalize.css';

import { Provider } from "react-redux";

import { createStore, applyMiddleware,compose  } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger,thunk)));



ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );



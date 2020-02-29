import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import  './mainStyles/variables.scss';

import App from './app';
import 'normalize.css';

import { Provider } from "react-redux";

import store from "./redux/store"

ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );



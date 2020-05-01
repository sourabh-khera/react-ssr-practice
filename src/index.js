import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './store';

import App from './App';
import './index.css';

const initialState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = configureStore(initialState);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);

hydrate(app, document.getElementById('root'));
import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GetAuthStatus from './hoc/auth_context';

import './index.css';
import App from './App';

const app = (
    <GetAuthStatus>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </GetAuthStatus>
);

hydrate(app, document.getElementById('root'));
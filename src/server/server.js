import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReactDomServer from 'react-dom/server';
import { StaticRouter, matchPath } from 'react-router-dom';
import userReducer from '../reducer';
import middlewares from '../middleware';
import { routes } from '../config/routes.config';
import App from '../App';

const express = require('express');
const path = require('path');

const PORT = 3000;
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), '/src/server/views'));


app.use('/dist', express.static('dist'));

const handleRender = (req, res, next) => {
  const promises = [];
  const store = createStore(userReducer, applyMiddleware(...middlewares));
  routes.some(route => {
    const match = matchPath(req.path, route.path);
    if (match && route.component.need) {
      promises.push(route.component.need.fetchUsers(store));
    }
  });
  Promise.all(promises)
    .then(data => {
      const context = {};
      const content = ReactDomServer.renderToString(
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <App />
          </StaticRouter>
        </Provider>
      );
      const finalState = store.getState();
      const state = `<script>
  window.__PRELOADED_STATE__ = ${JSON.stringify(finalState).replace(
        /</g,
        '\\u003c'
      )}
  </script>`
      res.render('index', { content, state });
    })
    .catch(error => {
      console.log(error)
    })
};

app.use(handleRender);
app.listen(PORT, () => {
  console.log('server listening on port', PORT);
});
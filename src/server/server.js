const express = require('express');
const path = require('path');
import React from 'react';
import ReactDomServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import GetAuthStatus from '../hoc/auth_context';
import App from '../App';

const PORT = 3000;
const app = express();

app.use('/dist',express.static('dist'));
// app.use(express.static('dist'));

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), '/src/server/views'));

app.get('/*', (req, res) => {
  const context = {};
  const content =  ReactDomServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  res.render('index', {content});
});

app.listen(PORT, ()=> {
  console.log('server listening on port', PORT);
});
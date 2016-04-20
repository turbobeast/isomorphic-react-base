require('dotenv').config({silent: true});

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import koa from 'koa';
import express from 'express';
import koa_static from 'koa-static';
import routes from './src/js/routes/routes';
import PageTemplate from './src/views/html';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;
app.use('/public', express.static( path.join(__dirname, 'public') ) );

app.get('/favicon.ico', (req, res) => {
  res.end();
});

app.get("*", (req, res) => {
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if(err) {
      return res.send(err);
    }
    const appHTML = renderToString(<RouterContext {...props} />);
    res.send(PageTemplate(appHTML));
  });
});

app.listen(port, () => {
  console.log('app listening on port ' + port);
});

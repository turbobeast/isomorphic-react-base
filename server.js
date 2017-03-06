require('dotenv').config({silent: true})

import React from 'react'
import path from 'path'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import { Provider } from 'react-redux'

import App from './src/js/containers/app'
import { store } from './src/js/store'
import routes from './src/js/routes/routes'
import PageTemplate from './src/views/html'

const app = express();
const port = process.env.PORT || 8080;

app.use('/public', express.static( path.join(__dirname, 'public') ) )

app.get('/favicon.ico', (req, res) => {
  res.end()
})

function handleRender (req, res) {
  
  const preloadState = store.getState()
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if(err) {
      return res.send(err);
    }

    const html = renderToString (
      <Provider store={store}>
        <RouterContext {...props} />
      </Provider>)

    res.send(PageTemplate(html, preloadState))
  });
}


app.use(handleRender)

app.listen(port, () => {
  console.log('app listening on port ' + port)
})

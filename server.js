require('dotenv').config({silent: true})
require('babel-register')({
  extensions: ['.js']
})

const React = require('react')
const path = require('path')
const express = require('express')
const { renderToString } = require('react-dom/server')
const { StaticRouter, Route} = require('react-router')
const { Provider } = require('react-redux')

const App = require('./src/js/containers/app').default
const { store } = require('./src/js/store')
const Routes = require('./src/js/routes/routes').default
const PageTemplate = require('./src/views/html')


const app = express();
const port = process.env.PORT || 8080;

app.use('/public', express.static( path.join(__dirname, 'public') ) )

app.get('/favicon.ico', (req, res) => {
  res.end()
})

function handleRender (req, res) {
  const preloadState = store.getState()
  const context = {} // createServerRenderContext()
  const html = renderToString(
    React.createElement(Provider, { store }, 
      React.createElement(StaticRouter, { location: req.url, context },
        React.createElement(Routes)
      )
    )
  )
  
  res.send(PageTemplate(html, preloadState))
}


app.use(handleRender)

app.listen(port, () => {
  console.log('app listening on port ' + port)
})

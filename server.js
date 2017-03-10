require('babel-register')({
  extensions: ['.js']
})

const React = require('react')
const path = require('path')
const express = require('express')
const { renderToString } = require('react-dom/server')
const { StaticRouter, Route } = require('react-router')
const { Provider } = require('react-redux')

const App = require('./src/js/components/app').default
const { store } = require('./src/js/store')
const PageTemplate = require('./src/views/html')

const app = express();
const port = 8080;

function handleRender (req, res) {
  const preloadState = store.getState()

  /*
    <Provider store={store}>
      <Router>
        <Route path='/' component={App} />
      </Router>
    </Provider>
  */

  const reactEntryPoint =
    React.createElement(Provider, { store }, 
      React.createElement(StaticRouter, { location: req.url, context: {} },
        React.createElement(Route, { path: '/', component: App })
      )
    )

  const html = renderToString(reactEntryPoint)
  res.send(PageTemplate(html, preloadState))
}

app.use('/public', express.static( path.join(__dirname, 'public') ) )
app.get('/favicon.ico', (req, res) => { res.end() })
app.use(handleRender)

app.listen(port, () => { console.log('app listening on port ' + port) })

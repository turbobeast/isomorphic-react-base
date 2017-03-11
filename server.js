require('babel-register')({
  extensions: ['.js'],
})

const React = require('react')
const { createElement } = React
const path = require('path')
const express = require('express')
const { renderToString } = require('react-dom/server')
const { StaticRouter, Route } = require('react-router')
const { Provider } = require('react-redux')

const App = require('./src/js/components/app').default
const { store } = require('./src/js/store')
const pageTemplate = require('./src/views/html')

const app = express()
const port = 8080

function bootstrap(location) {
  /*
    <Provider store={store}>
      <Router>
        <Route path='/' component={App} />
      </Router>
    </Provider>
  */

  const reactEntryPoint =
    createElement(Provider, { store },
      createElement(StaticRouter, { location, context: {} },
        createElement(Route, { path: '/', component: App })
      )
    )

  return renderToString(reactEntryPoint)
}

function handleRender(req, res) {
  const unsubscribe = store.subscribe(() => {
    const state = store.getState()
    if (!state.posts.pending) {
      unsubscribe()
      const html = bootstrap(req.url)
      res.send(pageTemplate(html, state))
    }
  })

  // start the redux ball rolling
  bootstrap(req.url, store)
  store.dispatch({ type: 'SERVER_REQUEST' })
}

app.use('/public', express.static(path.join(__dirname, 'public')))
app.get('/favicon.ico', (req, res) => { res.end() })
app.use(handleRender)

app.listen(port, () => { console.log(`app listening on port ${port}`) })

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

function bootstrap (path, store) {
  const { createElement } = React
  /*
    <Provider store={store}>
      <Router>
        <Route path='/' component={App} />
      </Router>
    </Provider>
  */

  const reactEntryPoint =
    createElement(Provider, { store },
      createElement(StaticRouter, { location: path, context: {} },
        createElement(Route, { path: '/', component: App })
      )
    )
  
  return renderToString(reactEntryPoint)
}

function handleRender (req, res) {
  console.log('handleRender')
  let html

  let unsubscribe = store.subscribe(() => {    
    let state = store.getState()
    console.log(state.posts.pending)

    if (!state.posts.pending) {
      unsubscribe()
      let html = bootstrap(req.url, store)
      res.send(PageTemplate(html, state))
    }
  })

  // start the redux ball rolling
  bootstrap(req.url, store)
  store.dispatch({ type: 'SERVER_REQUEST' })
}

app.use('/public', express.static( path.join(__dirname, 'public') ) )
app.get('/favicon.ico', (req, res) => { res.end() })
app.use(handleRender)

app.listen(port, () => { console.log('app listening on port ' + port) })

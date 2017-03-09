require('dotenv').config({silent: true})
require('babel-register')({
  extensions: ['.js']
})

const React = require('react')
const path = require('path')
const express = require('express')
const { renderToString } = require('react-dom/server')
const { StaticRouter } = require('react-router')
const { Provider } = require('react-redux')

const App = require('./src/js/containers/app').default
const { store } = require('./src/js/store')
const routes = require('./src/js/routes/routes')
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
    /*<Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>*/
    React.createElement(Provider, { store }, 
      React.createElement(StaticRouter, { location: req.url, context },
        React.createElement(App)
      )
    )
  )
  
  res.send(PageTemplate(html, preloadState))
  // match({ routes: routes, location: req.url }, (err, redirect, props) => {
  //   if(err) {
  //     return res.send(err);
  //   }

  //   console.log(arguments)
  //   res.send('poop')

  //   // const html = renderToString (
  //   //   React.createElement(Provider, { store },
  //   //     React.createElement(RouterContext),
  //   //     {
  //   //       router: props.router,
  //   //       location: props.location,
  //   //       routes: props.routes,
  //   //       params: props.params,
  //   //       components: props.components
  //   //     }
  //   //   )
  //   // )

  //   // res.send(PageTemplate(html, preloadState))
  // });
}


app.use(handleRender)

app.listen(port, () => {
  console.log('app listening on port ' + port)
})

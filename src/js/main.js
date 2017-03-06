import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'redux'
import routes from './routes/routes'
import { Router, browserHistory } from 'react-router'
import { store } from './store'

render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
), document.getElementById('app'))

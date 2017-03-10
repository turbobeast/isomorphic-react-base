import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './routes/routes'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { store } from './store'

render((
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
), document.getElementById('app'))

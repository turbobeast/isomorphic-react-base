import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/app'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { store } from './store'

render((
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </Provider>
), document.getElementById('app'))

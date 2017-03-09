import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Routes from './routes/routes'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { store } from './store'
// import App from './components/app'
// import Projects from './modules/projects'
// import About from './modules/about'
// import Contact from './modules/contact'

render((
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
), document.getElementById('app'))

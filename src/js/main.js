import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
// import routes from './routes/routes'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { store } from './store'
import App from './components/app'
import Projects from './modules/projects'
import About from './modules/about'
import Contact from './modules/contact'

render((
  <Provider store={store}>
    <Router>
      <Route path='/' component={App} />
      
        {/*<Route path="/" component={App}>
          <div>   
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </div>
        </Route>*/}
     
    </Router>
  </Provider>
), document.getElementById('app'))

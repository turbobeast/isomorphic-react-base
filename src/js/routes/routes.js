import React from 'react'
import { Route } from 'react-router-dom'
import App from '../containers/app'
import Projects from '../modules/projects'
import About from '../modules/about'
import Contact from '../modules/contact'

const Routes = () => (
  <div>
    <Route path='/' component={App} />
    <Route path="/projects" component={Projects} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </div>
)

export default Routes

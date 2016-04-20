import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../js/app';
import Projects from '../js/projects';
import About from '../js/about';
import Contact from '../js/contact';

const routes = (
  <Route path="/" component={App}>
    <Route path="/projects" component={Projects} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Route>
);

export default routes;

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from '../js/app';
import Projects from '../js/projects';
import About from '../js/about';

const routes = (
  <Route path="/" component={App}>
    <Route path="/repos" component={Projects} />
    <Route path="/about" component={About} />
  </Route>
);

export default routes;

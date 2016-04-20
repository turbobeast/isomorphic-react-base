import React from 'react';
import { render } from 'react-dom';
import routes from './routes/routes';
import { Router, browserHistory } from 'react-router';

render((
  <Router history={browserHistory} routes={routes} />
), document.getElementById('app'));

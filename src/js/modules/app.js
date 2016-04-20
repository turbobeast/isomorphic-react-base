import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export default function App(props) {
  return (
    <div>
    <h1>Isomorphic App</h1>
    <ul role="Navigation" className="nav">
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      </ul>
      {props.children}
      </div>
    );
}

App.propTypes = {
  children: PropTypes.element.isRequired,
};

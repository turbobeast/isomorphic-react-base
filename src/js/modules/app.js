import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (
      <div>
      <h1>Isomorphic App</h1>
      <ul role="nav" className="nav">
         <li><Link to="/about">About</Link></li>
         <li><Link to="/projects">Projects</Link></li>
         <li><Link to="/contact">Contact</Link></li>
       </ul>
       {this.props.children}
      </div>
    )
  }
});

import React from 'react'
import { Link } from 'react-router';

export default React.createClass({
  render() {
    return (<div>
      <h1>App!</h1>
      <ul role="nav">
         <li><Link to="/about" activeStyle={{ color: 'red' }}>About</Link></li>
         <li><Link to="/projects" activeStyle={{ color: 'red' }}>Projects</Link></li>
         <li><Link to="/contact" activeStyle={{ color: 'red' }}>Contact</Link></li>
       </ul>
       {this.props.children}
      </div>)
  }
});

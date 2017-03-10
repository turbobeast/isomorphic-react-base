import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
const { Link } = require('react-router-dom')
import Projects from './projects'
import About from './about'
import Contact from './contact'

export function App({ pages }) {
  return (
    <div>
      <h1>Isomorphic App</h1>
      {<ul role="Navigation" className="nav">
        {pages.map((page) => <li key={page.key}><Link to={page.path}>{page.title}</Link></li>)}
      </ul>}
      <Route path="/projects" component={Projects} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </div>
    )
}

export default connect(({ pages }) => ({ pages }))(App)

App.propTypes = {
  pages: PropTypes.array.isRequired,
}

import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
const { Link } = require('react-router-dom')

export function App({ pages, children }) {
  return (
    <div>
      <h1>Isomorphic App</h1>
      {<ul role="Navigation" className="nav">
        {pages.map((page) => <li key={page.key}><Link to={page.title}>{page.title}</Link></li>)}
      </ul>}
    </div>
    )
}

export default connect(({ pages }, { children }) => ({ pages, children }))(App)

// App.propTypes = {
//   children: PropTypes.element.isRequired,
//   pages: PropTypes.array.isRequired,
// }

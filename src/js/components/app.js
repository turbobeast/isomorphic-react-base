import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export function App({ children, pages }) {
  return (
    <div>
      <h1>Isomorphic App</h1>
      <ul role="Navigation" className="nav">
        {pages.map((page) => <li key={page.key}><Link to={page.title}>{page.title}</Link></li>)}
      </ul>
      {children}
    </div>
    )
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  pages: PropTypes.array.isRequired,
}

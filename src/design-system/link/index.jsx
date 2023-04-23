import React from 'react'
import { Link as ReactRouterLink } from 'react-router-dom'

function Link({ to, children }) {
  return (
    <ReactRouterLink to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {children}
    </ReactRouterLink>
  )
}

export default Link

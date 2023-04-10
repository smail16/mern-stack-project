import { NavBar } from 'components'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

function Base() {
  const location = useLocation()

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default Base
// activePage={location.pathname.replace('/', '')} 
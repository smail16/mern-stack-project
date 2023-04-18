import { Footer, NavBar } from 'components'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

function Base() {
  const location = useLocation()

  return (
    <>
      <NavBar activePage={location.pathname.replace('/', '')} />
      <Outlet />
      
    </>
  )
}

export default Base

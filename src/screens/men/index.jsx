import { Basket, CardListe, NavBar } from 'components'
import { articles } from 'mocks/articles'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Men() {
  const cart = useSelector((state) => state.cart)
  return (
    <div>
      
      <CardListe articles={articles} />
      <Basket />
    </div>
  )
}

export default Men

import { Basket, CardListe, NavBar } from 'components'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Men() {
  const cart = useSelector((state) => state.storeReducercart)
  const products = useSelector((state) => state.storeReducer.products)
  console.log(products)
  return (
    <div>

      <CardListe articles={products} />
      <Basket />
    </div>
  )
}

export default Men

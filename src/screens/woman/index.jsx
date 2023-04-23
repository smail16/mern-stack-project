import { CardListe } from 'components'
import React from 'react'
import { useSelector } from 'react-redux'

function Woman() {
  const cart = useSelector((state) => state.storeReducercart)
  const products = useSelector((state) => state.storeReducer.products)
  return (
    <>
      <CardListe articles={products} />
    </>
  )
}

export default Woman

import { Basket, CardListe, Footer } from 'components'
import React from 'react'
import { articles } from 'mocks/articles'
import { useSelector } from 'react-redux'


function Woman() {
  const cart = useSelector((state) => state.storeReducercart)
  const products = useSelector((state) => state.storeReducer.products)
  console.log(products)
  return <>
      {/* <CardListe articles={articles} />
      <Basket /> */}



      <CardListe articles={products} />
      {/* <Basket /> */}
      <Footer/>
  </>
}

export default Woman

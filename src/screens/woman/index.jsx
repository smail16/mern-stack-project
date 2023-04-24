import { getAllArticles } from 'api'
import { CardListe } from 'components'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addArticles } from 'redux/Slice/Slice'

function Woman() {
  

  const products = useSelector((state) => state.storeReducer.products)
  const wishlist = useSelector((state) => state.storeReducer.wishlist)
  // console.log(products.filter((prod) => prod.categoryId === 1),products.filter((prod) => prod.categoryId === "1"))
  return (
    <>
      <CardListe articles={wishlist ? products.filter((prod) => prod.isFavourite && prod.categoryId === 1) : products.filter((prod) => prod.categoryId === 1)} />
    </>
  )
}

export default Woman

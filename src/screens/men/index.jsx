import { getAllArticles } from 'api'
import { CardListe } from 'components'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addArticles } from 'redux/Slice/Slice'

function Men() {
  const dispatch = useDispatch()
  useEffect(() => {
    getAllArticles().then((res) => {
      dispatch(addArticles(res.data))
    })
  }, [dispatch])

  const products = useSelector((state) => state.storeReducer.products)
  const wishlist = useSelector((state) => state.storeReducer.wishlist)
  return (
    <div>
      <CardListe articles={wishlist ? products.filter((prod) => prod.isFavourite && prod.categoryId === 0) : products.filter((prod) => prod.categoryId === 0)} />
    </div>
  )
}

export default Men

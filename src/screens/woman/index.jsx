import { Basket, CardListe } from 'components'
import React from 'react'
import { articles } from 'mocks/articles'


function Woman() {
  return <>
  <CardListe articles={articles} />
      <Basket />
  </>
}

export default Woman

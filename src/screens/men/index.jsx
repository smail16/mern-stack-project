import { Basket, CardListe, NavBar } from 'components'
import { articles } from 'mocks/articles'
import React, { useState } from 'react'

function Men() {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false)

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
    console.log(data)
    console.log(cart)
  }

  const handleShow = (value) => {
    setShowCart(value)
    console.log('test')
  }

  return (
    <div>
      <CardListe articles={articles} addToCart={addToCart} />
      {/* <Basket /> */}
    </div>
  )
}

export default Men

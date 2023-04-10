import { Basket, CardListe, NavBar } from 'components'
import React, { useState } from 'react'
import { articles } from 'mocks/articles'

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
    console.log("test")
  }
  
  return <div>
    <NavBar count={cart.length}  cart={cart}/>
  <CardListe articles={articles} addToCart={addToCart}/>
  {/* <Basket /> */}
</div>
}

export default Men

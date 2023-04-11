import { Basket, CardListe, NavBar } from 'components'
import { articles } from 'mocks/articles'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Men() {
  const cart = useSelector((state) => state.cart)
  console.log(cart)
  const getTotalQuantity = () => {
    
    let total = 0
    cart.forEach((item) => {
      total += item.quantity
    })
    return total
  }
  // const getTotalQuantity = () => {
  //   let total = 0
  //   cart.forEach(item => {
  //     total += item.quantity
  //   })
  //   return total
  // }
  // const [cart, setCart] = useState([])
  // const [showCart, setShowCart] = useState(false)

  // const addToCart = (data) => {
  //   setCart([...cart, { ...data, quantity: 1 }])
  //   console.log(data)
  //   console.log(cart)
  // }

  // const handleShow = (value) => {
  //   setShowCart(value)
  //   console.log('test')
  // }

  return (
    <div>
      <NavBar />
      
      <CardListe articles={articles} />
      <Basket/>
    </div>
  )
}

export default Men

import React from 'react'
import { useSelector } from 'react-redux'
import { selectCart, selectTotalPrice } from 'redux/cartSlice/cartSlice'

function Total() {
    const cart = useSelector(selectCart)
  const totalPrice = useSelector(selectTotalPrice)
  console.log('Current Total Price:', totalPrice)
  return (
    <div>
        
        <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.title} : {item.price}€ x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total Price: {totalPrice}€</p>
    </div>
    </div>
  )
}

export default Total
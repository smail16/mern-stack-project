import { Stack } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import Recap from './recap'

function Achat() {
    const cart = useSelector((state) => state.storeReducer.cart)
  const totalPrice = cart.reduce((total, item) => total + Number(item.price) * Number(item.selectedQuantity), 0)
  return (
    <div>
        <Stack spacing={2}>
        {cart?.map((article) => (
          <Recap article={article} key={article.id} />
        ))}
      </Stack>

      <h3>Total Price: {totalPrice.toFixed(2)}€</h3>
    </div>
  )
}

export default Achat
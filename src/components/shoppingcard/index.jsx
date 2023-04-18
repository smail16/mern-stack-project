import { Grid, Stack } from '@mui/material'
import { Button as CommandeButton } from 'design-system'
import * as React from 'react'
import { useSelector } from 'react-redux'
import { selectTotalPrice } from 'redux/Slice/Slice'

import Modal from '../modal'
import BasketItem from './basketItem'

function Basket({ onClickCloseIcon, isOpen }) {
  const cart = useSelector((state) => state.storeReducer.cart)
  const totalPrice = cart.reduce((total, item) => total + Number(item.price) * Number(item.selectedQuantity), 0)
  // const totalPrice = useSelector(selectTotalPrice)
  // console.log(selectTotalPrice,'total')

  return (
    <Modal isOpen={isOpen} onClickCloseIcon={onClickCloseIcon}>
      <Stack spacing={2}>
        {cart?.map((article) => (
          <BasketItem article={article} key={article.id} />
        ))}
      </Stack>

      <p>Total Price: {totalPrice.toFixed(2)}€</p>

      <CommandeButton variant="contained" buttonText="Passer votre commande" />
    </Modal>
  )
}

export default Basket

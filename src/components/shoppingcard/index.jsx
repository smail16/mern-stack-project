import { Grid, Stack } from '@mui/material'
import { Button as CommandeButton } from 'design-system'
import * as React from 'react'
import { useSelector } from 'react-redux'


import { Link } from 'react-router-dom'
import Modal from '../modal'
import BasketItem from './basketItem'

function Basket({ onClickCloseIcon, isOpen }) {
  const cart = useSelector((state) => state.storeReducer.cart)
  const totalPrice = cart.reduce((total, item) => total + Number(item.price) * Number(item.selectedQuantity), 0)

  return (
    <Modal title="Votre panier" isOpen={isOpen} onClickCloseIcon={onClickCloseIcon} >
      <Stack spacing={2}>
        {cart?.map((article) => (
          <BasketItem article={article} key={article.id} />
        ))}
      </Stack>

      <p>Total Price: {totalPrice.toFixed(2)}€</p>

      <center><Link to ="/pay"><CommandeButton variant="contained" buttonText="Passer votre commande" onClick={onClickCloseIcon}/></Link></center>
    </Modal>
  )
}

export default Basket

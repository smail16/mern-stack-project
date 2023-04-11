/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
import * as React from 'react'
import { Box,  CardMedia, Grid, Typography } from '@mui/material'
import { AiFillDelete, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { Button as CommandeButton } from 'design-system'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeItem } from 'redux/cartSlice/cartSlice'

import Modal from '../modal'
import BasketItem from './index1'
import Total from './total'




    
function Basket  ({onClickCloseIcon,isOpen}) {
                     
    const cart = useSelector((state) => state.cart)
    

    
  return (
    
    
    <Modal  isOpen={isOpen} onClickCloseIcon={onClickCloseIcon}>
           <div>
          
          {cart?.map((article) => (
            
            <Grid item key={article.id} md={3}>
          <BasketItem 
          article={article}
          key={article.id}
          id={article.id}
        //   image={article.image}
        //   title={article.title}
        //   price={article.price} 
          quantity={article.quantity} />
        </Grid>
            
            
          ))}
          
          
        </div>  
         
       <Total/>
    <CommandeButton variant="contained" buttonText="Passer votre commande"/>
    </Modal>
  )
}

export default Basket
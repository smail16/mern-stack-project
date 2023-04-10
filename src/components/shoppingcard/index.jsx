/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-alert */
/* eslint-disable react/button-has-type */
import * as React from 'react'
import { Box,  CardMedia, Typography } from '@mui/material'
import { AiFillDelete, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { Button as CommandeButton } from 'design-system'
import Modal from '../modal'

// function amount():'0'

//     if (cartItem.price && cartItem.quantity) {
//       amount = cartItem.quantity * cartItem.price
//       return amount
//     }


    
function Basket  ({cart ,isOpen, onClickCloseIcon}) {
    
    const [CART, setCART] = React.useState([])
    

    

    React.useEffect(() => {
        setCART(cart)
    }, [cart])
    // console.log(CART)
  return (
    
    
    <Modal  isOpen={isOpen} onClickCloseIcon={onClickCloseIcon}>
    <div>
        {
                CART?.map((cartItem, cartindex) => (
                        <div>
                            <Box position="relative" >
                                 <CardMedia sx={{ height: 100,  width:100 }} image={cartItem.image}  />
                                 <Typography variant="h6">{cartItem.title}</Typography>
                                <Typography variant="body1" color="text.secondary">
                                             {cartItem.price}
                                 </Typography>
                                 <AiFillMinusCircle  size={30} onClick={() => {
                                    
                                    // eslint-disable-next-line no-underscore-dangle
                                    const _CART = CART?.map((item, index) => cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item)
                                    setCART(_CART)
                                }} />
                                <span> {cartItem.quantity} </span>
                                <AiFillPlusCircle  size={30}  onClick={() => {
                                    
                                    // eslint-disable-next-line no-underscore-dangle
                                    const _CART = CART?.map((item, index) => cartindex === index ? { ...item, quantity: item.quantity + 1 } : item)
                                    setCART(_CART)
                                    
                                }} />
                            </Box>
                            
                            
                            <span> {cartItem.price}*{cartItem.quantity} </span>
                            <AiFillDelete size={30}/>
                        </div>
                    ))
            }

            <h1> Total  
                {
                    CART?.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                    
                }
                
            </h1>
            
            
    </div>
    <CommandeButton variant="contained" buttonText="Passer votre commande"/>
    </Modal>
  )
}

export default Basket
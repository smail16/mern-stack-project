/* eslint-disable react/button-has-type */
import { Box, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import { AiFillDelete, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeItem } from 'redux/cartSlice/cartSlice'


function BasketItem({article,id,quantity}) {
    console.log(article.image,'hello')
    const dispatch = useDispatch()
    
     
  return (
    <div>
        
       
          <Box position="relative"  display="flex">
          <Typography variant="h6">{article.title}</Typography>
          <CardMedia sx={{ height: 100,  width:100 }} image={article.image}  />
          
          <Typography variant="body1" color="text.secondary">
               {article.price}
          
          </Typography>
              <Grid sx={{display: 'flex'}}>
                <AiFillMinusCircle size={30} onClick={() => dispatch(decrementQuantity(article.id))}/>
                  <p style={{"padding-top":"10px"}}>{article.quantity}</p>
                <AiFillPlusCircle  size={30}onClick={() => dispatch(incrementQuantity(article.id))}/>
           
          
              </Grid>
              <AiFillDelete size={30} sx={{ml: 50}} onClick={() => dispatch(removeItem(article.id))}/>
          </Box>
    </div>
  )
}

export default BasketItem

 /* <div className="cartItem">
      <img className="cartItem__image" src={article.article.image} alt='item'/>
      <div className="cartItem__info">
        <p className="cartItem__title">{article.article.title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{article.article.price}</strong>
        </p>
        <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{article.quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
    </div> */
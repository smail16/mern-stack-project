/* eslint-disable react/button-has-type */
import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { AiFillDelete, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeItem } from 'redux/cartSlice/cartSlice'


function BasketItem({article,id, image, title, price, quantity=0}) {
    console.log(article)
    const dispatch = useDispatch()
    
     
  return (
    <div>
        
        {/* <div className="cartItem">
      <img className="cartItem__image" src={article.article.image} alt='item'/>
      <div className="cartItem__info">
        <p className="cartItem__title">{article.article.title}</p>
        <p className="cartItem__price">
          <small>$</small>
          <strong>{article.article.price}</strong>
        </p>
        <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
    </div> */}
                                <Box position="relative" >
                                 <CardMedia sx={{ height: 100,  width:100 }} image={article.article.image}  />
                                 <Typography variant="h6">{article.article.title}</Typography>
                                <Typography variant="body1" color="text.secondary">
                                             {article.article.price}
                                 </Typography>
                                 <AiFillMinusCircle size={30} onClick={() => dispatch(decrementQuantity(id))}/>
                                 <p>{article.quantity}</p>
                                 <AiFillPlusCircle  size={30}onClick={() => dispatch(incrementQuantity(id))}/>
                                 </Box>
                                 <AiFillDelete size={30} onClick={() => dispatch(removeItem(id))}/>
    </div>
  )
}

export default BasketItem
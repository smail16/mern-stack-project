/* eslint-disable react/button-has-type */
import { Box, CardMedia, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { AiFillDelete, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeItem } from 'redux/cartSlice/cartSlice'

function BasketItem({ article }) {
  const dispatch = useDispatch()

  return (
    <Box position="relative" display="flex">
      <img width={100} height="auto" src={article.image} alt="" />
      <Box width="100%" px={2} boxSizing="border-box">
        <Box display="flex" width="100%" justifyContent="space-between">
          <Typography variant="body1" fontWeight="bold">
            {article.title}
          </Typography>
          <AiFillDelete size={20} onClick={() => dispatch(removeItem(article.id))} />
        </Box>
        <Stack direction="row" spacing={1} mt={2} display="flex" alignItems="center">
          <AiFillMinusCircle size={30} onClick={() => dispatch(decrementQuantity(article.id))} />
          <p>{article.quantity}</p>
          <AiFillPlusCircle size={30} onClick={() => dispatch(incrementQuantity(article.id))} />
        </Stack>
        <Typography mt={2} color="text.secondary">
          {article.quantity}
        </Typography>
        <Typography mt={2} variant="body1" color="text.secondary">
          {article.price}
        </Typography>
      </Box>
    </Box>
  )
}

export default BasketItem

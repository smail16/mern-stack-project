import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { AiFillDelete, AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { decrementQuantity, incrementQuantity, removeItem } from 'redux/Slice/Slice'

function Recap({ article }) {
  const dispatch = useDispatch()
  return (
    <div>
      <Box position="relative" display="flex">
        <Box width="100%" px={2} boxSizing="border-box">
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            flex-direction="row"
            flex-wrap="wrap"
          >
            <img width={200} height="auto" src={article.images} alt="" />
            <Typography variant="h6" fontWeight="bold">
              {article.title}
            </Typography>
            <Typography variant="h6" mt={2}>
              Quantité: {article.selectedQuantity}
            </Typography>
            <Typography variant="body1" mt={2}>
              Taille: {article.selectedSize}
            </Typography>
            <Typography variant="body1" mt={2}>
              Prix :{article.price}€
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default Recap

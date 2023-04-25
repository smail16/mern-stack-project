import { Box, Typography } from '@mui/material'
import React from 'react'

import { useDispatch } from 'react-redux'


function Recap({ article }) {

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
            <Typography variant="body1" mt={2}>
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

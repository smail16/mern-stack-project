import { Box, Stack } from '@mui/material'
import Grid from '@mui/material/Grid'
import * as React from 'react'

import CardModel from '../card'

function CardListe({ articles, addToCart }) {
  return (
    <Grid container spacing={3}>
      {articles.map((article) => (
        <Grid item key={article.id} md={3}>
          <CardModel article={article} addToCart={addToCart}/>
        </Grid>
      ))}
    </Grid>
  )
}

export default CardListe

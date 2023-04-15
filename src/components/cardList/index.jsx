import { Box, Stack } from '@mui/material'
import Grid from '@mui/material/Grid'
import * as React from 'react'

import CardModel from '../card'

function CardListe({ articles }) {
  console.log(articles)
  return (
    <Grid container spacing={3}>
      {articles.map((article) => (
        <Grid item key={article.id} md={3}>
          <CardModel article={article} />
        </Grid>
      ))}
    </Grid>
  )
}

export default CardListe

import { Box, Stack } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Link } from 'design-system'
import * as React from 'react'

import CardModel from '../card'

function CardListe({ articles }) {
  return (
    <Grid container spacing={3}>
      {articles.map((article) => (
        <Grid item key={article.id} md={3}>
          <Link to={`/article/${article.id}`}>
            <CardModel article={article} />
          </Link>
        </Grid>
      ))}
    </Grid>
  )
}

export default CardListe

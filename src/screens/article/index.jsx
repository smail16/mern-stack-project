import { Box, Stack } from '@mui/material'
import { CardDetails, CardListe, CardModel, NavBar } from 'components'
import { SelectInput } from 'design-system'
import { articles } from 'mocks/articles'
import { sizes } from 'mocks/size'
import React from 'react'

function Article() {
  return (
    <Box>
      <NavBar />
      <SelectInput items={sizes} onChange={(value) => console.log(value)} />
    </Box>
  )
}

export default Article

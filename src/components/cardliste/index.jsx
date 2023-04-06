import { Box, Stack } from '@mui/material'
import * as React from 'react'

import CardModel from '../card'

function CardListe({ article }) {
  return (
    <div>
        
       <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around',flexWrap: 'wrap', mt:4 , gap:5}}>
                 {article.map((el) => (
                 <CardModel el={el} />
        ))}
        </Box>
    
    </div>
  )
}

export default CardListe

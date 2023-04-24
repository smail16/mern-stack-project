import { Box, Typography, useTheme } from '@mui/material'
import GirlImage from 'assets/girl.jpg'
import MenImage from 'assets/men.jpg'
import React from 'react'



import { Image } from './style'


function Home() {
  const theme = useTheme()

  return (
    <Box display="flex" overflow="hidden">
      <Image href="/homme" img={MenImage}>
        <Typography
          letterSpacing={20}
          textAlign="center"
          mt={6}
          variant="h4"
          color={theme.palette.white.main}
        >
          HOMME
        </Typography>
      </Image>
      <Image href="/femme" img={GirlImage}>
        <Typography
          letterSpacing={20}
          textAlign="center"
          mt={6}
          variant="h4"
          color={theme.palette.white.main}
        >
          FEMME
        </Typography>
      </Image>
    </Box>
      
  )
}

export default Home

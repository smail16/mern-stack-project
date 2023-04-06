import { Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

function CardModel({ title, price, image, isFavourite, el }) {
  return (
    <div>

    <Card className="mb-4 rounded" variant="outlined" sx={{ width: 300, borderRadius: '16px', cursor: 'pointer' }}>
      <Box position="relative">
        <CardMedia sx={{ height: 320 }} image={el.image} title={el.title} />
        <Box top={3} right={4} bgcolor="#FFFFFF" borderRadius={20} p="0.25" position="absolute">
          <IconButton color="primary">
            {el.isFavourite ? <AiFillHeart /> : <AiOutlineHeart />}
          </IconButton>
        </Box>
      </Box>
      <CardContent>
        <Typography variant="h6">{el.title}</Typography>
        <Typography variant="body1" color="text.secondary">
          {el.price}
        </Typography>
      </CardContent>
    </Card>
    </div>


  )
}
export default CardModel

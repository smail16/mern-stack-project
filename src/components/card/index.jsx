import { Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import * as React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

function CardModel({ article }) {
  return (
    <div>
      <Card
        className="mb-4 rounded"
        variant="outlined"
        sx={{ borderRadius: '16px', cursor: 'pointer' }}
      >
        <Box position="relative">
          <CardMedia sx={{ height: 320 }} image={article.image} title={article.title} />
          <Box top={3} right={4} bgcolor="#FFFFFF" borderRadius={20} p="0.25" position="absolute">
            <IconButton color="primary">
              {article.isFavourite ? <AiFillHeart /> : <AiOutlineHeart />}
            </IconButton>
          </Box>
        </Box>
        <CardContent>
          <Typography variant="h6">{article.title}</Typography>
          <Typography variant="body1" color="text.secondary">
            {article.price}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
export default CardModel

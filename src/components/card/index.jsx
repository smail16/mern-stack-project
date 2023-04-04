import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import * as React from 'react'

function CardModel() {
  return (
    <Card sx={{ maxWidth: 320, borderRadius: '16px' }}>
      <CardMedia
        sx={{ height: 400 }}
        image="https://contents.mediadecathlon.com/p2073348/k$1c0d555588837c40b5412a7eaf8f715b/t-shirt-slim-500-homme-blanc.jpg?format=auto&quality=40&f=800x800"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" align="center">
          <h3>title</h3>
          <strong>
            <p>price : 109$</p>
          </strong>
        </Typography>
      </CardContent>
    </Card>
  )
}
export default CardModel

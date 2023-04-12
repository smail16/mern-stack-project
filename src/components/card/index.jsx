import { Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Button as PanierButton, SelectInput } from 'design-system'
import * as React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { addToCart } from 'redux/cartSlice/cartSlice'
import { sizes } from 'mocks/size'

function CardModel({ article }) {
  const dispatch = useDispatch()
  const [isDisabled, setisDisabled] = React.useState(true)
  
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
          <PanierButton disabled={isDisabled} variant="contained" buttonText="Ajouter au panier" onClick={() => dispatch(addToCart({ article }))
        } /> 
         <SelectInput items={sizes} sx={{mt:4}} label="Veuillez choisir votre taille" onChange={(value) => setisDisabled(false)} />
            
        </CardContent>
      </Card>
    </div>
  )
}
export default CardModel

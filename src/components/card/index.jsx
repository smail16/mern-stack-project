import { Box } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { Button as PanierButton, SelectInput } from 'design-system'
import { articles } from 'mocks/articles'
import { sizes } from 'mocks/size'
import * as React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { ToogleLike, addToCart } from 'redux/Slice/Slice'

function CardModel({ article }) {
  const cart = useSelector((state) => state.storeReducer.cart)
  // console.log(cart,'cart')
  const dispatch = useDispatch()
  // const handleClick = () => {
  //   dispatch(addLike(article.id))
  // }

  // const [isFavourite, setIsFavourite] = React.useState(false)
  // const handleClick = (id) => {
  //   setIsFavourite(!isFavourite)
  //   const update = articles.findIndex(obj=>obj.id===id)
  //   articles[update].isFavourite=!articles[update].isFavourite
  // console.log(update,'up')
  // }

  const [isDisabled, setisDisabled] = React.useState(true)

  return (
    <div>
      
      <Card
        className="mb-4 rounded"
        variant="outlined"
        sx={{ borderRadius: '16px', cursor: 'pointer' }}
      >
        <Box position="relative">
          <CardMedia sx={{ height: 320 }} image={article.images[0]} title={article.title} />
          <Box top={3} right={4} bgcolor="#FFFFFF" borderRadius={20} p="0.25" position="absolute">
            <IconButton color="primary" onClick={() => dispatch(ToogleLike({ article }))}>
              {article.isFavourite ? <AiFillHeart /> : <AiOutlineHeart />}
            </IconButton>
          </Box>
        </Box>
        <CardContent>
          <Typography variant="h6">{article.title}</Typography>
          <Typography variant="body1" color="text.secondary">
            {article.price}€
          </Typography>
          {/* <PanierButton disabled={isDisabled} variant="contained" buttonText="Ajouter au panier" onClick={() => dispatch(addToCart({ article }))
        } /> 
         <SelectInput items={sizes} sx={{mt:4}} label="Veuillez choisir votre taille" onChange={(value) => setisDisabled(false)} /> */}
        </CardContent>
      </Card>
    </div>
  )
}
export default CardModel

/* eslint-disable import/no-unresolved */
import { Box, Button, Stack, Typography, styled, useTheme } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { CardDetails, CardModel, NavBar } from 'components'
import { Button as PanierButton, SelectInput } from 'design-system'
import { images } from 'mocks/images'
import React, { useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { ToogleLike, addToCart } from 'redux/Slice/Slice'
import { Navigation, Pagination } from 'swiper'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

const Caroussel = styled(Swiper)(({ theme }) => ({
  height: '600px',
  borderRadius: '20px',
  width: '100%',

  [theme.breakpoints.down('md')]: {
    width: '50%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '80%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  },
}))

function Article({ id }) {
  const theme = useTheme()

  const cart = useSelector((state) => state.storeReducer.cart)
  const products = useSelector((state) => state.storeReducer.products)
  const isAuth = useSelector((state) => state.reducer.isAuth)
  // const [isDisabled, setisDisabled] = React.useState(true)
  const [selectedSize, setSelectedSize] = React.useState(null)
  const [selectedQuantity, setSelectedQuantity] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [article, setArticle] = React.useState(null)
  const [cartArticle, setCartArticle] = useState(null)
  const params = useParams()
  const dispatch = useDispatch()
  React.useEffect(() => {
    setArticle(products.filter((prod) => prod.id === params.id)[0])
  }, products)

  // const handleAddToCart = () => {
  //   setIsLoading(true)
  //   if (selectedSize && selectedQuantity && article) {
  //     dispatch(addToCart({ ...article, selectedSize, selectedQuantity }))
  //     setIsLoading(false)
  //   }
  //   setIsLoading(false)
  // }
  const handleAddToCart = () => {
    setIsLoading(true)
  
    if (isAuth) {
      if (selectedSize && selectedQuantity && article) {
        dispatch(addToCart({ ...article, selectedSize, selectedQuantity }))
        setIsLoading(false)
      }
    } else {
      // Afficher un rappel pour se connecter ou s'inscrire
      alert("Veuillez vous connecter ou vous inscrire pour ajouter un article au panier!")
    }
  
    setIsLoading(false)
  }

  const getQuantity = () => {
    const quantityMax = article.sizes.filter((el) => el.size === selectedSize)[0]?.quantity
    const QuantityArr = []
    for (let i = 1; i < quantityMax + 1; i += 1) {
      QuantityArr.push({ value: i, label: i, id: i })
    }
    return QuantityArr
  }
  if (article) {
    return (
      <Container>
        <Grid container spacing={2} justifyContent="space-between" py={2}>
          <Grid item md={4} display="flex" justifyContent="center" width="100%">
            <Caroussel
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {article.images?.map((image) => (
                <SwiperSlide>
                  <img
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    src={image}
                    alt=""
                  />
                </SwiperSlide>
              ))}
            </Caroussel>
          </Grid>
          <Grid item md={6}>
            <Box>
              <Typography variant="h4" fontWeight="bold">
                {article.title}
              </Typography>
            </Box>
            <Typography mt={4} variant="h6">
              {article.price} €
            </Typography>
            <Stack direction="row" spacing={3} mt={4}>
              <SelectInput
                items={article.sizes.map((el, i) => ({ value: el.size, label: el.size, id: i }))}
                label="Taille"
                onChange={(value) => {
                  setSelectedSize(value)
                }}
              />
              <SelectInput
                label="Quantité"
                items={getQuantity()}
                onChange={(value) => setSelectedQuantity(value)}
                disabled={!selectedSize}
              />
            </Stack>
            <Stack direction="row" spacing={3} mt={4}>
              <PanierButton
                disabled={!selectedQuantity || !selectedSize}
                isLoading={isLoading}
                variant="contained"
                fullWidth
                buttonText="Ajouter au panier"
                onClick={() => handleAddToCart()}
              />
              *
              <Button
                variant="outlined"
                color="primary"
                onClick={() => dispatch(ToogleLike({ article }))}
              >
                {article.isFavourite ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
              </Button>
            </Stack>

            <Typography mt={4} variant="body2">
              {article.description ? article.description : ''}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default Article

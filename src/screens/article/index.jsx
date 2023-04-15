/* eslint-disable import/no-unresolved */
import { Box, Button, Stack, Typography, styled, useTheme } from '@mui/material'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { CardDetails, CardModel, NavBar } from 'components'
import { Button as PanierButton, SelectInput } from 'design-system'
// import { article } from 'mocks/article'
// import { articles } from 'mocks/articles'
import { images } from 'mocks/images'
import { quantity } from 'mocks/quantity'
import { sizes } from 'mocks/size'
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

  const cart = useSelector((state) => state.cart)
  const products = useSelector((state) => state.products)

  // const [isDisabled, setisDisabled] = React.useState(true)
  const [selectedSize, setSelectedSize] = React.useState('')
  const [selectedQuantity, setSelectedQuantity] = React.useState('')
  const [article, setArticle] = React.useState(null)
  const params = useParams()
  React.useEffect(() => {
    setArticle(products.filter((prod) => prod.id === params.id)[0])
  }, products)
  // const handleAddToCart= ()=>{
  //   const product={ selectedSize,selectedQuantity }
  // }
  const [itemWithSizeAndQuantite, setItemWithSizeAndQuantite] = useState({ size: '' , quantity:'0', article:products.filter((prod) => prod.id === params.id)[0]})

  const handelChangeSize = (value)=>{
    setSelectedSize(value)
    setItemWithSizeAndQuantite((prevState) => ({ ...prevState, size: value  }))
                  console.log(itemWithSizeAndQuantite,'aaaaaaaaaaaaaaaa')
  }
  const handelChangeQuantity = (value)=>{
    setSelectedQuantity(value)
    setItemWithSizeAndQuantite((prevState) => ({ ...prevState, quantity: value  }))
                  console.log(itemWithSizeAndQuantite,'aaaaaaaaaaaaaaaa')
  }

  const dispatch = useDispatch()
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
              {article.price}
            </Typography>
            <Stack direction="row" spacing={3} mt={4}>
              <SelectInput
                items={sizes}
                label="Taille"
                onChange={(value) =>{handelChangeSize(value)}
                  
                }
              />
              <SelectInput
                label="Quantité"
                items={quantity}
                onChange={(value) => handelChangeQuantity(value)}
              />
            </Stack>
            <Stack direction="row" spacing={3} mt={4}>
              <PanierButton
                disabled={!selectedQuantity || !selectedSize}
                variant="contained"
                fullWidth
                buttonText="Ajouter au panier"
                onClick={() => dispatch(addToCart({ itemWithSizeAndQuantite }))}
              />

              <Button
                variant="outlined"
                color="primary"
                onClick={() => dispatch(ToogleLike({ article }))}
              >
                {article.isFavourite ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
              </Button>
            </Stack>

            <Typography mt={4} variant="body2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore sequi quaerat nobis
              dolor. Consequuntur modi velit aliquid, nisi quibusdam blanditiis asperiores facilis
              obcaecati dolorum autem. In doloribus molestias commodi optio.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    )
  }
}

export default Article

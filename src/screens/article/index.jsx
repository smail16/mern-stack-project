import { Box, Button, FormControl, IconButton, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { CardDetails, CardModel, NavBar } from 'components'
import { Button as PanierButton, SelectInput } from 'design-system'
import { articles } from 'mocks/articles'
import { images } from 'mocks/images'
import { sizes } from 'mocks/size'
import React, { useState } from 'react'
import { AiFillHeart, AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import './index.css'
import { quantity } from 'mocks/quantity'

function Article() {
  // const [age, setAge] = React.useState('')
  const [currImg, setCurrImg] = useState(0)
  // const handleChange = (event) => {
  //   setAge(event.target.value)
  // }
  function handlePrevClick() {
    if (currImg > 0) {
      setCurrImg(currImg - 1)
    }
  }
  function handleFutClick() {
    if (currImg < images.length - 1) {
      setCurrImg(currImg + 1)
    }
  }

  return (
    <Box>
      
      <div className="all" style={{ display: 'flex', 'margin-top': '50px' }}>
        <div className="carousel">
          <div className="carouselInner" style={{ backgroundImage: `url(${images[currImg].img})` }}>
            <div className="left">
            <AiOutlineArrowLeft
                onClick={() => {
                  handlePrevClick()
                }}
                style={{ fontSize: 30 }}
              />
            </div>

            <div className="right">
              <AiOutlineArrowRight
                style={{ fontSize: 30 }}
                onClick={() => {
                  handleFutClick()
                }}
              />
            </div>
          </div>
        </div>

        <div className="body-right" style={{ 'margin-left': '100px', width: '500px' }}>
          <div className="description">
            <Box
              sx={{ display: 'flex', 'flex-direction': 'row', 'justify-content': 'space-between' }}
            >
              <h1>CHEMISE MANCHES LONGUES RUSTIQUE</h1>
              <IconButton color="primary" width={100}>
                <AiFillHeart />
              </IconButton>
            </Box>
            <h2>29,99 € </h2>
          </div>
          <div style={{ 'margin-top': '80px' }}>
          
            <SelectInput items={sizes} onChange={(value) => console.log(value)} />
          </div>
          <div
            className="achat"
            style={{
              display: 'flex',
              'flex-direction': 'column',
              'align-items': 'stretch',
              'margin-top': '45px',
            }}
          >
            <SelectInput items={quantity}/>
            {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
            </FormControl> */}
            <PanierButton variant="contained" buttonText="Ajouter au panier">
              {' '}
            </PanierButton>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore sequi quaerat nobis
              dolor. Consequuntur modi velit aliquid, nisi quibusdam blanditiis asperiores facilis
              obcaecati dolorum autem. In doloribus molestias commodi optio.
            </p>
          </div>
        </div>
      </div>
    </Box>
  )
}

export default Article

import {
  Box,
  Button, FormControl, IconButton, InputLabel, MenuItem, Select,
} from '@mui/material'
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import { CardDetails, CardModel, NavBar } from 'components'
import { Button as PanierButton, SelectInput } from 'design-system'
import { articles } from 'mocks/articles'
import { sizes } from 'mocks/size'
import React, { useState } from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { images } from 'mocks/images'
import './index.css' 

function Article() {
  const [age, setAge] = React.useState('')
  const [currImg, setCurrImg] = useState(0)
  const handleChange = (event) => {
    setAge(event.target.value)
  }
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
      <NavBar />
      
      
      <div className='all' style={{"display":"flex", "margin-top":"50px"}}>
          <div className='carousel'>
               <div className="carouselInner" style={{ backgroundImage: `url(${images[currImg].img})` }}>
                <div className='left'  >
                  <ArrowBackIosIcon onClick={() => {handlePrevClick()}} style={{ fontSize: 30 }}  />
                </div>
                
                <div className='right' >
                  <ArrowForwardIosIcon style={{ fontSize: 30 }} onClick={() => {handleFutClick()}} />
                </div>
              </div>
          </div>
          
          
          <div className='body-right' style={{"margin-left":"100px", "width":"500px"}}>  
                <div className="description">
                  <Box sx={{display:'flex',"flex-direction": "row","justify-content": "space-between"}}>
                  <h1>CHEMISE MANCHES LONGUES RUSTIQUE</h1>
                  <IconButton color="primary"><AiFillHeart /></IconButton> 
                  </Box>
                    <h2>29,99 € </h2>
                </div>
                <div style={{"margin-top":"80px"}}>
                <SelectInput items={sizes} onChange={(value) => console.log(value)} />
                </div>
                <div className="achat" style={{"display":"flex","flex-direction": "column","align-items":"stretch","margin-top":"45px"}}>
                  <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                      <InputLabel id="demo-simple-select-standard-label">Quantité</InputLabel>
                      <Select
                              labelId="demo-simple-select-standard-label"
                              id="demo-simple-select-standard"
                              value={age}
                              onChange={handleChange}
                              label="Age"
                            >
                              <MenuItem value="" />
                              <MenuItem value={1}>1</MenuItem>
                              <MenuItem value={2}>2</MenuItem>
                              <MenuItem value={3}>3</MenuItem>
                              <MenuItem value={4}>4</MenuItem>
                            </Select>
                   </FormControl>
                      <PanierButton variant="contained" buttonText="Ajouter au panier"> </PanierButton>
                </div>
                <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore sequi quaerat nobis dolor. Consequuntur modi velit aliquid, nisi quibusdam blanditiis asperiores facilis obcaecati dolorum autem. In doloribus molestias commodi optio.</p>
                
                </div>
              </div>
          </div>    
    </Box>
  )
}

export default Article

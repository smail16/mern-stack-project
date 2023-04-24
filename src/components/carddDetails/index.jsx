import * as React from 'react'
import { Button as PanierButton, SelectInput } from 'design-system'
import {
  Button, FormControl, IconButton, InputLabel, MenuItem, Select,
} from '@mui/material'

function CardDetails() {
  const [age, setAge] = React.useState('')

  const handleChange = (event) => {
    setAge(event.target.value)
  }
  return (
    
    <div>
      
      <div className="photos">
        <img src="https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_1_8.jpg?t=1679990119848&imwidth=1024" alt="img1" />
        <img src="https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_2_8.jpg?t=1679992571094&imwidth=1024" alt="img2" />
        <img src="https://static.pullandbear.net/2/photos//2023/V/0/2/p/4471/508/104/4471508104_2_3_8.jpg?t=1679990119848&imwidth=1024" alt="img3" />
      </div>
      <div className="description">
        <h1>Title</h1>
        <h2>Price</h2>
      </div>
      <div className="achat">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
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
        <IconButton color="primary" aria-label="add to shopping cart" />
      </div>
      <div className="description">
        <p>description</p>
      </div>
    </div>
  )
}

export default CardDetails

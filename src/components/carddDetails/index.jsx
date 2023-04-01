import * as React from 'react'

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
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
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
        <Button variant="contained"> Ajouter au panier</Button>
        <IconButton color="primary" aria-label="add to shopping cart" />
        {/* <h3>
          {' '}
          Lets go for a
          {' '}
          <ProductionQuantityLimitsIcon/>
          ?
          {' '}
        </h3> */}
      </div>
      <div className="description">
        <p>description</p>
      </div>
    </div>
  )
}

export default CardDetails

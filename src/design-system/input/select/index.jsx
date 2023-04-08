import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React from 'react'

function SelectInput({ label, errorText, onChange, value, type, items, ...props }) {
  return (
    <Select
      {...props}
      value={value}
      label={value}
      onChange={(event) => onChange(event.target.value)}
      sx={{mt:5,width: 500, height:40}}
      fullWidth
      error={!!errorText}
      helpertext={errorText}
      variant="outlined"
    >
      {items.map((item) => (
        <MenuItem key={item.id} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  )
}

export default SelectInput

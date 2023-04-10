import { TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import React from 'react'

function SelectInput({ label, errorText, onChange, value, type, items, ...props }) {
  return (
    <TextField
      {...props}
      label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      error={!!errorText}
      helperText={errorText}
      variant="outlined"
      fullWidth
      select
    >
      {items.map((item) => (
        <MenuItem key={item.id} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </TextField>
  )
}

export default SelectInput

import { Box } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import React, { ReactElement, useState } from 'react'

function SelectInput({ label, errorText, onChange, value, type, items, ...props }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Select
      {...props}
      value={value}
      label={label}
      onChange={(event) => onChange(event.target.value)}
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

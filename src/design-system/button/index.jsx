import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'

function ButtonEl({ variant, buttonText, disabled = false, onClick, type, ...props }) {
  return (
    <Button
      {...props}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      type={type}
      sx={{ boxShadow: 'none' }}
    >
      <Typography variant="caption">{buttonText}</Typography>
    </Button>
  )
}

export default ButtonEl

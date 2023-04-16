import { Typography } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'

function ButtonEl({ variant, buttonText, isLoading, onClick, type, ...props }) {
  return (
    <Button
      {...props}
      variant={variant}
      disabled={isLoading}
      onClick={onClick}
      type={type}
      sx={{ boxShadow: 'none' }}
    >
      <Typography variant="caption">{isLoading ? 'loading...' : buttonText}</Typography>
    </Button>
  )
}

export default ButtonEl

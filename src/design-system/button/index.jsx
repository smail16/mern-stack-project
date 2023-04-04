import Button from '@mui/material/Button'
import React from 'react'

function ButtonEl({ variant, buttonText, disabled = false, onClick, type }) {
  return (
    <Button
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      type={type}
      sx={{ boxShadow: 'none' }}
    >
      {buttonText}
    </Button>
  )
}

export default ButtonEl

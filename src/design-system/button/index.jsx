import React from 'react'
import Button from '@mui/material/Button'

function ButtonEl({ variant, buttonText, disabled = false }) {
  return (
    <Button variant={variant} disabled={disabled}>
      {buttonText}
    </Button>
  )
}

export default ButtonEl

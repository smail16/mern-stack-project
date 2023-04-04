import { Box } from '@mui/material'
import TextField from '@mui/material/TextField'
import React, { ReactElement, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

function TextInput({ label, errorText, onChange, value, type, ...props }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Box position="relative">
      <TextField
        {...props}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        label={label}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        error={!!errorText}
        helperText={errorText}
        variant="outlined"
        fullWidth
      />
      {type === 'password' && (
        <Box
          cursor="pointer"
          onClick={() => setShowPassword(!showPassword)}
          position="absolute"
          top={20}
          right={10}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </Box>
      )}
    </Box>
  )
}

export default TextInput

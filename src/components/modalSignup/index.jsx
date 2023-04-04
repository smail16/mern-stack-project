import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Typography } from '@mui/material'
import { Button, TextInput } from 'design-system'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

import Modal from '../modal'
import { schema } from './config'

function ModalSignup({ isOpen, onClickCloseIcon }) {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (data) => console.log(data)
  const onError = (data) => console.log(data)

  return (
    <Modal title="Se connecter" isOpen={isOpen} onClickCloseIcon={onClickCloseIcon}>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              type="email"
              label="email"
              value={field.value}
              onChange={field.onChange}
              errorText={fieldState.error?.message}
            />
          )}
        />
        <Box mt={2}>
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                type="password"
                label="mot de passe"
                value={field.value}
                onChange={field.onChange}
                errorText={fieldState.error?.message}
              />
            )}
          />
        </Box>

        <Box mt={2} display="flex" justifyContent="center">
          <Button type="submit" buttonText="se connecter" variant="contained" />
        </Box>
        <Typography variant="body1" align="center" mt={2}>
          Mot de passe oublié ?
        </Typography>
      </form>
    </Modal>
  )
}
export default ModalSignup

import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Typography } from '@mui/material'
import { Button, TextInput } from 'design-system'
import { useAuth } from 'hooks'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'

import Modal from '../modal'
import { schema } from './config'

function ModalSignup({ isOpen, onClickCloseIcon }) {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      address: '',
      zip: '',
      city: '',
    },
  })

  const { useRegisterUser } = useAuth()
  const { mutate: registerUser, isLoading } = useRegisterUser()

  const onSubmit = (data) => {
    registerUser(data)
  }

  return (
    <Modal title="S'inscrire" isOpen={isOpen} onClickCloseIcon={onClickCloseIcon}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="fullName"
          control={control}
          render={({ field, fieldState }) => (
            <TextInput
              type="text"
              label="Nom et Prénom"
              value={field.value}
              onChange={field.onChange}
              errorText={fieldState.error?.message}
            />
          )}
        />
        <Box mt={2}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                type="email"
                label="Email"
                value={field.value}
                onChange={field.onChange}
                errorText={fieldState.error?.message}
              />
            )}
          />
        </Box>
        <Box mt={2}>
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                type="password"
                label="Mot de passe"
                value={field.value}
                onChange={field.onChange}
                errorText={fieldState.error?.message}
              />
            )}
          />
        </Box>
        <Box mt={2}>
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                type="password"
                label="Confirmer mot de passe"
                value={field.value}
                onChange={field.onChange}
                errorText={fieldState.error?.message}
              />
            )}
          />
        </Box>
        <Box mt={2}>
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                type="text"
                label="Téléphone"
                value={field.value}
                onChange={field.onChange}
                errorText={fieldState.error?.message}
              />
            )}
          />
        </Box>
        <Box mt={2}>
          <Controller
            name="address"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                type="text"
                label="Adresse"
                value={field.value}
                onChange={field.onChange}
                errorText={fieldState.error?.message}
              />
            )}
          />
        </Box>
        <Box mt={2}>
          <Controller
            name="zip"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                type="text"
                label="Code postale"
                value={field.value}
                onChange={field.onChange}
                errorText={fieldState.error?.message}
              />
            )}
          />
        </Box>
        <Box mt={2}>
          <Controller
            name="city"
            control={control}
            render={({ field, fieldState }) => (
              <TextInput
                type="text"
                label="Ville"
                value={field.value}
                onChange={field.onChange}
                errorText={fieldState.error?.message}
              />
            )}
          />
        </Box>

        <Box mt={2} display="flex" justifyContent="center">
          <Button isLoading={isLoading} type="submit" buttonText="s'inscrire" variant="contained" />
        </Box>
      </form>
    </Modal>
  )
}
export default ModalSignup

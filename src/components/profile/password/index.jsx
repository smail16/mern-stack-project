import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Stack, Typography, styled } from '@mui/material'
import { Button, TextInput } from 'design-system'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { BsShieldLock } from 'react-icons/bs'

import { ButtonContainer, Section } from '../style'
import { schema } from './config'

function Password() {
  const [edit, setEdit] = useState(false)

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      oldPassword: '',
      password: '',
      confirmPassword: '',
    },
  })

  const handleEditMode = () => {
    setEdit(true)
  }

  const onSubmit = (data) => {
    setEdit(false)
    console.log(data)
  }

  const onError = (data) => console.log(data)

  return (
    <Section onSubmit={handleSubmit(onSubmit, onError)}>
      <Stack direction="row" spacing={2}>
        <BsShieldLock size={40} />
        <Box>
          {edit ? (
            <Stack spacing={2}>
              <Typography fontWeight="bold">Changer le mot de passe</Typography>
              <Controller
                name="oldPassword"
                control={control}
                render={({ field, fieldState }) => (
                  <TextInput
                    type="password"
                    label="Ancien mot de passe"
                    value={field.value}
                    onChange={field.onChange}
                    errorText={fieldState.error?.message}
                  />
                )}
              />
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
            </Stack>
          ) : (
            <>
              <Typography fontWeight="bold">Mot de passe</Typography>
              <Typography variant="body1">*****************</Typography>
            </>
          )}
        </Box>
      </Stack>
      <ButtonContainer>
        <Button
          variant="outlined"
          buttonText={edit ? 'Enregistrer' : 'Modifier'}
          onClick={edit ? handleSubmit(onSubmit, onError) : handleEditMode}
        />
      </ButtonContainer>
    </Section>
  )
}

export default Password

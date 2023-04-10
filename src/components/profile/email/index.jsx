import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Stack, Typography, styled } from '@mui/material'
import { Button, TextInput } from 'design-system'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { HiOutlineMail } from 'react-icons/hi'

import { ButtonContainer, Section } from '../style'
import { schema } from './config'

function Email() {
  const [edit, setEdit] = useState(false)

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
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
        <HiOutlineMail size={40} />
        <Box>
          {edit ? (
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight="bold">
                Changer l’adresse e-mail
              </Typography>
              <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                  <TextInput
                    type="email"
                    label="Adresse e-mail"
                    value={field.value}
                    onChange={field.onChange}
                    errorText={fieldState.error?.message}
                  />
                )}
              />
            </Stack>
          ) : (
            <>
              <Typography fontWeight="bold">Adresse e-mail</Typography>
              <Typography variant="body1">{control._formValues.email}</Typography>
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

export default Email

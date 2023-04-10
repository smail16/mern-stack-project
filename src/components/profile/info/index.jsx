import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Stack, Typography, styled } from '@mui/material'
import { Button, TextInput } from 'design-system'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { AiOutlineUser } from 'react-icons/ai'

import { ButtonContainer, Section } from '../style'
import { schema } from './config'

function Info() {
  const [edit, setEdit] = useState(false)

  const { handleSubmit, control } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: '',
      phone: '',
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
        <AiOutlineUser size={40} />
        <Box>
          {edit ? (
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight="bold">
                Mettre à jour vos coordonnées
              </Typography>
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

              <Controller
                name="phone"
                control={control}
                render={({ field, fieldState }) => (
                  <TextInput
                    label="Téléphone mobile"
                    value={field.value}
                    onChange={field.onChange}
                    errorText={fieldState.error?.message}
                  />
                )}
              />
            </Stack>
          ) : (
            <>
              <Typography fontWeight="bold" mt={2}>
                Nom
              </Typography>
              <Typography variant="body1">{control._formValues.fullName}</Typography>
              <Typography fontWeight="bold" mt={2}>
                Téléphone mobile
              </Typography>
              <Typography variant="body1">{control._formValues.phone}</Typography>
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

export default Info

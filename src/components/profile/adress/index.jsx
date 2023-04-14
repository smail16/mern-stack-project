import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Stack, Typography, styled } from '@mui/material'
import { Button, TextInput } from 'design-system'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { HiOutlineHome } from 'react-icons/hi'

import { ButtonContainer, Section } from '../style'
import { schema } from './config'

function Address({ address, onSave, onCancel, isNew = false }) {
  const [edit, setEdit] = useState(isNew)

  const { handleSubmit, control, reset } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      address: address?.address || '',
      zip: address?.zip || '',
      city: address?.city || '',
    },
  })

  const handleEditMode = () => {
    setEdit(true)
  }

  const onSubmit = (data) => {
    setEdit(false)
    console.log(data)
    onSave(data)
  }

  const onError = (data) => console.log(data)

  return (
    <Section onSubmit={handleSubmit(onSubmit, onError)}>
      <Stack direction="row" spacing={2}>
        <HiOutlineHome size={40} />
        <Box>
          {edit ? (
            <Stack spacing={2}>
              <Typography variant="h6" fontWeight="bold">
                {isNew ? 'Nouvelle adresse' : ' Changer votre adresse'}
              </Typography>
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
            </Stack>
          ) : (
            <Stack spacing={2}>
              <Typography fontWeight="bold">Adresse</Typography>
              <Typography variant="body1">{control._formValues.address}</Typography>
              <Stack direction="row" spacing={2}>
                <Stack spacing={2}>
                  <Typography fontWeight="bold">Code postale</Typography>
                  <Typography variant="body1">{control._formValues.zip}</Typography>
                </Stack>
                <Stack spacing={2}>
                  <Typography fontWeight="bold">Ville</Typography>
                  <Typography variant="body1">{control._formValues.city}</Typography>
                </Stack>
              </Stack>
            </Stack>
          )}
        </Box>
      </Stack>
      <ButtonContainer spacing={2} direction="row">
        {edit && (
          <Button
            variant="outlined"
            buttonText="Annuler"
            onClick={
              edit
                ? () => {
                    reset()
                    setEdit(false)
                  }
                : onCancel
            }
          />
        )}
        <Button
          variant="contained"
          buttonText={edit ? 'Enregistrer' : 'Modifier'}
          onClick={edit ? handleSubmit(onSubmit, onError) : handleEditMode}
        />
      </ButtonContainer>
    </Section>
  )
}

export default Address

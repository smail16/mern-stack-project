/* eslint-disable jsx-a11y/anchor-is-valid */
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Typography } from '@mui/material'
import axios from 'axios'
import { Button, TextInput } from 'design-system'
import { useLog } from 'hooks'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { Link } from 'react-router-dom'
// eslint-disable-next-line import/no-cycle
import { ModalSignup } from 'components'
import Modal from '../modal'
import { schema } from './config'

function ModalSignin({ isOpen, onClickCloseIcon }) {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { useLoginUser } = useLog()
  const { mutate: loginUser, isError } = useLoginUser(onClickCloseIcon)

  const onSubmit = (data) => {
    loginUser(data)
  }
  const onError = (data) => console.log(data)
  const [isSignupVisible, setIsSignupVisible] = useState(false)
  return (
    <>
    <ModalSignup isOpen={isSignupVisible} onClickCloseIcon={() => setIsSignupVisible(false)} />
    <Modal title="Se connecter" isOpen={isOpen} onClickCloseIcon={onClickCloseIcon}>
      {isError && (
        <Typography mb={2} textAlign="center" color="error">
          Veuillez vérifier vos coordoonnées
        </Typography>
      )}
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
        <Link onClick={() => setIsSignupVisible(true)} ><Typography  variant="body1" align="center" mt={2} style={{ textDecoration: 'none', color: 'black',  }}>
          S’inscrire
        </Typography></Link>
        <Typography variant="body1" align="center" mt={2}>
          Mot de passe oublié ?
        </Typography>
      </form>
    </Modal>
    </>
  )
}
export default ModalSignin

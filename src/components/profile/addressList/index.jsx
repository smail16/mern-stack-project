import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Stack, Typography, styled } from '@mui/material'
import { Button, TextInput } from 'design-system'
import { map } from 'lodash'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { HiOutlineHome } from 'react-icons/hi'

import Address from '../adress'
import { ButtonContainer, Section } from '../style'

function AdressList({ addresses }) {
  const [allAddresses, setAllAddresses] = useState(addresses)
  const [newAddress, setNewAddress] = useState(false)

  return (
    <Stack mt={2} spacing={2}>
      <Box width="100%" display="flex" justifyContent="flex-end">
        <Button onClick={() => setNewAddress(true)} variant="contained" buttonText="Ajouter" />
      </Box>
      {map(allAddresses, (address) => (
        <Address address={address} />
      ))}

      {newAddress && (
        <Address
          isNew
          address={newAddress}
          onCancel={() => {
            setNewAddress(false)
          }}
          onSave={(data) => {
            setNewAddress(false)
            setAllAddresses([...allAddresses, data])
          }}
        />
      )}
    </Stack>
  )
}

export default AdressList

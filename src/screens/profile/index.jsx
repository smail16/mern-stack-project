import { Box, Container, Tab, Tabs, useMediaQuery, useTheme } from '@mui/material'
import { AddressList, Email, Info, Password } from 'components'
import { addresses } from 'mocks/addresses'
import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function Profile() {
  const theme = useTheme()
  const [searchParams, setSearchParams] = useSearchParams()
  const [currentTab, setCurrentTab] = useState()
  const isMobile = useMediaQuery(theme.breakpoints.up('sm'))

  const Render = useCallback(() => {
    switch (currentTab) {
      case 'settings':
        return (
          <>
            <Info />
            <Email />
            <Password />
          </>
        )
      case 'address':
        return (
          <>
            <AddressList addresses={addresses} />
          </>
        )

      default:
        return <></>
    }
  }, [currentTab])

  useEffect(() => {
    setCurrentTab(searchParams.get('tab'))
  }, [searchParams])

  return (
    <Container maxWidth="md">
      <Box width="100%" borderBottom="1px solid" borderColor={theme.palette.grey.main}>
        <Tabs
          variant={isMobile ? 'standard' : 'scrollable'}
          centered
          allowScrollButtonsMobile
          scrollButtons
          value={currentTab}
          onChange={(_, value) => setSearchParams(`tab=${value}`)}
        >
          <Tab value="settings" label="Données personnelles" />
          <Tab value="address" label="Adresses" />
          <Tab value="order" label="Mes commandes" />
        </Tabs>
      </Box>
      <Render />
    </Container>
  )
}

export default Profile

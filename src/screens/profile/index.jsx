import { Box, Container, Tab, Tabs, useTheme } from '@mui/material'
import { Email, Info, Password } from 'components'
import React, { useCallback, useState } from 'react'

function Profile() {
  const theme = useTheme()
  const [currentTab, setCurrentTab] = useState('settings')

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

      default:
        return <></>
    }
  }, [currentTab])

  return (
    <Container maxWidth="md">
      <Box width="100%" borderBottom="1px solid" borderColor={theme.palette.grey.main}>
        <Tabs value={currentTab} onChange={(_, value) => setCurrentTab(value)} centered>
          <Tab value="settings" label="Données personnelles" />
          <Tab value="adress" label="Adresses" />
        </Tabs>
      </Box>
      <Render />
    </Container>
  )
}

export default Profile

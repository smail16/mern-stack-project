import { ThemeProvider } from '@mui/material/styles'
import { ModalSignin, ModalSignup, NavBar } from 'components'
import { theme } from 'config'
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Home } from 'screens'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<ModalSignin />} />
          <Route path="/signup" element={<ModalSignup />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

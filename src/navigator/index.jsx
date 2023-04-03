import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { theme } from 'config'
import { ThemeProvider } from '@mui/material/styles'
import { Home } from 'screens'
import {
  CardDetails, ModalSignin, ModalSignup, NavBar,
} from 'components'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar />
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

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { theme } from 'config'
import { ThemeProvider } from '@mui/material/styles'
import { Home } from 'screens'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

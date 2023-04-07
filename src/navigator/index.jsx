import { ThemeProvider } from '@mui/material/styles'
import { theme } from 'config'
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Article, Home } from 'screens'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Home />} />
          <Route path="/girl" element={<Home />} />
          <Route path="/kid" element={<Home />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/profile" element={<Home />} />
          <Route path="/orders" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

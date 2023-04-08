import { ThemeProvider } from '@mui/material/styles'
import { NavBar } from 'components'
import { theme } from 'config'
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Article, Base, Home, Men, Woman } from 'screens'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Base />}>
            <Route path="/men" element={<Men />} />
            <Route path="/woman" element={<Woman />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/profile" element={<Home />} />
            <Route path="/orders" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

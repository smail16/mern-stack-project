import { ThemeProvider } from '@mui/material/styles'
import { theme } from 'config'
import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Article, Base, Home, Men, Pay, Profile, Woman } from 'screens'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Base />}>
            <Route path="/homme" element={<Men />} />
            <Route path="/femme" element={<Woman />} />
            <Route path="/femme" element={<Woman />} />
            <Route path="/article/:id" element={<Article />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Home />} />
            <Route path="/pay" element={<Pay />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

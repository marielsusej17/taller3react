import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material'

import { Header } from './features/layout/components/Header'
import { Footer } from './features/layout/components/Footer'

const Content = lazy(() => import('./features/layout/components/Content').then(m => ({ default: m.Content })))
const Article = lazy(() => import('./features/view/Components/Article').then(m => ({ default: m.Article })))
const Offers = lazy(() => import('./features/view/Components/Offers').then(m => ({ default: m.Offers })))
const Myaccount = lazy(() => import('./features/auth/components/Myaccount'))
const Mybuys = lazy(() => import('./features/auth/components/Mybuys').then(m => ({ default: m.Mybuys })))
const Myfavorites = lazy(() => import('./features/auth/components/Myfavorites').then(m => ({ default: m.Myfavorites })))
const Mycart = lazy(() => import('./features/auth/components/Mycart').then(m => ({ default: m.Mycart })))

import { FavoriteProvider } from './features/view/hooks/useContext1'
import { CartProvider } from './features/view/hooks/useCartContext'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
      paper: '#111'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <CartProvider>
        <FavoriteProvider>

          <BrowserRouter>

            <Box
              sx={{
                width: '100%',
                minHeight: '100vh',
                bgcolor: '#000',
                overflowX: 'hidden'
              }}
            >

              <Header />

              <Suspense
                fallback={
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      minHeight: '60vh',
                      color: '#fff'
                    }}
                  >
                    Cargando...
                  </Box>
                }
              >
                <Routes>
                  <Route path='/' element={<Content />} />
                  <Route path='/articles' element={<Article />} />
                  <Route path='/offers' element={<Offers />} />
                  <Route path='/myaccount' element={<Myaccount />} />
                  <Route path='/mybuys' element={<Mybuys />} />
                  <Route path='/myfavorites' element={<Myfavorites />} />
                  <Route path='/cart' element={<Mycart />} />
                </Routes>
              </Suspense>

              <Footer />

            </Box>

          </BrowserRouter>

        </FavoriteProvider>
      </CartProvider>

    </ThemeProvider>
  )
}

export default App
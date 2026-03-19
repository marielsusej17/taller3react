import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import HomeIcon from '@mui/icons-material/Home'
import NewspaperIcon from '@mui/icons-material/Newspaper'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

import { AppBar, Button, Stack, Box, Toolbar, IconButton, Drawer } from '@mui/material'

export const Header = () => {

  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const navLinks = [
    { to: '/', icon: <HomeIcon />, label: 'Inicio' },
    { to: '/articles', icon: <NewspaperIcon />, label: 'Articulos' },
    { to: '/offers', icon: <LocalOfferIcon />, label: 'Ofertas' },
    { to: '/myaccount', icon: <AccountBoxIcon />, label: 'Mi Cuenta' },
    { to: '/myfavorites', icon: <BookmarkIcon />, label: 'Mis Favoritos' },
  ]

  const drawerContent = (
    <Stack direction="column" sx={{ p: 2 }}>
      {navLinks.map((link) => (
        <Button
          key={link.to}
          component={NavLink}
          to={link.to}
          startIcon={link.icon}
          aria-label={`Ir a ${link.label}`}
          sx={{
            color: '#000',
            justifyContent: 'flex-start',
            mb: 1,
            '&.active': {
              fontWeight: 'bold'
            }
          }}
          onClick={() => setMobileOpen(false)}
        >
          {link.label}
        </Button>
      ))}
    </Stack>
  )

  return (
    <AppBar
      position="fixed"
      sx={{
        background: '#000',
        boxShadow: 3,
        zIndex: 1300
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>

        {/* IZQUIERDA */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>

          <Box
            component={NavLink}
            to="/"
            aria-label="Ir al inicio"
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            <Box
              component="img"
              src="/img/descarga.webp"
              alt="Logo Parfum For You"
              sx={{ height: 50 }}
            />
          </Box>

          <Stack direction="row" sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {navLinks.map((link) => (
              <Button
                key={link.to}
                component={NavLink}
                to={link.to}
                startIcon={link.icon}
                aria-label={`Ir a ${link.label}`}
                sx={{
                  color: 'white',
                  whiteSpace: 'nowrap',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                {link.label}
              </Button>
            ))}
          </Stack>

        </Box>

        {/* DERECHA */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

          <Box
            component="form"
            role="search"
            sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}
          >
            <input
              type="search"
              placeholder="Buscar..."
              aria-label="Buscar productos"
              style={{
                padding: '8px 10px',
                borderRadius: '20px',
                border: '1px solid #333',
                outline: 'none',
                backgroundColor: '#eee'
              }}
            />

            <Button
              variant="contained"
              startIcon={<SearchIcon />}
              aria-label="Buscar"
              sx={{
                borderRadius: '20px',
                background: '#D4AF37',
                color: '#000',
                fontWeight: 'bold'
              }}
            >
              Buscar
            </Button>
          </Box>

          <IconButton
            component={NavLink}
            to="/cart"
            aria-label="Ir al carrito"
            sx={{ color: 'white', display: { xs: 'none', md: 'flex' } }}
          >
            <ShoppingCartIcon />
          </IconButton>

          <IconButton
            aria-label="Buscar"
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'white' }}
          >
            <SearchIcon />
          </IconButton>

          <IconButton
            component={NavLink}
            to="/cart"
            aria-label="Ir al carrito"
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'white' }}
          >
            <ShoppingCartIcon />
          </IconButton>

          <IconButton
            aria-label="Abrir menú"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'flex', md: 'none' }, color: 'white' }}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

        </Box>

      </Toolbar>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        role="navigation"
        sx={{ display: { xs: 'flex', md: 'none' } }}
      >
        {drawerContent}
      </Drawer>

    </AppBar>
  )
}
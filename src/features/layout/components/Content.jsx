import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import {
  Box,
  Typography,
  Button,
  Card,
  Grid,
  IconButton
} from '@mui/material'

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

export const Content = () => {

  const navigate = useNavigate()

  const [activeStep, setActiveStep] = useState(0)
  const [fade, setFade] = useState(true)

  const images = [
    {
      img: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de',
      title: 'Elegancia absoluta',
      desc: 'Fragancias que despiertan emociones'
    },
    {
      img: 'https://png.pngtree.com/thumb_back/fh260/background/20250709/pngtree-luxury-perfume-advertising-aromatic-fragrance-with-fresh-scent-for-women-image_17490453.webp',
      title: 'Lujo en cada detalle',
      desc: 'Perfumes diseñados para destacar'
    },
    {
      img: 'https://png.pngtree.com/thumb_back/fh260/background/20250308/pngtree-elegant-black-perfume-bottle-with-blurred-background-image_17080988.jpg',
      title: 'Tu esencia única',
      desc: 'Haz que te recuerden por tu aroma'
    }
  ]

  const maxSteps = images.length

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
      setTimeout(() => {
        setActiveStep((prev) => (prev + 1) % maxSteps)
        setFade(true)
      }, 400)
    }, 4500)

    return () => clearInterval(interval)
  }, [maxSteps])

  const handleNext = () => setActiveStep((prev) => (prev + 1) % maxSteps)
  const handleBack = () => setActiveStep((prev) => (prev - 1 + maxSteps) % maxSteps)

  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Parfum For You | Perfumes Exclusivos</title>
        <meta name="description" content="Descubre perfumes exclusivos de lujo. Fragancias elegantes para destacar tu estilo único." />
      </Helmet>

      <Box
        component="main"
        sx={{
          width: '100%',
          minHeight: '100vh',
          bgcolor: '#000',
          overflowX: 'hidden'
        }}
      >

        {/* HERO */}
        <Box
          component="section"
          aria-label="Carrusel de perfumes"
          sx={{
            position: 'relative',
            width: '100%',
            height: { xs: '70vh', md: '90vh' }
          }}
        >

          {/* Imagen */}
          <Box
            component="img"
            src={images[activeStep].img}
            alt={images[activeStep].title}
            loading="lazy"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: fade ? 1 : 0,
              transform: fade ? 'scale(1)' : 'scale(1.05)',
              transition: 'all 1s ease'
            }}
          />

          {/* Overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(100deg, rgba(0,0,0,0.85), rgba(0,0,0,0.3))',
              display: 'flex',
              alignItems: 'center',
              px: { xs: 3, md: 12 }
            }}
          >

            <Box
              sx={{
                color: '#fff',
                maxWidth: 600,
                transform: fade ? 'translateY(0)' : 'translateY(30px)',
                opacity: fade ? 1 : 0,
                transition: 'all 0.8s ease'
              }}
            >

              <Typography
                component="h1"
                sx={{
                  fontFamily: '"Playfair Display", serif',
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', md: '4.2rem' },
                  textTransform: 'uppercase'
                }}
              >
                {images[activeStep].title}
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  fontSize: '1.1rem',
                  opacity: 0.85,
                  textTransform: 'uppercase'
                }}
              >
                {images[activeStep].desc}
              </Typography>

              <Button
                onClick={() => navigate('/articles')}
                aria-label="Ir a comprar perfumes"
                sx={{
                  mt: 4,
                  px: 5,
                  py: 1.5,
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #FFD700, #C9A227)',
                  color: '#000',
                  fontWeight: 'bold'
                }}
              >
                COMPRAR AHORA
              </Button>

            </Box>
          </Box>

          {/* Flechas */}
          <IconButton onClick={handleBack} aria-label="Anterior"
            sx={{ position: 'absolute', top: '50%', left: 20, color: '#fff' }}>
            <KeyboardArrowLeft />
          </IconButton>

          <IconButton onClick={handleNext} aria-label="Siguiente"
            sx={{ position: 'absolute', top: '50%', right: 20, color: '#fff' }}>
            <KeyboardArrowRight />
          </IconButton>

        </Box>

        {/* TITULO */}
        <Box component="section" sx={{ textAlign: 'center', py: 8 }}>
          <Typography component="h2" variant="h4" sx={{ fontWeight: 700, color: '#fff' }}>
            COLECCIÓN EXCLUSIVA
          </Typography>

          <Typography sx={{ mt: 1, color: '#aaa' }}>
            PERFUMES DISEÑADOS PARA IMPRESIONAR
          </Typography>
        </Box>

        {/* CARDS */}
        <Grid container spacing={5} sx={{ px: 5, pb: 8 }}>
          {['/img/7.webp','/img/8.webp','/img/9.webp'].map((img, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>

              <Card
                sx={{
                  height: 380,
                  borderRadius: 6,
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >

                <Box
                  component="img"
                  src={img}
                  alt={`Perfume ${i + 1}`}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
                  }}
                />

                <Box sx={{ position: 'absolute', bottom: 20, left: 20 }}>
                  <Typography sx={{ color: '#fff' }}>
                    PERFUME LUXURY
                  </Typography>

                  <Button
                    onClick={() => navigate('/articles')}
                    aria-label="Ver producto"
                    sx={{
                      mt: 2,
                      border: '1px solid #fff',
                      color: '#fff'
                    }}
                  >
                    VER PRODUCTO
                  </Button>
                </Box>

              </Card>

            </Grid>
          ))}
        </Grid>

      </Box>
    </>
  )
}
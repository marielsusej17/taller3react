import React, { useRef } from 'react'
import { UseStatecolor } from '../hooks/useState'
import { UseContext } from '../hooks/useContext'
import { UseReducerList } from '../hooks/useReducer'
import { UseEffectCounter } from '../hooks/useEffect'
import { UseRefPreviousValue } from '../hooks/useRef'
import { StatusBar } from '../hooks/useOnlineStatus'

import {
  Box,
  Card,
  CardContent,
  Typography,
  IconButton
} from '@mui/material'

import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'

export const Offers = () => {

  const scrollRef = useRef(null)

  const perfumes = [
    { img: "/img/1.webp", name: "DIOR SAUVAGE", price: "$359.900" },
    { img: "/img/2.webp", name: "CHANEL N°5", price: "$429.000" },
    { img: "/img/3.webp", name: "VERSACE EROS", price: "$315.500" },
    { img: "/img/4.webp", name: "ONE MILLION", price: "$298.600" },
    { img: "/img/5.webp", name: "212 VIP", price: "$389.000" },
    { img: "/img/6.webp", name: "LE MALE", price: "$275.900" },
    { img: "/img/7.webp", name: "BLACK OPIUM", price: "$410.000" },
  { img: "/img/8.webp", name: "ACQUA DI GIO", price: "$365.000" },
  { img: "/img/9.webp", name: "BLEU DE CHANEL", price: "$450.000" }
  ]

  const scroll = (direction) => {
    const container = scrollRef.current
    const amount = 300

    if (direction === "left") {
      container.scrollLeft -= amount
    } else {
      container.scrollLeft += amount
    }
  }

  return (
    <Box sx={{ mt: 10, px: 3 }}>

      
      <Box sx={{ mb: 6 }}>

        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            mb: 3,
            fontWeight: "bold"
          }}
        >
          Los más vendidos
        </Typography>

        <Box sx={{ position: "relative" }}>

          
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              position: "absolute",
              top: "40%",
              left: 0,
              zIndex: 2,
              bgcolor: "#ff6f00",
              color: "#fff",
              "&:hover": { bgcolor: "#ff8f00" }
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>

        
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: 4,
              overflowX: "auto",
              scrollBehavior: "smooth",
              px: 6,
              "&::-webkit-scrollbar": { display: "none" }
            }}
          >

            {perfumes.map((item, i) => (
              <Box key={i} sx={{ minWidth: 160 }}>

                <Box
                  component="img"
                  src={item.img}
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 2,
                    transition: "0.3s",
                    "&:hover": {
                      transform: "scale(1.05)"
                    }
                  }}
                />

                <Typography sx={{ mt: 1, fontWeight: 600 }}>
                  {item.name}
                </Typography>

                <Typography sx={{ color: "#777" }}>
                  {item.price}
                </Typography>

              </Box>
            ))}

          </Box>

          <IconButton
            onClick={() => scroll("right")}
            sx={{
              position: "absolute",
              top: "40%",
              right: 0,
              zIndex: 2,
              bgcolor: "#ff6f00",
              color: "#fff",
              "&:hover": { bgcolor: "#ff8f00" }
            }}
          >
            <KeyboardArrowRight />
          </IconButton>

        </Box>

      </Box>

      
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
        }}
      >
        <Card sx={{ width: "100%", maxWidth: 600 }}>
          <CardContent>
            <UseStatecolor />
          </CardContent>
        </Card>

        <Card sx={{ width: "100%", maxWidth: 600 }}>
          <CardContent>
            <UseContext />
          </CardContent>
        </Card>

        <Card sx={{ width: "100%", maxWidth: 600 }}>
          <CardContent>
            <UseReducerList />
          </CardContent>
        </Card>

        <Card sx={{ width: "100%", maxWidth: 600 }}>
          <CardContent>
            <UseEffectCounter />
          </CardContent>
        </Card>

        <Card sx={{ width: "100%", maxWidth: 600 }}>
          <CardContent>
            <UseRefPreviousValue />
          </CardContent>
        </Card>

        <Card sx={{ width: "100%", maxWidth: 600 }}>
          <CardContent>
            <StatusBar />
          </CardContent>
        </Card>
      </Box>

    </Box>
  )
}
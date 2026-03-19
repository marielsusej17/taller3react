import React, { useContext } from "react"
import { FavoriteContext } from "../hooks/useContext1"
import { CartContext } from "../hooks/useCartContext"

import { Grid } from "@mui/material"
import {
  Box,
  Typography,
  Button,
  CardMedia,
  Card,
  CardContent,
  CardActions,
  Chip
} from "@mui/material"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import FavoriteIcon from "@mui/icons-material/Favorite"

const ProductCard = ({ product }) => {

  const { favorites, addFavorite, removeFavorite } = useContext(FavoriteContext)
  const { addToCart } = useContext(CartContext)

  const isFavorite = favorites.some(item => item.id === product.id)

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(product.id)
    } else {
      addFavorite(product)
    }
  }

  const handleAddCart = () => {
    addToCart(product)
  }

  return (

    <Card
      sx={{
        width: 320,
        height: 440,
        display: "flex",
        flexDirection: "column",
        borderRadius: 5,
        border: "1.5px solid #D4AF37",
        overflow: "hidden",
        background: "#0f0f0f",
        boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
        transition: "all .35s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 25px 60px rgba(0,0,0,0.9)"
        }
      }}
    >

      <Box sx={{ position: "relative", overflow: "hidden" }}>

        <CardMedia
          component="img"
          image={product.image}
          alt={product.title}
          sx={{
            height: 200,
            objectFit: "cover",
            transition: "transform .5s",
            "&:hover": {
              transform: "scale(1.1)"
            }
          }}
        />

        {product.badge && (
          <Chip
            label={product.badge}
            size="small"
            sx={{
              position: "absolute",
              top: 12,
              right: 12,
              backgroundColor: "#000",
              color: "#fff",
              fontWeight: 600
            }}
          />
        )}

      </Box>

      <CardContent sx={{ flexGrow: 1, px: 2.5 }}>

        <Typography
          variant="overline"
          sx={{ color: "#aaa", letterSpacing: 2, fontSize: 11 }}
        >
          {product.category}
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            lineHeight: 1.3,
            mb: 1,
            color: "#fff",
            fontFamily: "'Playfair Display', serif"
          }}
        >
          {product.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#bbb", fontSize: 13, lineHeight: 1.6, mb: 2 }}
        >
          {product.description}
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            color: "#D4AF37"
          }}
        >
          $ {product.price.toLocaleString()}
        </Typography>

      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, gap: 1 }}>

        <Button
          variant="contained"
          startIcon={<ShoppingCartIcon />}
          onClick={handleAddCart}
          sx={{
            flex: 1,
            borderRadius: 2,
            textTransform: "uppercase",
            fontWeight: 600,
            background: "linear-gradient(135deg, #FFD700, #C9A227)",
            color: "#000",
            "&:hover": {
              background: "linear-gradient(135deg, #FFE066, #D4AF37)"
            }
          }}
        >
          Comprar
        </Button>

        <Button
          onClick={handleFavorite}
          sx={{
            minWidth: 45,
            height: 45,
            borderRadius: "50%",
            backgroundColor: "#1a1a1a",
            color: isFavorite ? "#e53935" : "#aaa",
            "&:hover": {
              backgroundColor: "#2a2a2a"
            }
          }}
        >
          {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </Button>

      </CardActions>

    </Card>
  )
}

export const Article = () => {

  const productos = [
    { id: 1, image: "/img/1.webp", title: "Dior Sauvage", category: "Perfumes", description: "Fragancia fresca y especiada con notas de bergamota y ambroxan.", price: 359900 },
    { id: 2, image: "/img/2.webp", title: "Chanel No. 5", category: "Perfumes", description: "Aroma floral clásico con un toque elegante y atemporal.", price: 429000 },
    { id: 3, image: "/img/3.webp", title: "Versace Eros", category: "Perfumes", description: "Fragancia intensa con notas de menta, vainilla y madera.", price: 315500 },
    { id: 4, image: "/img/4.webp", title: "1 Million", category: "Perfumes", description: "Aroma dulce y especiado con un toque de cuero y ámbar.", price: 298600 },
    { id: 5, image: "/img/5.webp", title: "212 VIP", category: "Perfumes", description: "Fragancia moderna, fresca y sofisticada.", price: 389000 },
    { id: 6, image: "/img/6.webp", title: "Le Male", category: "Perfumes", description: "Aroma masculino con lavanda, vainilla y menta.", price: 275900 }
  ]

  return (

    <Box
      sx={{
        pt: 14,
        px: 6,
        pb: 6,
        background: "#000",
        minHeight: "100vh"
      }}
    >

      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          mb: 6,
          fontWeight: 600,
          color: "#fff",
          fontFamily: "'Playfair Display', serif"
        }}
      >
        PERFUMES EXCLUSIVOS
      </Typography>

      <Grid container spacing={6} justifyContent="center">

        {productos.map((producto) => (

          <Grid
            key={producto.id}
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <ProductCard product={producto} />
          </Grid>

        ))}

      </Grid>

    </Box>
  )
}
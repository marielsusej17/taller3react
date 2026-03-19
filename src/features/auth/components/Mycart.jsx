import React, { useContext } from "react"
import { CartContext } from "../../view/hooks/useCartContext"
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack
} from "@mui/material"

export const Mycart = () => {

  const { cart, removeFromCart } = useContext(CartContext)

  return (

    <Box
      sx={{
        pt: 12,
        px: 5,
        minHeight: "100vh",
        background: "#000",
        color: "#fff"
      }}
    >

      <Typography
        variant="h4"
        sx={{ mb: 4, textAlign: "center" }}
      >
        🛒 MIS COMPRAS
      </Typography>

      {cart.length === 0 ? (
        <Typography textAlign="center">
          No tienes productos en el carrito
        </Typography>
      ) : (

        <Stack spacing={3} alignItems="center">

          {cart.map((item) => (

            <Card
              key={item.id}
              sx={{
                width: 600,
                display: "flex",
                background: "#111",
                border: "1px solid #D4AF37",
                borderRadius: 3
              }}
            >

              <CardMedia
                component="img"
                image={item.image}
                sx={{ width: 150 }}
              />

              <CardContent sx={{ flex: 1 }}>

                <Typography variant="h6">
                  {item.title}
                </Typography>

                <Typography sx={{ color: "#aaa" }}>
                  {item.description}
                </Typography>

                <Typography
                  sx={{
                    color: "#D4AF37",
                    fontWeight: "bold",
                    mt: 1
                  }}
                >
                  $ {item.price.toLocaleString()}
                </Typography>

                <Button
                  color="error"
                  onClick={() => removeFromCart(item.id)}
                  sx={{ mt: 2 }}
                >
                  Eliminar
                </Button>

              </CardContent>

            </Card>

          ))}

        </Stack>
      )}

    </Box>
  )
}
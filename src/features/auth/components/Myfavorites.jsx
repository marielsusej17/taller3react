import { useContext } from "react";
import { FavoriteContext } from "../../view/hooks/useContext1";

import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia
} from "@mui/material";

export const Myfavorites = () => {

  const { favorites } = useContext(FavoriteContext);

  return (
    <Box
      sx={{
        pt: 14,
        px: 5,
        pb: 6,
        minHeight: "100vh",
        background: "#000"
      }}
    >

      <Typography
        variant="h4"
        sx={{
          mb: 5,
          textAlign: "center",
          color: "#fff",
          fontWeight: 600,
          fontFamily: "'Playfair Display', serif",
          letterSpacing: 2,
          textTransform: "uppercase"
        }}
      >
        MIS FAVORITOS
      </Typography>

      {favorites.length === 0 && (
        <Typography
          sx={{
            color: "#aaa",
            textAlign: "center"
          }}
        >
          NO TIENES PRODUCTOS FAVORITOS
        </Typography>
      )}

      <Grid container spacing={4} justifyContent="center">

        {favorites.map((item) => (

          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={item.id}
            sx={{ display: "flex", justifyContent: "center" }}
          >

            <Card
              sx={{
                width: 300,
                height: 420,
                display: "flex",
                flexDirection: "column",
                borderRadius: 4,
                overflow: "hidden",
                background: "#111",
                border: "1px solid #D4AF37",
                boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                transition: "0.3s",

                "&:hover": {
                  transform: "translateY(-10px)",
                  boxShadow: "0 20px 50px rgba(0,0,0,0.9)"
                }
              }}
            >

              <CardMedia
                component="img"
                image={item.image}
                alt={item.title}
                sx={{
                  height: 200,
                  objectFit: "cover"
                }}
              />

              <CardContent sx={{ flexGrow: 1 }}>

                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontWeight: 600,
                    textTransform: "uppercase"
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#aaa",
                    fontSize: 13,
                    mb: 1
                  }}
                >
                  {item.category}
                </Typography>

                <Typography
                  sx={{
                    color: "#bbb",
                    fontSize: 13,
                    lineHeight: 1.5
                  }}
                >
                  {item.description}
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color: "#D4AF37",
                    fontWeight: "bold",
                    fontSize: "1.2rem"
                  }}
                >
                  $ {item.price.toLocaleString()}
                </Typography>

              </CardContent>

            </Card>

          </Grid>

        ))}

      </Grid>

    </Box>
  );
};
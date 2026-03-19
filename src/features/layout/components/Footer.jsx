import React from "react";
import { Box, Typography, Button } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#111",
        color: "#fff",
        textAlign: "center",
        py: 3,
        mt: 4,
      }}
    >
      <Typography variant="body2" sx={{ mb: 1 }}>
        © 2026 Carrito de Perfumes
      </Typography>

      <Button
        variant="contained"
        color="secondary"
        href="https://github.com/marielsusej17/taller3react"
        target="_blank"
        sx={{ mt: 1 }}
      >
        Ver repositorio en GitHub
      </Button>
    </Box>
  );
};
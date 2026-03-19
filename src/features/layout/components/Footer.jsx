import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";

// Iconos
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

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
      {/* Texto */}
      <Typography variant="body2" sx={{ mb: 1 }}>
        © 2026 Carrito de Perfumes - Mariel Susej Hernández Mangarre
      </Typography>

      {/* Redes sociales */}
      <Box sx={{ mb: 2 }}>
        <IconButton
          href="https://facebook.com"
          target="_blank"
          color="primary"
        >
          <FacebookIcon />
        </IconButton>

        <IconButton
          href="https://instagram.com"
          target="_blank"
          color="secondary"
        >
          <InstagramIcon />
        </IconButton>

        <IconButton
          href="mailto:tuemail@gmail.com"
          color="error"
        >
          <EmailIcon />
        </IconButton>
      </Box>

      {/* Botones */}
      <Box>
        {/* GitHub */}
        <Button
          variant="contained"
          color="secondary"
          href="https://github.com/marielsusej17/taller3react"
          target="_blank"
          sx={{ mt: 1, mr: 1 }}
        >
          Ver repositorio
        </Button>

        {/* Vercel (Vínculo) */}
        <Button
          variant="contained"
          color="success"
          href="https://taller3react.vercel.app"
          target="_blank"
          sx={{ mt: 1 }}
        >
          Vínculo
        </Button>
      </Box>
    </Box>
  );
};
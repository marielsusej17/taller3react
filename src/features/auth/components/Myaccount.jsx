import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Myaccount() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/.test(password);

  const formValid = emailValid && passwordValid;

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{
        background: "radial-gradient(circle at top, #1a1a1a, #000)"
      }}
    >
      <Card
        sx={{
          width: 420,
          borderRadius: 5,
          backdropFilter: "blur(15px)",
          background: "rgba(20,20,20,0.9)",
          border: "1px solid rgba(212,175,55,0.5)",
          boxShadow: "0 0 25px rgba(212,175,55,0.25), 0 20px 60px rgba(0,0,0,0.9)",
          transition: "0.4s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0 0 40px rgba(255,215,0,0.4), 0 30px 80px rgba(0,0,0,1)"
          }
        }}
      >
        <CardContent sx={{ p: 4 }}>

          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 3,
              color: "#fff",
              letterSpacing: 2,
              textTransform: "uppercase"
            }}
          >
            INICIAR SESIÓN
          </Typography>

          <TextField
            fullWidth
            label="Correo electrónico"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            color={emailValid ? "success" : "warning"}
            error={email !== "" && !emailValid}
            helperText={email !== "" && !emailValid ? "Correo no válido" : ""}
            sx={{
              input: { color: "#fff" },
              label: { color: "#aaa" }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon sx={{ color: "#aaa" }} />
                </InputAdornment>
              )
            }}
          />

          <TextField
            fullWidth
            label="Contraseña"
            margin="normal"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            color={passwordValid ? "success" : "warning"}
            error={password !== "" && !passwordValid}
            helperText={
              password !== "" && !passwordValid
                ? "Mínimo 8 caracteres, 1 número y 1 carácter especial"
                : ""
            }
            sx={{
              input: { color: "#fff" },
              label: { color: "#aaa" }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon sx={{ color: "#aaa" }} />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <VisibilityOff sx={{ color: "#aaa" }} />
                    ) : (
                      <Visibility sx={{ color: "#aaa" }} />
                    )}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <Box display="flex" justifyContent="space-between" mt={1}>
            <FormControlLabel
              control={<Checkbox sx={{ color: "#D4AF37" }} />}
              label={<Typography sx={{ color: "#aaa" }}>Recordarme</Typography>}
            />

            <Typography sx={{ color: "#D4AF37", cursor: "pointer" }}>
              ¿Olvidaste tu contraseña?
            </Typography>
          </Box>

          <Button
            fullWidth
            disabled={!formValid}
            sx={{
              mt: 3,
              py: 1.4,
              borderRadius: 2,
              background: "#000",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "uppercase",
              border: "1px solid #D4AF37",
              "&:hover": {
                background: "#111",
                color: "#FFD700"
              }
            }}
          >
            INICIAR SESIÓN
          </Button>

        </CardContent>
      </Card>
    </Box>
  );
}
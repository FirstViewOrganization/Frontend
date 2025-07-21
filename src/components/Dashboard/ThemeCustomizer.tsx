
"use client";
import React, { useState } from 'react';
import {
  Box,
  Button,
  Drawer,
  Typography,
  IconButton,
  Grid,
  Card,
  CardContent,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
  Chip,
  Stack
} from '@mui/material';
import {
  Palette as PaletteIcon,
  Close as CloseIcon,
  Brightness4 as DarkModeIcon,
  Brightness7 as LightModeIcon,
  Circle as CircleIcon
} from '@mui/icons-material';
import { useTheme, colorPalettes, themeStyles } from '@/contexts/ThemeContext';

interface ThemeCustomizerProps {
  open: boolean;
  onClose: () => void;
}

const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({ open, onClose }) => {
  const { isDarkMode, toggleDarkMode, currentPalette, setPalette, currentStyle, setStyle } = useTheme();

  const paletteColors = [
    'slate', 'gray', 'zinc', 'neutral', 'stone',
    'red', 'orange', 'amber', 'yellow', 'lime',
    'green', 'emerald', 'teal', 'cyan', 'sky',
    'blue', 'indigo', 'violet', 'purple', 'fuchsia',
    'pink', 'rose'
  ];

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 400,
          padding: 2,
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Personalizar Tema</Typography>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Modo Oscuro/Claro */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Modo de Color
        </Typography>
        <Button
          fullWidth
          variant={isDarkMode ? "contained" : "outlined"}
          startIcon={isDarkMode ? <DarkModeIcon /> : <LightModeIcon />}
          onClick={toggleDarkMode}
          sx={{ mb: 1 }}
        >
          {isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}
        </Button>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Estilos de Tema */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Estilo del Dashboard
        </Typography>
        <FormControl>
          <RadioGroup
            value={currentStyle}
            onChange={(e) => setStyle(e.target.value)}
          >
            {Object.entries(themeStyles).map(([key, style]) => (
              <FormControlLabel
                key={key}
                value={key}
                control={<Radio />}
                label={
                  <Box>
                    <Typography variant="body2" fontWeight="medium">
                      {style.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {style.description}
                    </Typography>
                  </Box>
                }
              />
            ))}
          </RadioGroup>
        </FormControl>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Paleta de Colores */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="subtitle1" gutterBottom>
          Paleta de Colores
        </Typography>
        <Grid container spacing={1}>
          {paletteColors.map((paletteName) => {
            const palette = colorPalettes[paletteName as keyof typeof colorPalettes];
            return (
              <Grid item xs={3} key={paletteName}>
                <Card
                  sx={{
                    cursor: 'pointer',
                    border: currentPalette === paletteName ? 2 : 1,
                    borderColor: currentPalette === paletteName ? 'primary.main' : 'divider',
                    '&:hover': {
                      transform: 'scale(1.05)',
                      transition: 'transform 0.2s ease-in-out',
                    },
                  }}
                  onClick={() => setPalette(paletteName)}
                >
                  <CardContent sx={{ p: 1, '&:last-child': { pb: 1 } }}>
                    <Stack direction="row" spacing={0.5} justifyContent="center" sx={{ mb: 1 }}>
                      <CircleIcon sx={{ color: palette[300], fontSize: 12 }} />
                      <CircleIcon sx={{ color: palette[500], fontSize: 12 }} />
                      <CircleIcon sx={{ color: palette[700], fontSize: 12 }} />
                    </Stack>
                    <Typography 
                      variant="caption" 
                      align="center" 
                      display="block"
                      sx={{ textTransform: 'capitalize' }}
                    >
                      {paletteName}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <Divider sx={{ mb: 2 }} />

      {/* Vista Previa */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Vista Previa
        </Typography>
        <Card sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Título de Ejemplo
          </Typography>
          <Typography variant="body2" color="text.secondary" paragraph>
            Este es un ejemplo de cómo se verá el contenido con el tema seleccionado.
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip label="Chip Ejemplo" size="small" />
            <Button size="small" variant="contained">
              Botón
            </Button>
          </Stack>
        </Card>
      </Box>
    </Drawer>
  );
};

export default ThemeCustomizer;

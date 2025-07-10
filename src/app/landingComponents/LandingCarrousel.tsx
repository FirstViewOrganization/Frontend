
"use client";
import React, { useState, useEffect } from 'react';
import { Box, Card, CardMedia, CardContent, Typography, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '100%',
  margin: '0 auto',
  borderRadius: theme.spacing(2),
  overflow: 'hidden'
}));

const CarouselCard = styled(Card)(({ theme }) => ({
  minHeight: 300,
  display: 'flex',
  flexDirection: 'column',
  boxShadow: theme.shadows[8],
  borderRadius: theme.spacing(2),
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: theme.palette.primary.main,
  zIndex: 2,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
  }
}));

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const defaultItems: CarouselItem[] = [
  {
    id: 1,
    title: "Proyecto Innovador 1",
    description: "Una solución revolucionaria que transformó la experiencia digital de nuestros clientes",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Desarrollo Web Avanzado",
    description: "Plataforma web completa con tecnologías de última generación",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Aplicación Móvil",
    description: "App móvil que conecta usuarios y facilita procesos empresariales",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=300&fit=crop"
  }
];

interface LandingCarrouselProps {
  items?: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
}

export default function LandingCarrousel({ 
  items = defaultItems, 
  autoPlay = true, 
  interval = 5000 
}: LandingCarrouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoPlay && items.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, items.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  if (!items.length) return null;

  return (
    <CarouselContainer>
      {items.length > 1 && (
        <>
          <NavigationButton 
            onClick={goToPrevious}
            sx={{ left: 16 }}
          >
            <ArrowBackIos />
          </NavigationButton>
          <NavigationButton 
            onClick={goToNext}
            sx={{ right: 16 }}
          >
            <ArrowForwardIos />
          </NavigationButton>
        </>
      )}
      
      <CarouselCard>
        <CardMedia
          component="img"
          height="300"
          image={items[currentIndex].image}
          alt={items[currentIndex].title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1, p: 3 }}>
          <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
            {items[currentIndex].title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {items[currentIndex].description}
          </Typography>
        </CardContent>
      </CarouselCard>

      {/* Indicators */}
      {items.length > 1 && (
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 2, 
          gap: 1 
        }}>
          {items.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: index === currentIndex ? 'primary.main' : 'grey.300',
                cursor: 'pointer',
                transition: 'background-color 0.3s',
                '&:hover': {
                  backgroundColor: index === currentIndex ? 'primary.dark' : 'grey.400'
                }
              }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </Box>
      )}
    </CarouselContainer>
  );
}

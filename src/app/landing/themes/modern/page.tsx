
"use client";
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import LandingCard from '@/app/landingComponents/LandingCard';
import LandingCarrousel from '@/app/landingComponents/LandingCarrousel';
import LandingText from '@/app/landingComponents/LandingText';

const HeroSection = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  padding: theme.spacing(8, 0),
  textAlign: 'center',
}));

const FeatureSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: theme.palette.grey[50],
}));

export default function ModernLanding() {
  const features = [
    {
      title: "Innovación",
      content: "Soluciones tecnológicas de vanguardia para tu negocio",
      backgroundColor: "#f8f9fa"
    },
    {
      title: "Eficiencia",
      content: "Optimiza tus procesos con nuestras herramientas",
      backgroundColor: "#e3f2fd"
    },
    {
      title: "Soporte 24/7",
      content: "Estamos aquí para ayudarte cuando lo necesites",
      backgroundColor: "#f3e5f5"
    }
  ];

  return (
    <Box>
      {/* Hero Section */}
      <HeroSection>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h1" gutterBottom>
            Bienvenido al Futuro
          </Typography>
          <LandingText 
            text="Transformamos ideas en realidad digital" 
            variant="h5" 
            color="inherit"
          />
          <Box sx={{ mt: 4 }}>
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                mr: 2, 
                backgroundColor: 'white', 
                color: '#667eea',
                '&:hover': { backgroundColor: '#f5f5f5' }
              }}
            >
              Comenzar Ahora
            </Button>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                borderColor: 'white', 
                color: 'white',
                '&:hover': { borderColor: '#f5f5f5', backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Saber Más
            </Button>
          </Box>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <FeatureSection>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Nuestras Características
          </Typography>
          <Grid container spacing={4} sx={{ mt: 4 }}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <LandingCard 
                  title={feature.title}
                  content={feature.content}
                  backgroundColor={feature.backgroundColor}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </FeatureSection>

      {/* Carousel Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom>
            Nuestros Proyectos
          </Typography>
          <LandingCarrousel />
        </Container>
      </Box>
    </Box>
  );
}

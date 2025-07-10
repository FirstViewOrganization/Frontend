
"use client";
import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import LandingCard from '@/app/landingComponents/LandingCard';
import LandingCarrousel from '@/app/landingComponents/LandingCarrousel';
import LandingText from '@/app/landingComponents/LandingText';

const CorporateHero = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1e3c72 0%, #2a5298 100%)',
  color: 'white',
  padding: theme.spacing(10, 0),
}));

const StatsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f8f9fa',
}));

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: 'white',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
}));

export default function CorporateLanding() {
  const stats = [
    { number: '500+', label: 'Clientes Satisfechos' },
    { number: '15+', label: 'Años de Experiencia' },
    { number: '98%', label: 'Tasa de Éxito' },
    { number: '24/7', label: 'Soporte Disponible' }
  ];

  const services = [
    {
      title: "Consultoría Estratégica",
      content: "Análisis profundo y estrategias personalizadas para su negocio",
      backgroundColor: "#ffffff"
    },
    {
      title: "Implementación Técnica",
      content: "Soluciones robustas implementadas por expertos certificados",
      backgroundColor: "#ffffff"
    },
    {
      title: "Soporte Continuo",
      content: "Acompañamiento constante para garantizar su éxito empresarial",
      backgroundColor: "#ffffff"
    }
  ];

  return (
    <Box>
      {/* Corporate Hero */}
      <CorporateHero>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
                Líderes en Soluciones Empresariales
              </Typography>
              <LandingText 
                text="Impulsamos el crecimiento de su empresa con tecnología de vanguardia y estrategias probadas"
                variant="h6"
                sx={{ mb: 4, color: 'rgba(255,255,255,0.9)' }}
              />
              <Box>
                <Button 
                  variant="contained" 
                  size="large"
                  sx={{ 
                    mr: 2,
                    backgroundColor: 'white',
                    color: '#1e3c72',
                    fontWeight: 600,
                    px: 4,
                    '&:hover': { backgroundColor: '#f0f0f0' }
                  }}
                >
                  Solicitar Consulta
                </Button>
                <Button 
                  variant="outlined" 
                  size="large"
                  sx={{ 
                    borderColor: 'white',
                    color: 'white',
                    fontWeight: 600,
                    px: 4
                  }}
                >
                  Ver Portafolio
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </CorporateHero>

      {/* Stats Section */}
      <StatsSection>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <StatCard>
                  <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: '#1e3c72', mb: 1 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </StatCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </StatsSection>

      {/* Services Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 600, mb: 6 }}>
            Nuestros Servicios
          </Typography>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <LandingCard 
                  title={service.title}
                  content={service.content}
                  backgroundColor={service.backgroundColor}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Portfolio Carousel */}
      <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ fontWeight: 600, mb: 6 }}>
            Casos de Éxito
          </Typography>
          <LandingCarrousel />
        </Container>
      </Box>
    </Box>
  );
}

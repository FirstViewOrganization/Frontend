
"use client";
import { Box, Container, Typography, Button, Grid, Card, CardContent, Avatar, Stack, Chip } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@/contexts/ThemeContext';
import { colorPalettes } from '@/contexts/ThemeContext';
import LandingCard from '@/app/landingComponents/LandingCard';
import LandingCarrousel from '@/app/landingComponents/LandingCarrousel';
import LandingText from '@/app/landingComponents/LandingText';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';

const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: 'white',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.1,
    zIndex: 0
  }
}));

const FeatureSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: alpha(theme.palette.background.default, 0.98),
  position: 'relative'
}));

const StatsCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  borderRadius: theme.shape.borderRadius * 3,
  background: '#ffffff',
  border: `2px solid ${alpha(theme.palette.primary.main, 0.15)}`,
  boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.1)}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 0
  },
  '& > *': {
    position: 'relative',
    zIndex: 1
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.3)}`,
    border: `2px solid ${theme.palette.primary.main}`,
    color: '#ffffff',
    '&::before': {
      opacity: 1
    },
    '& .MuiTypography-root': {
      color: '#ffffff !important'
    },
    '& .MuiChip-root': {
      backgroundColor: alpha('#ffffff', 0.2),
      color: '#ffffff',
      fontWeight: 700
    }
  }
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.shape.borderRadius * 2,
  background: theme.palette.background.paper,
  boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}`,
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 16px 48px ${alpha(theme.palette.common.black, 0.12)}`
  }
}));

const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
  borderRadius: theme.shape.borderRadius * 4,
  padding: theme.spacing(1.5, 4),
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '1.1rem',
  color: '#ffffff !important',
  border: `2px solid transparent`,
  boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(45deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
    opacity: 0,
    transition: 'opacity 0.3s ease'
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.5)}`,
    border: `2px solid ${alpha('#ffffff', 0.3)}`,
    '&::before': {
      opacity: 1
    }
  },
  '& .MuiButton-label, & *': {
    position: 'relative',
    zIndex: 1,
    color: '#ffffff !important'
  }
}));

export default function ModernLanding() {
  const { currentPalette } = useTheme();
  const palette = colorPalettes[currentPalette as keyof typeof colorPalettes];
  
  const features = [
    {
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Crecimiento Escalable",
      content: "Soluciones que crecen contigo, desde startups hasta empresas globales",
      backgroundColor: alpha(palette[500], 0.05)
    },
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: 'secondary.main' }} />,
      title: "Seguridad Avanzada",
      content: "Protección de datos de nivel empresarial con cifrado end-to-end",
      backgroundColor: alpha(palette[600], 0.05)
    },
    {
      icon: <SpeedIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: "Rendimiento Superior",
      content: "Infraestructura optimizada para máxima velocidad y confiabilidad",
      backgroundColor: alpha(palette[400], 0.05)
    }
  ];

  const stats = [
    { number: '10k+', label: 'Usuarios Activos', growth: '+25%' },
    { number: '99.9%', label: 'Tiempo Activo', growth: 'SLA' },
    { number: '50+', label: 'Países', growth: '+12%' },
    { number: '24/7', label: 'Soporte', growth: 'Premium' }
  ];

  const testimonials = [
    {
      name: "María González",
      role: "CEO, TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b400?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "La mejor decisión que tomamos fue migrar a esta plataforma. El ROI ha sido excepcional."
    },
    {
      name: "Carlos Mendoza",
      role: "CTO, InnovateNow",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      content: "Increíble velocidad de implementación y soporte técnico excepcional. Altamente recomendado."
    }
  ];

  return (
    <Box>
      {/* Hero Section Mejorado */}
      <HeroSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={4}>
                <Box>
                  <Chip 
                    label="🚀 Nuevo: AI-Powered Analytics" 
                    sx={{ 
                      mb: 3, 
                      backgroundColor: alpha('#fff', 0.2),
                      color: 'white',
                      backdropFilter: 'blur(10px)'
                    }} 
                  />
                  <Typography 
                    variant="h1" 
                    component="h1" 
                    sx={{ 
                      fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                      fontWeight: 800,
                      lineHeight: 1.1,
                      mb: 2
                    }}
                  >
                    El Futuro de la
                    <Box component="span" sx={{ 
                      background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'block'
                    }}>
                      Transformación Digital
                    </Box>
                  </Typography>
                </Box>
                
                <LandingText 
                  text="Potencia tu negocio con IA avanzada, analytics en tiempo real y automatización inteligente. Únete a miles de empresas que ya transformaron su futuro."
                  variant="h6"
                  sx={{ 
                    color: alpha('#fff', 0.9), 
                    fontWeight: 300,
                    lineHeight: 1.6,
                    maxWidth: '600px'
                  }}
                />

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="flex-start">
                  <GradientButton 
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                  >
                    Comenzar Gratis
                  </GradientButton>
                  <Button 
                    variant="outlined" 
                    size="large"
                    sx={{ 
                      borderColor: alpha('#fff', 0.5),
                      color: 'white',
                      borderRadius: 4,
                      padding: theme => theme.spacing(1.5, 4),
                      fontWeight: 600,
                      textTransform: 'none',
                      '&:hover': { 
                        borderColor: 'white',
                        backgroundColor: alpha('#fff', 0.1)
                      }
                    }}
                  >
                    Ver Demo en Vivo
                  </Button>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center" sx={{ pt: 2 }}>
                  <CheckCircleIcon sx={{ color: '#4CAF50' }} />
                  <Typography variant="body2" sx={{ color: alpha('#fff', 0.8) }}>
                    Sin tarjeta de crédito • Configuración en 5 minutos
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={5}>
              <Box 
                component="img"
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dashboard Preview"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 3,
                  boxShadow: `0 20px 60px ${alpha('#000', 0.3)}`,
                  transform: { md: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)' },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: { md: 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02)' }
                  }
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </HeroSection>

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <StatsCard elevation={0}>
                  <Typography variant="h3" component="div" sx={{ 
                    fontWeight: 800, 
                    background: `linear-gradient(45deg, ${palette[600]}, ${palette[500]})`,
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 1 
                  }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {stat.label}
                  </Typography>
                  <Chip 
                    label={stat.growth} 
                    size="small" 
                    sx={{ 
                      mt: 1, 
                      backgroundColor: alpha(palette[500], 0.1),
                      color: 'primary.main',
                      fontWeight: 600
                    }} 
                  />
                </StatsCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section Mejorado */}
      <FeatureSection>
        <Container maxWidth="lg">
          <Stack spacing={8} alignItems="center">
            <Box textAlign="center" maxWidth="600px">
              <Typography variant="h2" component="h2" sx={{ 
                fontWeight: 700, 
                mb: 3,
                background: `linear-gradient(45deg, ${palette[600]}, ${palette[500]})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Características que Marcan la Diferencia
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ fontWeight: 300 }}>
                Tecnología de vanguardia diseñada para impulsar tu éxito empresarial
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{
                    height: '100%',
                    borderRadius: 3,
                    border: `1px solid ${alpha(palette[500], 0.1)}`,
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: `0 20px 40px ${alpha(palette[500], 0.15)}`
                    }
                  }}>
                    <CardContent sx={{ p: 4, textAlign: 'center' }}>
                      <Box sx={{ mb: 3 }}>
                        {feature.icon}
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {feature.content}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </FeatureSection>

      {/* Testimonials Section */}
      <Box sx={{ py: 12, backgroundColor: alpha(palette[500], 0.02) }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" textAlign="center" sx={{ 
            fontWeight: 700, 
            mb: 8,
            color: 'text.primary'
          }}>
            Lo que Dicen Nuestros Clientes
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={6} key={index}>
                <TestimonialCard>
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="body1" sx={{ 
                      mb: 3, 
                      fontStyle: 'italic',
                      lineHeight: 1.7,
                      color: 'text.secondary'
                    }}>
                      "{testimonial.content}"
                    </Typography>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar 
                        src={testimonial.avatar} 
                        sx={{ width: 50, height: 50 }}
                      />
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Stack>
                  </CardContent>
                </TestimonialCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Carousel Section Mejorado */}
      <Box sx={{ py: 12, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" component="h2" textAlign="center" sx={{ 
            fontWeight: 700, 
            mb: 8,
            background: `linear-gradient(45deg, ${palette[600]}, ${palette[500]})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Casos de Éxito
          </Typography>
          <LandingCarrousel />
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ 
        py: 12, 
        background: `linear-gradient(135deg, ${palette[600]} 0%, ${palette[500]} 100%)`,
        color: 'white',
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h2" sx={{ fontWeight: 700, mb: 3 }}>
            ¿Listo para Transformar tu Negocio?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, color: alpha('#fff', 0.9) }}>
            Únete a miles de empresas que ya confían en nosotros
          </Typography>
          <Button 
            size="large"
            variant="contained"
            sx={{ 
              backgroundColor: '#ffffff',
              color: palette[700],
              fontWeight: 700,
              fontSize: '1.1rem',
              padding: theme => theme.spacing(1.5, 4),
              borderRadius: 4,
              textTransform: 'none',
              border: `2px solid ${alpha('#ffffff', 0.2)}`,
              boxShadow: `0 8px 24px ${alpha('#000', 0.2)}`,
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&:hover': {
                backgroundColor: '#ffffff',
                transform: 'translateY(-2px)',
                boxShadow: `0 12px 32px ${alpha('#000', 0.3)}`,
                border: `2px solid ${alpha('#ffffff', 0.4)}`
              }
            }}
          >
            Comenzar Ahora - Es Gratis
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

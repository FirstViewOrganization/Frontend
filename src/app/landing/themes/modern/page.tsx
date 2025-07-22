
"use client";
import { Box, Container, Typography, Button, Grid, Card, CardContent, Avatar, Stack, Chip } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@/contexts/ThemeContext';
import { colorPalettes } from '@/contexts/ThemeContext';
import HeroSection from '@/app/landingComponents/sections/HeroSection';
import NewsSection from '@/app/landingComponents/sections/NewsSection';
import CatalogSection from '@/app/landingComponents/sections/CatalogSection';
import ContactSection from '@/app/landingComponents/sections/ContactSection';
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
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  color: '#ffffff',
  border: 'none',
  boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.4)}`,
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
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 0
  },
  '& > *': {
    position: 'relative',
    zIndex: 1
  },
  '& .MuiTypography-root': {
    color: '#ffffff'
  },
  '& .MuiChip-root': {
    backgroundColor: alpha('#ffffff', 0.2),
    color: '#ffffff',
    fontWeight: 600,
    border: `1px solid ${alpha('#ffffff', 0.3)}`
  },
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: `0 25px 50px ${alpha(theme.palette.primary.main, 0.6)}`,
    '&::before': {
      opacity: 1
    },
    '& .MuiChip-root': {
      backgroundColor: '#ffffff',
      color: theme.palette.primary.main,
      fontWeight: 700,
      transform: 'scale(1.05)'
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
  
  // Sample data for modular components
  const sampleNews = [
    {
      id: '1',
      title: 'Lanzamos nuestra nueva funcionalidad de IA',
      description: 'Descubre cómo la inteligencia artificial está transformando la experiencia de usuario',
      date: '15 Dic 2024',
      category: 'Innovación',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: '2',
      title: 'Nuevas integraciones empresariales',
      description: 'Conecta con más de 50 herramientas empresariales de forma nativa',
      date: '12 Dic 2024',
      category: 'Producto',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ];

  const sampleProducts = [
    {
      id: '1',
      name: 'Plan Professional',
      description: 'Ideal para equipos medianos que buscan herramientas avanzadas',
      price: 99,
      originalPrice: 129,
      rating: 4.8,
      category: 'Software',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      featured: true
    },
    {
      id: '2',
      name: 'Plan Enterprise',
      description: 'Solución completa para grandes organizaciones',
      price: 299,
      rating: 4.9,
      category: 'Software',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      featured: true
    }
  ];

  const contactInfo = {
    email: 'contacto@empresa.com',
    phone: '+34 900 123 456',
    address: 'Calle Innovation 123, Madrid, España',
    social: {
      linkedin: 'https://linkedin.com/company/empresa',
      twitter: 'https://twitter.com/empresa'
    }
  };
  
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
      {/* Hero Section using modular component */}
      <HeroSection
        title="El Futuro de la Transformación Digital"
        description="Potencia tu negocio con IA avanzada, analytics en tiempo real y automatización inteligente. Únete a miles de empresas que ya transformaron su futuro."
        primaryButtonText="Comenzar Gratis"
        secondaryButtonText="Ver Demo en Vivo"
        theme="modern"
        showBadges={true}
        badges={["🚀 Nuevo: AI-Powered Analytics", "✓ Sin tarjeta de crédito"]}
        heroImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      />

      {/* Stats Section */}
      <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <StatsCard elevation={0}>
                  <Typography variant="h3" component="div" sx={{ 
                    fontWeight: 800, 
                    color: '#ffffff',
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                    mb: 1 
                  }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    fontWeight: 500,
                    color: alpha('#ffffff', 0.9),
                    mb: 2
                  }}>
                    {stat.label}
                  </Typography>
                  <Chip 
                    label={stat.growth} 
                    size="small" 
                    sx={{ 
                      mt: 1, 
                      backgroundColor: alpha('#ffffff', 0.2),
                      color: '#ffffff',
                      fontWeight: 600,
                      border: `1px solid ${alpha('#ffffff', 0.3)}`,
                      transition: 'all 0.3s ease'
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

      {/* News Section using modular component */}
      <NewsSection
        title="Últimas Novedades"
        subtitle="Mantente al día con nuestras innovaciones y actualizaciones"
        news={sampleNews}
        variant="grid"
        theme="modern"
      />

      {/* Catalog Section using modular component */}
      <CatalogSection
        title="Nuestros Planes"
        subtitle="Encuentra la solución perfecta para tu negocio"
        products={sampleProducts}
        variant="featured"
        theme="modern"
        showPrices={true}
        showRatings={true}
      />

      {/* Contact Section using modular component */}
      <ContactSection
        title="¿Listo para Transformar tu Negocio?"
        subtitle="Únete a miles de empresas que ya confían en nosotros"
        contactInfo={contactInfo}
        theme="modern"
        variant="split"
        showMap={false}
      />
    </Box>
  );
}

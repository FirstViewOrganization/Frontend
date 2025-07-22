
"use client";
import { Box, Container, Typography, Button, Grid, Paper, Stack, Chip, Avatar, Card, CardContent, LinearProgress } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@/contexts/ThemeContext';
import LandingCard from '@/app/landingComponents/LandingCard';
import LandingCarrousel from '@/app/landingComponents/LandingCarrousel';
import LandingText from '@/app/landingComponents/LandingText';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import VerifiedIcon from '@mui/icons-material/Verified';

const CorporateHero = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
  color: 'white',
  padding: theme.spacing(12, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.1,
    zIndex: 0
  }
}));

const StatsSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10, 0),
  backgroundColor: alpha(theme.palette.primary.main, 0.03),
  position: 'relative'
}));

const StatCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius * 2,
  border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '4px',
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`
  }
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.shape.borderRadius * 2,
  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 16px 48px ${alpha(theme.palette.common.black, 0.1)}`
  }
}));

const TrustBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: theme.spacing(1, 2),
  backgroundColor: alpha('#4CAF50', 0.1),
  borderRadius: theme.shape.borderRadius * 3,
  border: `1px solid ${alpha('#4CAF50', 0.2)}`,
  margin: theme.spacing(0.5)
}));

export default function CorporateLanding() {
  const { currentPalette } = useTheme();

  const stats = [
    { 
      number: '500+', 
      label: 'Empresas Fortune 500', 
      growth: '+25% YoY',
      icon: <BusinessIcon sx={{ fontSize: 32, color: 'primary.main' }} />
    },
    { 
      number: '15+', 
      label: 'Años de Experiencia', 
      growth: 'Establecido 2008',
      icon: <VerifiedIcon sx={{ fontSize: 32, color: 'primary.main' }} />
    },
    { 
      number: '99.9%', 
      label: 'SLA Garantizado', 
      growth: 'Tiempo Activo',
      icon: <SecurityIcon sx={{ fontSize: 32, color: 'primary.main' }} />
    },
    { 
      number: '24/7', 
      label: 'Soporte Premium', 
      growth: 'Disponible',
      icon: <SupportAgentIcon sx={{ fontSize: 32, color: 'primary.main' }} />
    }
  ];

  const services = [
    {
      title: "Consultoría Estratégica Digital",
      content: "Análisis integral y roadmap tecnológico personalizado para acelerar su transformación digital",
      backgroundColor: "#ffffff",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Audit tecnológico completo", "Plan de implementación", "ROI proyectado"]
    },
    {
      title: "Soluciones Enterprise",
      content: "Plataformas robustas y escalables diseñadas para grandes organizaciones y flujos complejos",
      backgroundColor: "#ffffff", 
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Arquitectura cloud-native", "Integración ERP/CRM", "Escalabilidad garantizada"]
    },
    {
      title: "Soporte y Mantenimiento",
      content: "Acompañamiento continuo con SLA empresarial para garantizar operación óptima 24/7",
      backgroundColor: "#ffffff",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Monitoreo proactivo", "Updates automáticos", "Soporte dedicado"]
    }
  ];

  const certifications = [
    { name: "ISO 27001", image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    { name: "SOC 2 Type II", image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" },
    { name: "GDPR Compliant", image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80" }
  ];

  const clientLogos = [
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  ];

  return (
    <Box>
      {/* Corporate Hero Mejorado */}
      <CorporateHero>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={7}>
              <Stack spacing={4}>
                <Box>
                  <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                    <Chip 
                      label="🏆 Líder del Mercado 2024" 
                      sx={{ 
                        backgroundColor: alpha('#FFD700', 0.2),
                        color: '#FFD700',
                        fontWeight: 600
                      }} 
                    />
                    <Chip 
                      label="✓ Certificado ISO 27001" 
                      sx={{ 
                        backgroundColor: alpha('#4CAF50', 0.2),
                        color: '#4CAF50',
                        fontWeight: 600
                      }} 
                    />
                  </Stack>
                  
                  <Typography 
                    variant="h1" 
                    component="h1" 
                    sx={{ 
                      fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                      fontWeight: 700,
                      lineHeight: 1.1,
                      mb: 3
                    }}
                  >
                    Transformación Digital
                    <Box component="span" sx={{ 
                      background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      display: 'block'
                    }}>
                      para Grandes Empresas
                    </Box>
                  </Typography>
                </Box>
                
                <LandingText 
                  text="Potenciamos el crecimiento de organizaciones Fortune 500 con tecnología empresarial de vanguardia, estrategias probadas y soporte de nivel mundial."
                  variant="h6"
                  sx={{ 
                    color: alpha('#fff', 0.9),
                    fontWeight: 300,
                    lineHeight: 1.6,
                    maxWidth: '600px'
                  }}
                />

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>
                  <Button 
                    variant="contained" 
                    size="large"
                    sx={{ 
                      backgroundColor: 'white',
                      color: currentPalette.primary,
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      '&:hover': { 
                        backgroundColor: alpha('#fff', 0.9),
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Solicitar Demo Ejecutiva
                  </Button>
                  <Button 
                    variant="outlined" 
                    size="large"
                    sx={{ 
                      borderColor: 'white',
                      color: 'white',
                      fontWeight: 600,
                      px: 4,
                      py: 1.5,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      '&:hover': {
                        borderColor: 'white',
                        backgroundColor: alpha('#fff', 0.1)
                      }
                    }}
                  >
                    Casos de Éxito
                  </Button>
                </Stack>

                <Stack direction="row" spacing={4} sx={{ pt: 3 }}>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <TrendingUpIcon sx={{ color: '#4CAF50' }} />
                    <Typography variant="body2" sx={{ color: alpha('#fff', 0.8) }}>
                      ROI promedio +240%
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <PeopleIcon sx={{ color: '#4CAF50' }} />
                    <Typography variant="body2" sx={{ color: alpha('#fff', 0.8) }}>
                      +10M usuarios activos
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={5}>
              <Box sx={{ position: 'relative' }}>
                <Box 
                  component="img"
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Enterprise Dashboard"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: `0 20px 60px ${alpha('#000', 0.3)}`
                  }}
                />
                <Box sx={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  backgroundColor: alpha('#fff', 0.95),
                  borderRadius: 2,
                  p: 2,
                  backdropFilter: 'blur(10px)'
                }}>
                  <Typography variant="h6" sx={{ color: '#1a1a1a', fontWeight: 600 }}>
                    99.9%
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Uptime SLA
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </CorporateHero>

      {/* Trust Indicators */}
      <Box sx={{ py: 6, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center">
            <Typography variant="overline" sx={{ 
              color: 'text.secondary',
              fontWeight: 600,
              letterSpacing: '0.1em'
            }}>
              CONFIANZA EMPRESARIAL
            </Typography>
            <Grid container spacing={4} alignItems="center" justifyContent="center">
              {clientLogos.map((logo, index) => (
                <Grid item xs={4} md={2} key={index}>
                  <Box 
                    component="img"
                    src={logo}
                    alt={`Client ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: 60,
                      objectFit: 'contain',
                      filter: 'grayscale(100%)',
                      opacity: 0.6,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        filter: 'grayscale(0%)',
                        opacity: 1
                      }
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
              {certifications.map((cert, index) => (
                <TrustBadge key={index}>
                  <VerifiedIcon sx={{ fontSize: 16, color: '#4CAF50', mr: 1 }} />
                  <Typography variant="body2" sx={{ color: '#4CAF50', fontWeight: 600 }}>
                    {cert.name}
                  </Typography>
                </TrustBadge>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Stats Section Mejorado */}
      <StatsSection>
        <Container maxWidth="lg">
          <Stack spacing={8}>
            <Box textAlign="center">
              <Typography variant="h2" sx={{ 
                fontWeight: 700,
                mb: 3,
                background: `linear-gradient(45deg, ${currentPalette.primary}, ${currentPalette.secondary})`,
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Resultados que Hablan por Sí Solos
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '600px', mx: 'auto' }}>
                Métricas de rendimiento que demuestran nuestro compromiso con la excelencia empresarial
              </Typography>
            </Box>
            
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={6} md={3} key={index}>
                  <StatCard elevation={0}>
                    <Box sx={{ mb: 2 }}>
                      {stat.icon}
                    </Box>
                    <Typography variant="h3" component="div" sx={{ 
                      fontWeight: 800,
                      background: `linear-gradient(45deg, ${currentPalette.primary}, ${currentPalette.secondary})`,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      mb: 1
                    }}>
                      {stat.number}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                      {stat.label}
                    </Typography>
                    <Chip 
                      label={stat.growth} 
                      size="small" 
                      sx={{ 
                        backgroundColor: alpha('#4CAF50', 0.1),
                        color: '#4CAF50',
                        fontWeight: 600
                      }} 
                    />
                    <LinearProgress 
                      variant="determinate" 
                      value={90} 
                      sx={{ 
                        mt: 2,
                        backgroundColor: alpha(currentPalette.primary, 0.1),
                        '& .MuiLinearProgress-bar': {
                          backgroundColor: currentPalette.primary
                        }
                      }} 
                    />
                  </StatCard>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </StatsSection>

      {/* Services Section Mejorado */}
      <Box sx={{ py: 12, backgroundColor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Stack spacing={8}>
            <Box textAlign="center" maxWidth="700px" sx={{ mx: 'auto' }}>
              <Typography variant="h2" sx={{ fontWeight: 700, mb: 3 }}>
                Servicios de Nivel Enterprise
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Soluciones integrales diseñadas para las necesidades específicas de grandes organizaciones
              </Typography>
            </Box>
            
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <ServiceCard>
                    <Box 
                      component="img"
                      src={service.image}
                      alt={service.title}
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover'
                      }}
                    />
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 600, mb: 2 }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                        {service.content}
                      </Typography>
                      <Stack spacing={1}>
                        {service.features.map((feature, featureIndex) => (
                          <Stack key={featureIndex} direction="row" spacing={1} alignItems="center">
                            <VerifiedIcon sx={{ fontSize: 16, color: 'primary.main' }} />
                            <Typography variant="body2" color="text.secondary">
                              {feature}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </CardContent>
                  </ServiceCard>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Portfolio Carousel Mejorado */}
      <Box sx={{ py: 12, backgroundColor: alpha(currentPalette.primary, 0.02) }}>
        <Container maxWidth="lg">
          <Typography variant="h2" textAlign="center" sx={{ 
            fontWeight: 700, 
            mb: 8,
            background: `linear-gradient(45deg, ${currentPalette.primary}, ${currentPalette.secondary})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Casos de Éxito Empresariales
          </Typography>
          <LandingCarrousel />
        </Container>
      </Box>

      {/* CTA Section */}
      <Box sx={{ 
        py: 12, 
        background: `linear-gradient(135deg, ${currentPalette.primary} 0%, ${currentPalette.secondary} 100%)`,
        color: 'white',
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Stack spacing={4}>
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              ¿Listo para Liderar su Industria?
            </Typography>
            <Typography variant="h6" sx={{ color: alpha('#fff', 0.9), maxWidth: '500px', mx: 'auto' }}>
              Únase a las empresas líderes que ya transformaron su futuro con nuestras soluciones enterprise
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} justifyContent="center">
              <Button 
                variant="contained"
                size="large"
                sx={{ 
                  backgroundColor: 'white',
                  color: currentPalette.primary,
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  '&:hover': {
                    backgroundColor: alpha('#fff', 0.9)
                  }
                }}
              >
                Agendar Consulta Ejecutiva
              </Button>
              <Button 
                variant="outlined"
                size="large"
                sx={{ 
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5
                }}
              >
                Descargar Whitepaper
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}


"use client";
import { Box, Container, Typography, Button, Stack, Grid, Card, CardContent, Divider } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@/contexts/ThemeContext';
import LandingCard from '@/app/landingComponents/LandingCard';
import LandingText from '@/app/landingComponents/LandingText';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';

const MinimalHero = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '1px',
    background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.text.primary, 0.1)}, transparent)`
  }
}));

const CleanSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(16, 0),
  backgroundColor: '#fafafa',
  position: 'relative'
}));

const MinimalCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#ffffff',
  border: `1px solid ${alpha(theme.palette.text.primary, 0.08)}`,
  borderRadius: 0,
  boxShadow: 'none',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: `0 8px 32px ${alpha(theme.palette.text.primary, 0.08)}`,
    border: `1px solid ${alpha(theme.palette.text.primary, 0.15)}`
  }
}));

const NumberDisplay = styled(Typography)(({ theme }) => ({
  fontSize: '6rem',
  fontWeight: 100,
  lineHeight: 1,
  color: alpha(theme.palette.text.primary, 0.1),
  position: 'absolute',
  top: '-2rem',
  left: '0',
  zIndex: 0,
  [theme.breakpoints.down('md')]: {
    fontSize: '4rem'
  }
}));

export default function MinimalLanding() {
  const { currentPalette } = useTheme();

  const principles = [
    {
      number: "01",
      title: "Claridad Absoluta",
      content: "Cada elemento tiene un propósito definido y comunica de manera directa y efectiva",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "02", 
      title: "Funcionalidad Pura",
      content: "Diseño que prioriza la experiencia del usuario eliminando todo elemento superfluo",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      number: "03",
      title: "Elegancia Natural",
      content: "Belleza auténtica encontrada en la simplicidad, el orden y la precisión",
      image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const features = [
    "Interfaz intuitiva y limpia",
    "Navegación sin fricciones",
    "Carga instantánea",
    "Diseño responsive perfecto",
    "Accesibilidad total"
  ];

  return (
    <Box>
      {/* Minimal Hero Mejorado */}
      <MinimalHero>
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={8}>
              <Stack spacing={6}>
                <Box>
                  <Typography 
                    variant="overline"
                    sx={{ 
                      color: 'text.secondary',
                      letterSpacing: '0.2em',
                      fontWeight: 500,
                      mb: 2,
                      display: 'block'
                    }}
                  >
                    FILOSOFÍA MINIMALISTA
                  </Typography>
                  <Typography 
                    variant="h1" 
                    component="h1" 
                    sx={{ 
                      fontSize: { xs: '3rem', md: '4.5rem', lg: '5.5rem' },
                      fontWeight: 100,
                      color: '#1a1a1a',
                      lineHeight: 1.1,
                      mb: 3,
                      letterSpacing: '-0.02em'
                    }}
                  >
                    Menos es
                    <Box component="span" sx={{ 
                      fontWeight: 300,
                      display: 'block',
                      color: currentPalette.primary
                    }}>
                      Significativamente Más
                    </Box>
                  </Typography>
                </Box>
                
                <LandingText 
                  text="En un mundo saturado de complejidad, nosotros elegimos la pureza. Creamos experiencias digitales que respiran, funcionan y perduran a través de la simplicidad intencional."
                  variant="h6"
                  sx={{ 
                    color: 'text.secondary', 
                    maxWidth: '650px',
                    fontWeight: 300,
                    lineHeight: 1.8,
                    fontSize: '1.25rem'
                  }}
                />

                <Stack direction="row" spacing={0} alignItems="center">
                  <Button 
                    variant="text" 
                    size="large"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ 
                      color: '#1a1a1a',
                      fontSize: '1.1rem',
                      fontWeight: 400,
                      textTransform: 'none',
                      borderBottom: '2px solid #1a1a1a',
                      borderRadius: 0,
                      padding: '12px 0',
                      '&:hover': { 
                        backgroundColor: 'transparent',
                        borderBottomColor: currentPalette.primary,
                        color: currentPalette.primary
                      }
                    }}
                  >
                    Explorar Solución
                  </Button>
                </Stack>

                <Stack direction="column" spacing={1} sx={{ pt: 4 }}>
                  {features.map((feature, index) => (
                    <Stack key={index} direction="row" spacing={2} alignItems="center">
                      <CheckIcon sx={{ 
                        fontSize: 16, 
                        color: currentPalette.primary,
                        backgroundColor: alpha(currentPalette.primary, 0.1),
                        borderRadius: '50%',
                        p: 0.5
                      }} />
                      <Typography variant="body2" sx={{ 
                        color: 'text.secondary',
                        fontWeight: 400
                      }}>
                        {feature}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ position: 'relative', textAlign: 'center' }}>
                <Box 
                  component="img"
                  src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Minimal Design"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    filter: 'grayscale(100%)',
                    transition: 'all 0.6s ease',
                    '&:hover': {
                      filter: 'grayscale(0%)'
                    }
                  }}
                />
                <Box sx={{
                  position: 'absolute',
                  bottom: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  border: `1px solid ${alpha('#1a1a1a', 0.2)}`,
                  display: { xs: 'none', md: 'block' }
                }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </MinimalHero>

      {/* Philosophy Section */}
      <Box sx={{ py: 16, backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            <Grid item xs={12} md={4}>
              <Stack spacing={4}>
                <Typography variant="overline" sx={{ 
                  color: 'text.secondary',
                  letterSpacing: '0.2em',
                  fontWeight: 500
                }}>
                  NUESTRA FILOSOFÍA
                </Typography>
                <Typography variant="h3" sx={{ 
                  fontWeight: 200,
                  color: '#1a1a1a',
                  lineHeight: 1.3
                }}>
                  Diseño que
                  <Box component="span" sx={{ fontWeight: 400, display: 'block' }}>
                    Trasciende Tendencias
                  </Box>
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: 'text.secondary',
                  lineHeight: 1.8,
                  fontWeight: 300
                }}>
                  Creemos que la verdadera innovación surge cuando eliminamos lo innecesario y nos enfocamos en lo esencial. Cada pixel tiene un propósito.
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box 
                component="img"
                src="https://images.unsplash.com/photo-1586717799252-bd134ad00e26?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Clean Workspace"
                sx={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  filter: 'grayscale(100%)'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Principles Section Mejorado */}
      <CleanSection>
        <Container maxWidth="lg">
          <Stack spacing={12}>
            <Box textAlign="center" maxWidth="600px" sx={{ mx: 'auto' }}>
              <Typography variant="overline" sx={{ 
                color: 'text.secondary',
                letterSpacing: '0.2em',
                fontWeight: 500,
                mb: 2,
                display: 'block'
              }}>
                PRINCIPIOS FUNDAMENTALES
              </Typography>
              <Typography 
                variant="h2" 
                component="h2" 
                sx={{ 
                  fontWeight: 200,
                  color: '#1a1a1a',
                  lineHeight: 1.3,
                  mb: 4
                }}
              >
                Enfoque Esencial
              </Typography>
              <Divider sx={{ maxWidth: 100, mx: 'auto', backgroundColor: currentPalette.primary }} />
            </Box>

            <Grid container spacing={8}>
              {principles.map((principle, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Box sx={{ position: 'relative', height: '100%' }}>
                    <NumberDisplay>
                      {principle.number}
                    </NumberDisplay>
                    <MinimalCard sx={{ position: 'relative', zIndex: 1, height: '100%' }}>
                      <Box 
                        component="img"
                        src={principle.image}
                        alt={principle.title}
                        sx={{
                          width: '100%',
                          height: 200,
                          objectFit: 'cover',
                          filter: 'grayscale(100%)',
                          transition: 'filter 0.4s ease'
                        }}
                      />
                      <CardContent sx={{ p: 4 }}>
                        <Typography variant="h5" component="h3" sx={{ 
                          fontWeight: 300,
                          mb: 3,
                          color: '#1a1a1a'
                        }}>
                          {principle.title}
                        </Typography>
                        <Typography variant="body1" sx={{ 
                          color: 'text.secondary',
                          lineHeight: 1.7,
                          fontWeight: 300
                        }}>
                          {principle.content}
                        </Typography>
                      </CardContent>
                    </MinimalCard>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </CleanSection>

      {/* Quote Section */}
      <Box sx={{ py: 16, backgroundColor: '#ffffff', textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="h2" sx={{ 
            fontWeight: 100,
            color: '#1a1a1a',
            lineHeight: 1.4,
            fontStyle: 'italic',
            mb: 4,
            fontSize: { xs: '1.8rem', md: '2.5rem' }
          }}>
            "La perfección se alcanza no cuando no hay nada más que agregar, sino cuando no hay nada más que quitar"
          </Typography>
          <Typography variant="body1" sx={{ 
            color: 'text.secondary',
            fontWeight: 300,
            letterSpacing: '0.1em'
          }}>
            — ANTOINE DE SAINT-EXUPÉRY
          </Typography>
        </Container>
      </Box>

      {/* CTA Section Minimal */}
      <Box sx={{ 
        py: 16, 
        backgroundColor: '#1a1a1a',
        color: 'white',
        textAlign: 'center'
      }}>
        <Container maxWidth="md">
          <Stack spacing={6} alignItems="center">
            <Typography variant="h2" sx={{ 
              fontWeight: 200,
              lineHeight: 1.3
            }}>
              Simplifica tu Visión
            </Typography>
            <Typography variant="h6" sx={{ 
              color: alpha('#fff', 0.7),
              fontWeight: 300,
              maxWidth: '500px'
            }}>
              Descubre cómo la simplicidad intencional puede transformar tu proyecto en algo extraordinario
            </Typography>
            <Button 
              variant="outlined" 
              size="large"
              sx={{ 
                borderColor: '#fff',
                color: '#fff',
                borderRadius: 0,
                padding: theme => theme.spacing(2, 6),
                fontWeight: 300,
                fontSize: '1.1rem',
                textTransform: 'none',
                transition: 'all 0.3s ease',
                '&:hover': { 
                  backgroundColor: '#fff',
                  color: '#1a1a1a'
                }
              }}
            >
              Comenzar Conversación
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

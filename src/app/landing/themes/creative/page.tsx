
"use client";
import { Box, Container, Typography, Button, Grid, Stack, Card, CardContent, Chip } from '@mui/material';
import { styled, keyframes, alpha } from '@mui/material/styles';
import { useTheme } from '@/contexts/ThemeContext';
import LandingCard from '@/app/landingComponents/LandingCard';
import LandingCarrousel from '@/app/landingComponents/LandingCarrousel';
import LandingText from '@/app/landingComponents/LandingText';
import BrushIcon from '@mui/icons-material/Brush';
import PaletteIcon from '@mui/icons-material/Palette';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideocamIcon from '@mui/icons-material/Videocam';
import ColorLensIcon from '@mui/icons-material/ColorLens';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const colorShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const CreativeHero = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #fd79a8)',
  backgroundSize: '400% 400%',
  animation: `${colorShift} 12s ease infinite`,
  color: 'white',
  padding: theme.spacing(15, 0),
  position: 'relative',
  overflow: 'hidden',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center'
}));

const FloatingElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.1)',
  animation: `${float} 6s ease-in-out infinite`,
  backdropFilter: 'blur(10px)'
}));

const CreativeCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: '24px',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.2)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-12px) scale(1.03)',
    boxShadow: '0 25px 50px rgba(0,0,0,0.2)',
    background: 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))'
  }
}));

const ArtisticSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url(https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.1,
    zIndex: 0
  }
}));

const GlowButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
  borderRadius: '50px',
  padding: theme.spacing(2, 4),
  fontWeight: 700,
  textTransform: 'none',
  fontSize: '1.2rem',
  position: 'relative',
  overflow: 'hidden',
  boxShadow: '0 8px 32px rgba(255,107,107,0.4)',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
    transition: 'left 0.5s ease'
  },
  '&:hover': {
    transform: 'translateY(-3px) scale(1.05)',
    boxShadow: '0 15px 40px rgba(255,107,107,0.6)',
    '&::before': {
      left: '100%'
    }
  }
}));

const SkillBar = styled(Box)(({ theme }) => ({
  height: '8px',
  backgroundColor: 'rgba(255,255,255,0.2)',
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative'
}));

const SkillProgress = styled(Box)<{ width: number }>(({ width, theme }) => ({
  height: '100%',
  width: `${width}%`,
  background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4)',
  borderRadius: '20px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
    animation: `${float} 2s ease-in-out infinite`
  }
}));

export default function CreativeLanding() {
  const { currentPalette } = useTheme();

  const creativeServices = [
    {
      icon: <BrushIcon sx={{ fontSize: 48, color: '#fff' }} />,
      title: "Diseño Visual Impactante",
      content: "Creamos identidades visuales memorables que conectan emocionalmente con tu audiencia y generan resultados medibles",
      backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      skills: ["Branding", "UI/UX Design", "Motion Graphics"]
    },
    {
      icon: <AutoFixHighIcon sx={{ fontSize: 48, color: '#fff' }} />,
      title: "Desarrollo Creativo",
      content: "Tecnología de vanguardia fusionada con creatividad para dar vida a experiencias digitales extraordinarias",
      backgroundColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      skills: ["Web Interactivo", "Apps Móviles", "AR/VR"]
    },
    {
      icon: <CameraAltIcon sx={{ fontSize: 48, color: '#fff' }} />,
      title: "Producción Audiovisual",
      content: "Contenido visual de alta calidad que cuenta historias poderosas y construye conexiones auténticas",
      backgroundColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      skills: ["Fotografía", "Video", "Animación 3D"]
    }
  ];

  const portfolioItems = [
    {
      title: "Rebranding Completo",
      client: "TechStartup Inc.",
      category: "Identidad Visual",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "#ff6b6b"
    },
    {
      title: "App Móvil Innovadora", 
      client: "HealthTech",
      category: "UX/UI Design",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "#4ecdc4"
    },
    {
      title: "Campaña Digital 360°",
      client: "Fashion Brand",
      category: "Marketing Visual",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      color: "#45b7d1"
    }
  ];

  const skills = [
    { name: "Creatividad", level: 98 },
    { name: "Innovación", level: 95 },
    { name: "Ejecución", level: 92 },
    { name: "Estrategia", level: 90 }
  ];

  return (
    <Box>
      {/* Creative Hero Mejorado */}
      <CreativeHero>
        <FloatingElement sx={{ top: '10%', left: '5%', width: 80, height: 80 }} />
        <FloatingElement sx={{ top: '15%', right: '10%', width: 120, height: 120, animationDelay: '2s' }} />
        <FloatingElement sx={{ bottom: '20%', left: '15%', width: 60, height: 60, animationDelay: '4s' }} />
        <FloatingElement sx={{ bottom: '10%', right: '20%', width: 100, height: 100, animationDelay: '6s' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs={12} md={8}>
              <Stack spacing={6}>
                <Box>
                  <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                    <Chip 
                      label="🎨 Estudio Creativo" 
                      sx={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        backdropFilter: 'blur(10px)',
                        fontWeight: 600
                      }} 
                    />
                    <Chip 
                      label="✨ Award Winner 2024" 
                      sx={{ 
                        backgroundColor: 'rgba(255,215,0,0.3)',
                        color: '#FFD700',
                        backdropFilter: 'blur(10px)',
                        fontWeight: 600
                      }} 
                    />
                  </Stack>
                  
                  <Typography 
                    variant="h1" 
                    component="h1" 
                    sx={{ 
                      fontSize: { xs: '3.5rem', md: '5rem', lg: '6rem' },
                      fontWeight: 900,
                      background: 'linear-gradient(45deg, #fff, #f0f0f0, #fff)',
                      backgroundSize: '200% 200%',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      animation: `${colorShift} 3s ease infinite`,
                      mb: 4,
                      lineHeight: 0.9,
                      textShadow: '0 0 50px rgba(255,255,255,0.3)'
                    }}
                  >
                    Creatividad
                    <Box component="span" sx={{ 
                      display: 'block',
                      background: 'linear-gradient(45deg, #FFD700, #FF6B6B, #4ECDC4)',
                      backgroundSize: '200% 200%',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      animation: `${colorShift} 4s ease infinite`
                    }}>
                      Sin Límites
                    </Box>
                  </Typography>
                </Box>
                
                <LandingText 
                  text="Transformamos ideas audaces en experiencias digitales extraordinarias que inspiran, emocionan y generan resultados. Cada proyecto es una obra maestra única."
                  variant="h5"
                  sx={{ 
                    color: 'rgba(255,255,255,0.95)',
                    fontWeight: 300,
                    lineHeight: 1.6,
                    maxWidth: '700px',
                    textShadow: '0 2px 10px rgba(0,0,0,0.3)'
                  }}
                />

                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} alignItems="flex-start">
                  <GlowButton size="large">
                    Crear Magia Juntos ✨
                  </GlowButton>
                  <Button 
                    variant="outlined"
                    size="large"
                    sx={{ 
                      borderColor: 'rgba(255,255,255,0.5)',
                      color: 'white',
                      fontWeight: 600,
                      px: 4,
                      py: 2,
                      borderRadius: '50px',
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      backdropFilter: 'blur(10px)',
                      '&:hover': { 
                        borderColor: 'white',
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        transform: 'translateY(-2px)'
                      }
                    }}
                  >
                    Explorar Portfolio 🎯
                  </Button>
                </Stack>

                <Grid container spacing={3} sx={{ pt: 4 }}>
                  {skills.map((skill, index) => (
                    <Grid item xs={6} md={3} key={index}>
                      <Box>
                        <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                          <Typography variant="body2" sx={{ color: 'white', fontWeight: 600 }}>
                            {skill.name}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                            {skill.level}%
                          </Typography>
                        </Stack>
                        <SkillBar>
                          <SkillProgress width={skill.level} />
                        </SkillBar>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Box sx={{ position: 'relative', textAlign: 'center' }}>
                <Box 
                  component="img"
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Creative Workspace"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '24px',
                    boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
                    transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)',
                    transition: 'all 0.6s ease',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05)'
                    }
                  }}
                />
                <Box sx={{
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  background: 'linear-gradient(45deg, #FFD700, #FF6B6B)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  animation: `${float} 4s ease-in-out infinite`,
                  backdropFilter: 'blur(10px)'
                }}>
                  <PaletteIcon sx={{ fontSize: 40, color: 'white' }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </CreativeHero>

      {/* Portfolio Preview */}
      <Box sx={{ py: 12, backgroundColor: '#0a0a0a' }}>
        <Container maxWidth="lg">
          <Stack spacing={8}>
            <Box textAlign="center">
              <Typography 
                variant="h2" 
                sx={{ 
                  color: 'white', 
                  fontWeight: 800, 
                  mb: 3,
                  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)',
                  backgroundSize: '200% 200%',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: `${colorShift} 5s ease infinite`
                }}
              >
                Proyectos que Inspiran
              </Typography>
              <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', mx: 'auto' }}>
                Cada proyecto es una historia única de creatividad, innovación y resultados excepcionales
              </Typography>
            </Box>

            <Grid container spacing={4}>
              {portfolioItems.map((item, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{
                    backgroundColor: 'transparent',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'relative',
                    transition: 'all 0.4s ease',
                    '&:hover': {
                      transform: 'translateY(-8px) scale(1.02)',
                      '& .overlay': {
                        opacity: 1
                      }
                    }
                  }}>
                    <Box 
                      component="img"
                      src={item.image}
                      alt={item.title}
                      sx={{
                        width: '100%',
                        height: 300,
                        objectFit: 'cover'
                      }}
                    />
                    <Box 
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `linear-gradient(135deg, ${alpha(item.color, 0.9)}, ${alpha('#000', 0.8)})`,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: 0,
                        transition: 'opacity 0.4s ease',
                        color: 'white',
                        textAlign: 'center',
                        p: 3
                      }}
                    >
                      <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body1" sx={{ opacity: 0.9, mb: 1 }}>
                        {item.client}
                      </Typography>
                      <Chip 
                        label={item.category}
                        sx={{ 
                          backgroundColor: 'rgba(255,255,255,0.2)',
                          color: 'white',
                          backdropFilter: 'blur(10px)'
                        }}
                      />
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Creative Services Mejorado */}
      <ArtisticSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={8}>
            <Box textAlign="center">
              <Typography 
                variant="h2" 
                sx={{ 
                  color: 'white', 
                  fontWeight: 800, 
                  mb: 4,
                  textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
                }}
              >
                Servicios que Transforman
              </Typography>
            </Box>
            
            <Grid container spacing={4}>
              {creativeServices.map((service, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <CreativeCard>
                    <Box 
                      component="img"
                      src={service.image}
                      alt={service.title}
                      sx={{
                        width: '100%',
                        height: 200,
                        objectFit: 'cover',
                        borderRadius: '20px'
                      }}
                    />
                    <CardContent sx={{ p: 4, color: 'white' }}>
                      <Box sx={{ mb: 3, textAlign: 'center' }}>
                        {service.icon}
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ 
                        fontWeight: 700, 
                        mb: 2,
                        textAlign: 'center',
                        textShadow: '1px 1px 4px rgba(0,0,0,0.3)'
                      }}>
                        {service.title}
                      </Typography>
                      <Typography variant="body1" sx={{ 
                        color: 'rgba(255,255,255,0.9)',
                        lineHeight: 1.6,
                        mb: 3,
                        textAlign: 'center'
                      }}>
                        {service.content}
                      </Typography>
                      <Stack direction="row" spacing={1} flexWrap="wrap" justifyContent="center">
                        {service.skills.map((skill, skillIndex) => (
                          <Chip 
                            key={skillIndex}
                            label={skill}
                            size="small"
                            sx={{ 
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              color: 'white',
                              backdropFilter: 'blur(5px)',
                              margin: 0.5
                            }}
                          />
                        ))}
                      </Stack>
                    </CardContent>
                  </CreativeCard>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Container>
      </ArtisticSection>

      {/* Portfolio Carousel Mejorado */}
      <Box sx={{ py: 12, backgroundColor: '#1a1a2e' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h2" 
            textAlign="center" 
            sx={{ 
              color: 'white', 
              fontWeight: 800, 
              mb: 8,
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Galería de Masterpieces
          </Typography>
          <LandingCarrousel />
        </Container>
      </Box>

      {/* CTA Section Creativo */}
      <Box sx={{ 
        py: 15, 
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4)',
        backgroundSize: '400% 400%',
        animation: `${colorShift} 8s ease infinite`,
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <FloatingElement sx={{ top: '20%', left: '10%', width: 60, height: 60 }} />
        <FloatingElement sx={{ bottom: '30%', right: '15%', width: 80, height: 80, animationDelay: '3s' }} />
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Stack spacing={6} alignItems="center">
            <Typography variant="h1" sx={{ 
              fontWeight: 900,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '0 4px 15px rgba(0,0,0,0.3)'
            }}>
              ¿Listo para Crear Historia?
            </Typography>
            <Typography variant="h5" sx={{ 
              color: 'rgba(255,255,255,0.95)',
              fontWeight: 300,
              maxWidth: '600px',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
              Transformemos tu visión en una experiencia digital que nadie olvidará. El mundo necesita tu creatividad.
            </Typography>
            <GlowButton size="large">
              Comenzar Nuestra Aventura Creativa 🚀
            </GlowButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

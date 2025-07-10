
"use client";
import { Box, Container, Typography, Button, Grid } from '@mui/material';
import { styled, keyframes } from '@mui/material/styles';
import LandingCard from '@/app/landingComponents/LandingCard';
import LandingCarrousel from '@/app/landingComponents/LandingCarrousel';
import LandingText from '@/app/landingComponents/LandingText';

const float = keyframes`
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
`;

const CreativeHero = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7)',
  backgroundSize: '400% 400%',
  animation: 'gradientShift 8s ease infinite',
  color: 'white',
  padding: theme.spacing(12, 0),
  position: 'relative',
  overflow: 'hidden',
  '@keyframes gradientShift': {
    '0%': { backgroundPosition: '0% 50%' },
    '50%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0% 50%' }
  }
}));

const FloatingElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.1)',
  animation: `${float} 6s ease-in-out infinite`,
}));

const CreativeCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '20px',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px) scale(1.02)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
  }
}));

export default function CreativeLanding() {
  const creativeServices = [
    {
      title: "Diseño Visionario",
      content: "Creamos experiencias visuales que cautivan y conectan con tu audiencia",
      backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      title: "Desarrollo Innovador",
      content: "Tecnología de punta para dar vida a las ideas más audaces",
      backgroundColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Experiencias Únicas",
      content: "Cada proyecto es una obra de arte digital personalizada",
      backgroundColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  return (
    <Box>
      {/* Creative Hero */}
      <CreativeHero>
        <FloatingElement sx={{ top: '10%', left: '10%', width: 60, height: 60 }} />
        <FloatingElement sx={{ top: '20%', right: '15%', width: 80, height: 80, animationDelay: '2s' }} />
        <FloatingElement sx={{ bottom: '30%', left: '20%', width: 40, height: 40, animationDelay: '4s' }} />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{ 
                  fontSize: { xs: '3rem', md: '5rem' },
                  fontWeight: 800,
                  background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 3,
                  lineHeight: 1.1
                }}
              >
                Creatividad Sin Límites
              </Typography>
              <LandingText 
                text="Transformamos ideas en experiencias digitales extraordinarias que inspiran y conectan"
                variant="h5"
                sx={{ mb: 4, color: 'rgba(255,255,255,0.9)', fontWeight: 300 }}
              />
              <Box>
                <Button 
                  variant="contained"
                  size="large"
                  sx={{ 
                    mr: 3,
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: 'white',
                    fontWeight: 600,
                    px: 4,
                    py: 2,
                    borderRadius: '50px',
                    '&:hover': { 
                      backgroundColor: 'rgba(255,255,255,0.3)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Crear Magia ✨
                </Button>
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
                    '&:hover': { 
                      borderColor: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  Ver Portfolio 🎨
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </CreativeHero>

      {/* Creative Services */}
      <Box sx={{ py: 10, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h2" 
            textAlign="center" 
            sx={{ 
              color: 'white', 
              fontWeight: 700, 
              mb: 8,
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            Servicios que Inspiran
          </Typography>
          <Grid container spacing={4}>
            {creativeServices.map((service, index) => (
              <Grid item xs={12} md={4} key={index}>
                <CreativeCard>
                  <Typography variant="h5" component="h3" sx={{ color: 'white', fontWeight: 600, mb: 2 }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    {service.content}
                  </Typography>
                </CreativeCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Portfolio Section */}
      <Box sx={{ py: 10, backgroundColor: '#1a1a2e' }}>
        <Container maxWidth="lg">
          <Typography 
            variant="h2" 
            component="h2" 
            textAlign="center" 
            sx={{ 
              color: 'white', 
              fontWeight: 700, 
              mb: 8,
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Proyectos Extraordinarios
          </Typography>
          <LandingCarrousel />
        </Container>
      </Box>
    </Box>
  );
}

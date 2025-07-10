
"use client";
import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import LandingCard from '@/app/landingComponents/LandingCard';
import LandingText from '@/app/landingComponents/LandingText';

const MinimalHero = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #e0e0e0',
}));

const CleanSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: '#fafafa',
}));

export default function MinimalLanding() {
  return (
    <Box>
      {/* Minimal Hero */}
      <MinimalHero>
        <Container maxWidth="md">
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontSize: { xs: '3rem', md: '4rem' },
                fontWeight: 300,
                color: '#333',
                lineHeight: 1.2
              }}
            >
              Simplicidad
            </Typography>
            <LandingText 
              text="La elegancia está en la simplicidad. Creamos experiencias limpias y funcionales."
              variant="h6"
              sx={{ color: '#666', maxWidth: '600px', fontWeight: 300 }}
            />
            <Button 
              variant="text" 
              size="large"
              sx={{ 
                color: '#333',
                fontSize: '1.1rem',
                textTransform: 'none',
                borderBottom: '2px solid #333',
                borderRadius: 0,
                '&:hover': { backgroundColor: 'transparent', opacity: 0.7 }
              }}
            >
              Explorar →
            </Button>
          </Stack>
        </Container>
      </MinimalHero>

      {/* Clean Features */}
      <CleanSection>
        <Container maxWidth="lg">
          <Stack spacing={8}>
            <Typography 
              variant="h3" 
              component="h2" 
              textAlign="center"
              sx={{ fontWeight: 300, color: '#333' }}
            >
              Enfoque Esencial
            </Typography>
            <Stack direction={{ xs: 'column', md: 'row' }} spacing={4}>
              <LandingCard 
                title="Claridad"
                content="Cada elemento tiene un propósito definido y claro"
                backgroundColor="#ffffff"
              />
              <LandingCard 
                title="Funcionalidad"
                content="Diseño que prioriza la experiencia del usuario"
                backgroundColor="#ffffff"
              />
              <LandingCard 
                title="Elegancia"
                content="Belleza encontrada en la simplicidad y el orden"
                backgroundColor="#ffffff"
              />
            </Stack>
          </Stack>
        </Container>
      </CleanSection>
    </Box>
  );
}

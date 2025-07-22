
"use client";
import { Box, Container, Typography, Button, Stack, Chip } from '@mui/material';
import { styled, alpha, keyframes } from '@mui/material/styles';
import { useTheme } from '@/contexts/ThemeContext';
import { colorPalettes } from '@/contexts/ThemeContext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
`;

const colorShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  backgroundImage?: string;
  theme?: 'modern' | 'minimal' | 'corporate' | 'creative';
  showBadges?: boolean;
  badges?: string[];
  heroImage?: string;
}

const HeroContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'themeType' && prop !== 'backgroundImage'
})<{ themeType: string; backgroundImage?: string }>(({ theme, themeType, backgroundImage }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  
  ...(themeType === 'minimal' && {
    backgroundColor: '#ffffff',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '1px',
      background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.text.primary, 0.1)}, transparent)`
    }
  }),
  
  ...(themeType === 'corporate' && {
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
    color: 'white',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: backgroundImage || 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.1,
      zIndex: 0
    }
  }),
  
  ...(themeType === 'creative' && {
    background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #fd79a8)',
    backgroundSize: '400% 400%',
    animation: `${colorShift} 12s ease infinite`,
    color: 'white',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: backgroundImage || 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.1,
      zIndex: 0
    }
  }),
  
  ...(themeType === 'modern' && {
    background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    color: 'white',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: backgroundImage || 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.1,
      zIndex: 0
    }
  })
}));

const FloatingElement = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'delay'
})<{ delay?: number }>(({ delay = 0 }) => ({
  position: 'absolute',
  borderRadius: '50%',
  background: 'rgba(255,255,255,0.1)',
  animation: `${float} 6s ease-in-out infinite`,
  animationDelay: `${delay}s`,
  backdropFilter: 'blur(10px)'
}));

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== 'themeType' && prop !== 'variant'
})<{ themeType: string; variant: 'primary' | 'secondary' }>(({ theme, themeType, variant }) => ({
  padding: theme.spacing(1.5, 4),
  borderRadius: 
    themeType === 'minimal' ? 0 :
    themeType === 'creative' ? '50px' :
    theme.shape.borderRadius * 2,
  
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '1.1rem',
  
  ...(variant === 'primary' && {
    ...(themeType === 'minimal' && {
      color: '#1a1a1a',
      borderBottom: '2px solid #1a1a1a',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: 'transparent',
        borderBottomColor: theme.palette.primary.main,
        color: theme.palette.primary.main
      }
    }),
    
    ...(themeType === 'corporate' && {
      backgroundColor: 'white',
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: alpha('#fff', 0.9),
        transform: 'translateY(-2px)'
      }
    }),
    
    ...(themeType === 'creative' && {
      background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
      boxShadow: '0 8px 32px rgba(255,107,107,0.4)',
      position: 'relative',
      overflow: 'hidden',
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
    }),
    
    ...(themeType === 'modern' && {
      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
      color: '#ffffff',
      border: '2px solid transparent',
      boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
      '&:hover': {
        transform: 'translateY(-2px)',
        boxShadow: `0 12px 32px ${alpha(theme.palette.primary.main, 0.5)}`,
        border: `2px solid ${alpha('#ffffff', 0.3)}`
      }
    })
  }),
  
  ...(variant === 'secondary' && {
    ...(themeType === 'minimal' && {
      color: '#666',
      border: '1px solid #ddd',
      backgroundColor: 'transparent',
      '&:hover': {
        backgroundColor: '#f5f5f5',
        borderColor: '#999'
      }
    }),
    
    ...((['corporate', 'creative', 'modern'].includes(themeType)) && {
      borderColor: 'rgba(255,255,255,0.5)',
      color: 'white',
      backgroundColor: 'transparent',
      '&:hover': {
        borderColor: 'white',
        backgroundColor: 'rgba(255,255,255,0.1)'
      }
    })
  })
}));

export default function HeroSection({ 
  title,
  subtitle,
  description,
  primaryButtonText = "Comenzar",
  secondaryButtonText = "Saber más",
  backgroundImage,
  theme: themeType = 'modern',
  showBadges = false,
  badges = [],
  heroImage
}: HeroSectionProps) {
  const { currentPalette } = useTheme();
  const palette = colorPalettes[currentPalette as keyof typeof colorPalettes];

  const getTextColor = () => {
    if (themeType === 'minimal') return '#1a1a1a';
    return 'white';
  };

  return (
    <HeroContainer themeType={themeType} backgroundImage={backgroundImage}>
      {/* Creative floating elements */}
      {themeType === 'creative' && (
        <>
          <FloatingElement sx={{ top: '10%', left: '5%', width: 80, height: 80 }} delay={0} />
          <FloatingElement sx={{ top: '15%', right: '10%', width: 120, height: 120 }} delay={2} />
          <FloatingElement sx={{ bottom: '20%', left: '15%', width: 60, height: 60 }} delay={4} />
          <FloatingElement sx={{ bottom: '10%', right: '20%', width: 100, height: 100 }} delay={6} />
        </>
      )}
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: heroImage ? '1fr 1fr' : '1fr' },
          gap: 8,
          alignItems: 'center'
        }}>
          {/* Content */}
          <Stack spacing={4} sx={{ maxWidth: heroImage ? 'none' : '800px' }}>
            {/* Badges */}
            {showBadges && badges.length > 0 && (
              <Stack direction="row" spacing={2} flexWrap="wrap">
                {badges.map((badge, index) => (
                  <Chip 
                    key={index}
                    label={badge}
                    sx={{ 
                      backgroundColor: 
                        themeType === 'creative' ? 'rgba(255,215,0,0.3)' :
                        themeType === 'minimal' ? alpha('#1a1a1a', 0.1) :
                        alpha('#FFD700', 0.2),
                      color: 
                        themeType === 'creative' ? '#FFD700' :
                        themeType === 'minimal' ? '#1a1a1a' :
                        '#FFD700',
                      fontWeight: 600,
                      ...(themeType === 'creative' && {
                        backdropFilter: 'blur(10px)'
                      })
                    }} 
                  />
                ))}
              </Stack>
            )}
            
            {/* Title and Subtitle */}
            <Box>
              {subtitle && (
                <Typography 
                  variant="overline"
                  sx={{ 
                    color: 
                      themeType === 'minimal' ? 'text.secondary' :
                      alpha('#fff', 0.8),
                    letterSpacing: '0.2em',
                    fontWeight: 500,
                    mb: 2,
                    display: 'block'
                  }}
                >
                  {subtitle}
                </Typography>
              )}
              
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: themeType === 'creative' ? '5rem' : '4rem' },
                  fontWeight: 
                    themeType === 'minimal' ? 100 :
                    themeType === 'creative' ? 900 :
                    700,
                  lineHeight: 1.1,
                  color: getTextColor(),
                  mb: 3,
                  ...(themeType === 'creative' && {
                    background: 'linear-gradient(45deg, #fff, #f0f0f0, #fff)',
                    backgroundSize: '200% 200%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    animation: `${colorShift} 3s ease infinite`,
                    textShadow: 'none'
                  }),
                  ...(themeType === 'minimal' && {
                    letterSpacing: '-0.02em'
                  })
                }}
              >
                {title}
              </Typography>
            </Box>
            
            {/* Description */}
            <Typography 
              variant="h6"
              sx={{ 
                color: 
                  themeType === 'minimal' ? 'text.secondary' :
                  alpha('#fff', 0.9),
                fontWeight: 300,
                lineHeight: 1.6,
                maxWidth: '600px',
                fontSize: themeType === 'minimal' ? '1.25rem' : '1.1rem'
              }}
            >
              {description}
            </Typography>

            {/* Buttons */}
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} alignItems="flex-start">
              <StyledButton 
                themeType={themeType}
                variant="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
              >
                {primaryButtonText}
              </StyledButton>
              
              <StyledButton 
                themeType={themeType}
                variant="secondary"
                size="large"
                startIcon={themeType !== 'minimal' ? <PlayArrowIcon /> : undefined}
              >
                {secondaryButtonText}
              </StyledButton>
            </Stack>
          </Stack>

          {/* Hero Image */}
          {heroImage && (
            <Box sx={{ position: 'relative', textAlign: 'center' }}>
              <Box 
                component="img"
                src={heroImage}
                alt="Hero"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: themeType === 'minimal' ? 0 : 3,
                  boxShadow: 
                    themeType === 'minimal' ? 'none' :
                    `0 20px 60px ${alpha('#000', 0.3)}`,
                  ...(themeType === 'modern' && {
                    transform: { md: 'perspective(1000px) rotateY(-5deg) rotateX(5deg)' },
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: { md: 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.02)' }
                    }
                  }),
                  ...(themeType === 'creative' && {
                    transform: 'perspective(1000px) rotateY(-10deg) rotateX(5deg)',
                    transition: 'all 0.6s ease',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1.05)'
                    }
                  })
                }}
              />
              
              {/* Decorative elements for minimal */}
              {themeType === 'minimal' && (
                <Box sx={{
                  position: 'absolute',
                  bottom: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  border: `1px solid ${alpha('#1a1a1a', 0.2)}`,
                  display: { xs: 'none', md: 'block' }
                }} />
              )}
            </Box>
          )}
        </Box>
      </Container>
    </HeroContainer>
  );
}

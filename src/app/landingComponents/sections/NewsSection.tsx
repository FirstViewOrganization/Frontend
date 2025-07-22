
"use client";
import { Box, Container, Typography, Card, CardContent, Chip, Stack, Button } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@/contexts/ThemeContext';
import { colorPalettes } from '@/contexts/ThemeContext';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: string;
  image?: string;
}

interface NewsSectionProps {
  title?: string;
  subtitle?: string;
  news: NewsItem[];
  variant?: 'banner' | 'grid' | 'carousel';
  theme?: 'modern' | 'minimal' | 'corporate' | 'creative';
}

const NewsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'variant' && prop !== 'themeType'
})<{ variant: string; themeType: string }>(({ theme, variant, themeType }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: 
    themeType === 'minimal' ? '#fafafa' :
    themeType === 'corporate' ? alpha(theme.palette.primary.main, 0.03) :
    themeType === 'creative' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' :
    alpha(theme.palette.background.default, 0.98),
  ...(themeType === 'creative' && {
    color: 'white',
    position: 'relative',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url(https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.1,
      zIndex: 0
    }
  })
}));

const NewsCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'themeType'
})<{ themeType: string }>(({ theme, themeType }) => ({
  borderRadius: 
    themeType === 'minimal' ? 0 :
    themeType === 'corporate' ? theme.shape.borderRadius * 2 :
    themeType === 'creative' ? '24px' :
    theme.shape.borderRadius * 3,
  
  border: themeType === 'minimal' ? `1px solid ${alpha(theme.palette.text.primary, 0.08)}` : 'none',
  
  background: 
    themeType === 'creative' ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' :
    '#ffffff',
  
  backdropFilter: themeType === 'creative' ? 'blur(20px)' : 'none',
  
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  
  '&:hover': {
    transform: 
      themeType === 'minimal' ? 'translateY(-4px)' :
      themeType === 'corporate' ? 'translateY(-4px)' :
      themeType === 'creative' ? 'translateY(-12px) scale(1.03)' :
      'translateY(-8px)',
    
    boxShadow: 
      themeType === 'minimal' ? `0 8px 32px ${alpha(theme.palette.text.primary, 0.08)}` :
      themeType === 'corporate' ? `0 16px 48px ${alpha(theme.palette.common.black, 0.1)}` :
      themeType === 'creative' ? '0 25px 50px rgba(0,0,0,0.2)' :
      `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`
  }
}));

export default function NewsSection({ 
  title = "Últimas Noticias", 
  subtitle = "Mantente al día con nuestras novedades",
  news, 
  variant = 'grid', 
  theme: themeType = 'modern' 
}: NewsSectionProps) {
  const { currentPalette } = useTheme();
  const palette = colorPalettes[currentPalette as keyof typeof colorPalettes];

  const getTextColor = () => {
    if (themeType === 'creative') return 'white';
    if (themeType === 'minimal') return '#1a1a1a';
    return 'text.primary';
  };

  return (
    <NewsContainer variant={variant} themeType={themeType}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Stack spacing={6}>
          {/* Header */}
          <Box textAlign="center" maxWidth="700px" sx={{ mx: 'auto' }}>
            {themeType === 'minimal' && (
              <Typography variant="overline" sx={{ 
                color: 'text.secondary',
                letterSpacing: '0.2em',
                fontWeight: 500,
                mb: 2,
                display: 'block'
              }}>
                ACTUALIDAD
              </Typography>
            )}
            
            <Typography 
              variant="h2" 
              sx={{ 
                fontWeight: themeType === 'minimal' ? 200 : 700,
                mb: 3,
                color: getTextColor(),
                ...(themeType === 'corporate' && {
                  background: `linear-gradient(45deg, ${palette[600]}, ${palette[500]})`,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }),
                ...(themeType === 'creative' && {
                  textShadow: '2px 2px 8px rgba(0,0,0,0.5)'
                })
              }}
            >
              {title}
            </Typography>
            
            <Typography 
              variant="h6" 
              sx={{ 
                color: themeType === 'creative' ? alpha('#fff', 0.9) : 'text.secondary',
                fontWeight: themeType === 'minimal' ? 300 : 400
              }}
            >
              {subtitle}
            </Typography>
          </Box>

          {/* News Grid */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: variant === 'banner' ? '1fr' : {
              xs: '1fr',
              md: variant === 'carousel' ? 'repeat(auto-fit, minmax(350px, 1fr))' : 'repeat(2, 1fr)',
              lg: variant === 'carousel' ? 'repeat(3, 1fr)' : 'repeat(3, 1fr)'
            },
            gap: 4
          }}>
            {news.slice(0, variant === 'banner' ? 1 : 6).map((item) => (
              <NewsCard key={item.id} themeType={themeType}>
                {item.image && (
                  <Box 
                    component="img"
                    src={item.image}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: variant === 'banner' ? 300 : 200,
                      objectFit: 'cover',
                      filter: themeType === 'minimal' ? 'grayscale(100%)' : 'none',
                      transition: 'filter 0.4s ease',
                      '&:hover': {
                        filter: 'none'
                      }
                    }}
                  />
                )}
                
                <CardContent sx={{ p: themeType === 'creative' ? 4 : 3 }}>
                  <Stack spacing={2}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Chip 
                        label={item.category}
                        size="small"
                        sx={{ 
                          backgroundColor: 
                            themeType === 'creative' ? 'rgba(255,255,255,0.2)' :
                            themeType === 'minimal' ? alpha('#1a1a1a', 0.1) :
                            alpha(palette[500], 0.1),
                          color: 
                            themeType === 'creative' ? 'white' :
                            themeType === 'minimal' ? '#1a1a1a' :
                            palette[700],
                          fontWeight: 600,
                          ...(themeType === 'creative' && {
                            backdropFilter: 'blur(10px)'
                          })
                        }}
                      />
                      <Typography variant="body2" sx={{ 
                        color: 
                          themeType === 'creative' ? alpha('#fff', 0.8) :
                          'text.secondary'
                      }}>
                        {item.date}
                      </Typography>
                    </Stack>
                    
                    <Typography 
                      variant={variant === 'banner' ? 'h4' : 'h6'} 
                      sx={{ 
                        fontWeight: themeType === 'minimal' ? 300 : 600,
                        color: 
                          themeType === 'creative' ? 'white' :
                          themeType === 'minimal' ? '#1a1a1a' :
                          'text.primary'
                      }}
                    >
                      {item.title}
                    </Typography>
                    
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: 
                          themeType === 'creative' ? alpha('#fff', 0.9) :
                          'text.secondary',
                        lineHeight: 1.6,
                        fontWeight: themeType === 'minimal' ? 300 : 400
                      }}
                    >
                      {item.description}
                    </Typography>
                    
                    <Button
                      variant="text"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        alignSelf: 'flex-start',
                        color: 
                          themeType === 'creative' ? 'white' :
                          themeType === 'minimal' ? '#1a1a1a' :
                          'primary.main',
                        fontWeight: 600,
                        textTransform: 'none',
                        ...(themeType === 'minimal' && {
                          borderBottom: '2px solid transparent',
                          borderRadius: 0,
                          '&:hover': {
                            backgroundColor: 'transparent',
                            borderBottomColor: '#1a1a1a'
                          }
                        })
                      }}
                    >
                      Leer más
                    </Button>
                  </Stack>
                </CardContent>
              </NewsCard>
            ))}
          </Box>
        </Stack>
      </Container>
    </NewsContainer>
  );
}

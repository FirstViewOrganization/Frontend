
"use client";
import { Box, Container, Typography, Card, CardContent, Button, Grid, Stack, Chip, IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@/contexts/ThemeContext';
import { colorPalettes } from '@/contexts/ThemeContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  category: string;
  featured?: boolean;
}

interface CatalogSectionProps {
  title?: string;
  subtitle?: string;
  products: Product[];
  variant?: 'grid' | 'carousel' | 'featured';
  theme?: 'modern' | 'minimal' | 'corporate' | 'creative';
  showPrices?: boolean;
  showRatings?: boolean;
}

const CatalogContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'themeType'
})<{ themeType: string }>(({ theme, themeType }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: 
    themeType === 'minimal' ? '#ffffff' :
    themeType === 'corporate' ? 'background.paper' :
    themeType === 'creative' ? '#1a1a2e' :
    alpha(theme.palette.background.default, 0.98),
  ...(themeType === 'creative' && {
    color: 'white'
  })
}));

const ProductCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'themeType'
})<{ themeType: string }>(({ theme, themeType }) => ({
  height: '100%',
  borderRadius: 
    themeType === 'minimal' ? 0 :
    themeType === 'corporate' ? theme.shape.borderRadius * 2 :
    themeType === 'creative' ? '20px' :
    theme.shape.borderRadius * 3,
  
  border: 
    themeType === 'minimal' ? `1px solid ${alpha(theme.palette.text.primary, 0.08)}` :
    themeType === 'corporate' ? `1px solid ${alpha(theme.palette.divider, 0.1)}` :
    'none',
  
  background: 
    themeType === 'creative' ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' :
    '#ffffff',
  
  backdropFilter: themeType === 'creative' ? 'blur(20px)' : 'none',
  
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  
  '&:hover': {
    transform: 
      themeType === 'minimal' ? 'translateY(-4px)' :
      themeType === 'corporate' ? 'translateY(-4px)' :
      themeType === 'creative' ? 'translateY(-8px) scale(1.02)' :
      'translateY(-8px)',
    
    boxShadow: 
      themeType === 'minimal' ? `0 8px 32px ${alpha(theme.palette.text.primary, 0.08)}` :
      themeType === 'corporate' ? `0 16px 48px ${alpha(theme.palette.common.black, 0.1)}` :
      themeType === 'creative' ? '0 20px 40px rgba(0,0,0,0.2)' :
      `0 20px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
    
    '& .product-actions': {
      opacity: 1,
      transform: 'translateY(0)'
    }
  }
}));

const ProductActions = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  opacity: 0,
  transform: 'translateY(-10px)',
  transition: 'all 0.3s ease'
}));

const ActionButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== 'themeType'
})<{ themeType: string }>(({ theme, themeType }) => ({
  backgroundColor: 
    themeType === 'creative' ? 'rgba(255,255,255,0.2)' :
    alpha('#fff', 0.9),
  backdropFilter: 'blur(10px)',
  width: 40,
  height: 40,
  '&:hover': {
    backgroundColor: 
      themeType === 'creative' ? 'rgba(255,255,255,0.3)' :
      '#fff',
    transform: 'scale(1.1)'
  }
}));

export default function CatalogSection({ 
  title = "Nuestros Productos", 
  subtitle = "Descubre nuestra selección destacada",
  products, 
  variant = 'grid',
  theme: themeType = 'modern',
  showPrices = true,
  showRatings = true 
}: CatalogSectionProps) {
  const { currentPalette } = useTheme();
  const palette = colorPalettes[currentPalette as keyof typeof colorPalettes];

  const getTextColor = () => {
    if (themeType === 'creative') return 'white';
    if (themeType === 'minimal') return '#1a1a1a';
    return 'text.primary';
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(price);
  };

  const displayProducts = variant === 'featured' ? products.filter(p => p.featured) : products.slice(0, 8);

  return (
    <CatalogContainer themeType={themeType}>
      <Container maxWidth="lg">
        <Stack spacing={8}>
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
                CATÁLOGO
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
                  background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
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

          {/* Products Grid */}
          <Grid container spacing={4}>
            {displayProducts.map((product) => (
              <Grid item xs={12} sm={6} md={variant === 'carousel' ? 4 : 3} key={product.id}>
                <ProductCard themeType={themeType}>
                  <ProductActions className="product-actions">
                    <ActionButton themeType={themeType}>
                      <FavoriteIcon sx={{ fontSize: 20 }} />
                    </ActionButton>
                    <ActionButton themeType={themeType}>
                      <AddShoppingCartIcon sx={{ fontSize: 20 }} />
                    </ActionButton>
                  </ProductActions>
                  
                  <Box sx={{ position: 'relative' }}>
                    <Box 
                      component="img"
                      src={product.image}
                      alt={product.name}
                      sx={{
                        width: '100%',
                        height: 250,
                        objectFit: 'cover',
                        filter: themeType === 'minimal' ? 'grayscale(100%)' : 'none',
                        transition: 'filter 0.4s ease',
                        '&:hover': {
                          filter: 'none'
                        }
                      }}
                    />
                    
                    {product.featured && (
                      <Chip 
                        label="Destacado"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          left: 16,
                          backgroundColor: '#FF6B6B',
                          color: 'white',
                          fontWeight: 600
                        }}
                      />
                    )}
                    
                    {product.originalPrice && (
                      <Chip 
                        label={`-${Math.round((1 - product.price / product.originalPrice) * 100)}%`}
                        sx={{
                          position: 'absolute',
                          bottom: 16,
                          right: 16,
                          backgroundColor: '#4CAF50',
                          color: 'white',
                          fontWeight: 600
                        }}
                      />
                    )}
                  </Box>
                  
                  <CardContent sx={{ p: 3, color: themeType === 'creative' ? 'white' : 'inherit' }}>
                    <Stack spacing={2}>
                      <Box>
                        <Chip 
                          label={product.category}
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
                            fontWeight: 500,
                            mb: 2
                          }}
                        />
                        
                        <Typography 
                          variant="h6" 
                          sx={{ 
                            fontWeight: themeType === 'minimal' ? 300 : 600,
                            mb: 1,
                            color: 
                              themeType === 'creative' ? 'white' :
                              themeType === 'minimal' ? '#1a1a1a' :
                              'text.primary'
                          }}
                        >
                          {product.name}
                        </Typography>
                        
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            color: 
                              themeType === 'creative' ? alpha('#fff', 0.8) :
                              'text.secondary',
                            lineHeight: 1.6
                          }}
                        >
                          {product.description}
                        </Typography>
                      </Box>
                      
                      {showRatings && (
                        <Stack direction="row" spacing={1} alignItems="center">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon 
                              key={i}
                              sx={{ 
                                fontSize: 16,
                                color: i < product.rating ? '#FFD700' : '#E0E0E0'
                              }}
                            />
                          ))}
                          <Typography variant="body2" sx={{ 
                            color: 
                              themeType === 'creative' ? alpha('#fff', 0.8) :
                              'text.secondary'
                          }}>
                            ({product.rating})
                          </Typography>
                        </Stack>
                      )}
                      
                      {showPrices && (
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Typography 
                            variant="h6" 
                            sx={{ 
                              fontWeight: 700,
                              color: 
                                themeType === 'creative' ? '#4ECDC4' :
                                'primary.main'
                            }}
                          >
                            {formatPrice(product.price)}
                          </Typography>
                          {product.originalPrice && (
                            <Typography 
                              variant="body2" 
                              sx={{ 
                                textDecoration: 'line-through',
                                color: 
                                  themeType === 'creative' ? alpha('#fff', 0.6) :
                                  'text.disabled'
                              }}
                            >
                              {formatPrice(product.originalPrice)}
                            </Typography>
                          )}
                        </Stack>
                      )}
                      
                      <Button
                        variant={themeType === 'minimal' ? 'text' : 'contained'}
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        sx={{
                          mt: 2,
                          ...(themeType === 'minimal' && {
                            color: '#1a1a1a',
                            borderBottom: '2px solid transparent',
                            borderRadius: 0,
                            '&:hover': {
                              backgroundColor: 'transparent',
                              borderBottomColor: '#1a1a1a'
                            }
                          }),
                          ...(themeType === 'creative' && {
                            background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, #ff5252, #26c6da)'
                            }
                          })
                        }}
                      >
                        Ver Detalles
                      </Button>
                    </Stack>
                  </CardContent>
                </ProductCard>
              </Grid>
            ))}
          </Grid>

          {/* View All Button */}
          <Box textAlign="center">
            <Button
              variant="outlined"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: themeType === 'minimal' ? 0 : 2,
                color: getTextColor(),
                borderColor: themeType === 'creative' ? 'white' : 'primary.main',
                '&:hover': {
                  backgroundColor: themeType === 'creative' ? alpha('#fff', 0.1) : alpha(palette[500], 0.1)
                }
              }}
            >
              Ver Todo el Catálogo
            </Button>
          </Box>
        </Stack>
      </Container>
    </CatalogContainer>
  );
}

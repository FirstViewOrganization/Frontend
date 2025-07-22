
"use client";
import { Box, Container, Typography, TextField, Button, Grid, Stack, Card, CardContent, IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { useTheme } from '@/contexts/ThemeContext';
import { colorPalettes } from '@/contexts/ThemeContext';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  social?: {
    facebook?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  contactInfo: ContactInfo;
  theme?: 'modern' | 'minimal' | 'corporate' | 'creative';
  variant?: 'form-only' | 'split' | 'info-focus';
  showMap?: boolean;
}

const ContactContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'themeType'
})<{ themeType: string }>(({ theme, themeType }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: 
    themeType === 'minimal' ? '#fafafa' :
    themeType === 'corporate' ? alpha(theme.palette.primary.main, 0.03) :
    themeType === 'creative' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' :
    'background.paper',
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
      backgroundImage: 'url(https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.1,
      zIndex: 0
    }
  })
}));

const ContactCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'themeType'
})<{ themeType: string }>(({ theme, themeType }) => ({
  borderRadius: 
    themeType === 'minimal' ? 0 :
    themeType === 'corporate' ? theme.shape.borderRadius * 2 :
    themeType === 'creative' ? '24px' :
    theme.shape.borderRadius * 3,
  
  border: 
    themeType === 'minimal' ? `1px solid ${alpha(theme.palette.text.primary, 0.08)}` :
    'none',
  
  background: 
    themeType === 'creative' ? 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))' :
    '#ffffff',
  
  backdropFilter: themeType === 'creative' ? 'blur(20px)' : 'none',
  
  boxShadow: 
    themeType === 'minimal' ? 'none' :
    themeType === 'corporate' ? `0 8px 32px ${alpha(theme.palette.common.black, 0.08)}` :
    themeType === 'creative' ? '0 25px 50px rgba(0,0,0,0.2)' :
    `0 20px 40px ${alpha(theme.palette.primary.main, 0.1)}`,
  
  transition: 'all 0.3s ease',
  
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: 
      themeType === 'minimal' ? `0 8px 32px ${alpha(theme.palette.text.primary, 0.08)}` :
      themeType === 'corporate' ? `0 16px 48px ${alpha(theme.palette.common.black, 0.12)}` :
      themeType === 'creative' ? '0 30px 60px rgba(0,0,0,0.3)' :
      `0 25px 50px ${alpha(theme.palette.primary.main, 0.15)}`
  }
}));

const StyledTextField = styled(TextField, {
  shouldForwardProp: (prop) => prop !== 'themeType'
})<{ themeType: string }>(({ theme, themeType }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: themeType === 'minimal' ? 0 : theme.shape.borderRadius,
    backgroundColor: 
      themeType === 'creative' ? 'rgba(255,255,255,0.1)' :
      themeType === 'minimal' ? '#ffffff' :
      alpha(theme.palette.background.default, 0.8),
    backdropFilter: themeType === 'creative' ? 'blur(10px)' : 'none',
    
    '& fieldset': {
      borderColor: 
        themeType === 'creative' ? 'rgba(255,255,255,0.3)' :
        themeType === 'minimal' ? alpha(theme.palette.text.primary, 0.2) :
        alpha(theme.palette.primary.main, 0.3)
    },
    
    '&:hover fieldset': {
      borderColor: 
        themeType === 'creative' ? 'rgba(255,255,255,0.5)' :
        themeType === 'minimal' ? alpha(theme.palette.text.primary, 0.4) :
        theme.palette.primary.main
    },
    
    '&.Mui-focused fieldset': {
      borderColor: 
        themeType === 'creative' ? '#4ECDC4' :
        themeType === 'minimal' ? '#1a1a1a' :
        theme.palette.primary.main
    }
  },
  
  '& .MuiInputLabel-root': {
    color: 
      themeType === 'creative' ? 'rgba(255,255,255,0.8)' :
      'text.secondary',
    
    '&.Mui-focused': {
      color: 
        themeType === 'creative' ? '#4ECDC4' :
        themeType === 'minimal' ? '#1a1a1a' :
        'primary.main'
    }
  },
  
  '& .MuiOutlinedInput-input': {
    color: 
      themeType === 'creative' ? 'white' :
      themeType === 'minimal' ? '#1a1a1a' :
      'text.primary'
  }
}));

export default function ContactSection({ 
  title = "Contáctanos", 
  subtitle = "Estamos aquí para ayudarte",
  contactInfo, 
  theme: themeType = 'modern',
  variant = 'split',
  showMap = false 
}: ContactSectionProps) {
  const { currentPalette } = useTheme();
  const palette = colorPalettes[currentPalette as keyof typeof colorPalettes];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const getTextColor = () => {
    if (themeType === 'creative') return 'white';
    if (themeType === 'minimal') return '#1a1a1a';
    return 'text.primary';
  };

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const contactItems = [
    { icon: <EmailIcon />, label: 'Email', value: contactInfo.email },
    { icon: <PhoneIcon />, label: 'Teléfono', value: contactInfo.phone },
    { icon: <LocationOnIcon />, label: 'Dirección', value: contactInfo.address }
  ];

  const socialIcons = [
    { icon: <FacebookIcon />, url: contactInfo.social?.facebook, name: 'Facebook' },
    { icon: <TwitterIcon />, url: contactInfo.social?.twitter, name: 'Twitter' },
    { icon: <LinkedInIcon />, url: contactInfo.social?.linkedin, name: 'LinkedIn' },
    { icon: <InstagramIcon />, url: contactInfo.social?.instagram, name: 'Instagram' }
  ].filter(social => social.url);

  return (
    <ContactContainer themeType={themeType}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
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
                CONTACTO
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

          {/* Content */}
          <Grid container spacing={6}>
            {/* Contact Form */}
            <Grid item xs={12} md={variant === 'form-only' ? 12 : 8}>
              <ContactCard themeType={themeType}>
                <CardContent sx={{ p: 4 }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 3,
                      fontWeight: themeType === 'minimal' ? 300 : 600,
                      color: 
                        themeType === 'creative' ? 'white' :
                        themeType === 'minimal' ? '#1a1a1a' :
                        'text.primary'
                    }}
                  >
                    Envíanos un mensaje
                  </Typography>
                  
                  <Box component="form" onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          themeType={themeType}
                          fullWidth
                          label="Nombre"
                          value={formData.name}
                          onChange={handleInputChange('name')}
                          required
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <StyledTextField
                          themeType={themeType}
                          fullWidth
                          label="Email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange('email')}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <StyledTextField
                          themeType={themeType}
                          fullWidth
                          label="Asunto"
                          value={formData.subject}
                          onChange={handleInputChange('subject')}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <StyledTextField
                          themeType={themeType}
                          fullWidth
                          label="Mensaje"
                          multiline
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange('message')}
                          required
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant={themeType === 'minimal' ? 'text' : 'contained'}
                          size="large"
                          endIcon={<SendIcon />}
                          sx={{
                            px: 4,
                            py: 1.5,
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
                                background: 'linear-gradient(45deg, #ff5252, #26c6da)',
                                transform: 'translateY(-2px)'
                              }
                            })
                          }}
                        >
                          Enviar Mensaje
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </ContactCard>
            </Grid>

            {/* Contact Info */}
            {variant !== 'form-only' && (
              <Grid item xs={12} md={4}>
                <Stack spacing={4}>
                  <ContactCard themeType={themeType}>
                    <CardContent sx={{ p: 4 }}>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          mb: 3,
                          fontWeight: themeType === 'minimal' ? 300 : 600,
                          color: 
                            themeType === 'creative' ? 'white' :
                            themeType === 'minimal' ? '#1a1a1a' :
                            'text.primary'
                        }}
                      >
                        Información de contacto
                      </Typography>
                      
                      <Stack spacing={3}>
                        {contactItems.map((item, index) => (
                          <Stack key={index} direction="row" spacing={2} alignItems="center">
                            <Box sx={{ 
                              color: 
                                themeType === 'creative' ? '#4ECDC4' :
                                'primary.main',
                              minWidth: 24
                            }}>
                              {item.icon}
                            </Box>
                            <Box>
                              <Typography variant="body2" sx={{ 
                                color: 
                                  themeType === 'creative' ? alpha('#fff', 0.8) :
                                  'text.secondary',
                                fontWeight: 500
                              }}>
                                {item.label}
                              </Typography>
                              <Typography variant="body1" sx={{ 
                                color: 
                                  themeType === 'creative' ? 'white' :
                                  themeType === 'minimal' ? '#1a1a1a' :
                                  'text.primary'
                              }}>
                                {item.value}
                              </Typography>
                            </Box>
                          </Stack>
                        ))}
                      </Stack>
                      
                      {socialIcons.length > 0 && (
                        <Box sx={{ mt: 4 }}>
                          <Typography variant="body2" sx={{ 
                            mb: 2,
                            color: 
                              themeType === 'creative' ? alpha('#fff', 0.8) :
                              'text.secondary',
                            fontWeight: 500
                          }}>
                            Síguenos
                          </Typography>
                          <Stack direction="row" spacing={1}>
                            {socialIcons.map((social, index) => (
                              <IconButton
                                key={index}
                                href={social.url}
                                target="_blank"
                                sx={{
                                  color: 
                                    themeType === 'creative' ? '#4ECDC4' :
                                    'primary.main',
                                  '&:hover': {
                                    transform: 'scale(1.1)',
                                    color: 
                                      themeType === 'creative' ? 'white' :
                                      'primary.dark'
                                  }
                                }}
                              >
                                {social.icon}
                              </IconButton>
                            ))}
                          </Stack>
                        </Box>
                      )}
                    </CardContent>
                  </ContactCard>

                  {/* Map placeholder */}
                  {showMap && (
                    <ContactCard themeType={themeType}>
                      <Box 
                        sx={{
                          height: 200,
                          backgroundColor: 
                            themeType === 'creative' ? 'rgba(255,255,255,0.1)' :
                            alpha('#000', 0.1),
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 'inherit'
                        }}
                      >
                        <Typography sx={{ 
                          color: 
                            themeType === 'creative' ? 'white' :
                            'text.secondary'
                        }}>
                          Mapa interactivo
                        </Typography>
                      </Box>
                    </ContactCard>
                  )}
                </Stack>
              </Grid>
            )}
          </Grid>
        </Stack>
      </Container>
    </ContactContainer>
  );
}

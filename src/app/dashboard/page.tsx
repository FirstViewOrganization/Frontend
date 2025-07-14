
"use client";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Chip,
  Stack,
  Paper,
  IconButton,
  Divider,
  LinearProgress
} from "@mui/material";
import { styled } from '@mui/material/styles';
import ArticleIcon from '@mui/icons-material/Article';
import InventoryIcon from '@mui/icons-material/Inventory';
import WebIcon from '@mui/icons-material/Web';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PeopleIcon from '@mui/icons-material/People';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import { useAuth } from '@/contexts/AuthContext';

const StyledCard = styled(Card)(({ theme }) => ({
  borderRadius: '16px',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#e4e4e7',
  backgroundColor: theme.palette.mode === 'dark' ? '#18181b' : '#ffffff',
  boxShadow: 'none',
  transition: 'all 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: theme.palette.mode === 'dark' 
      ? '0 10px 25px rgba(0,0,0,0.3)' 
      : '0 10px 25px rgba(0,0,0,0.08)',
  },
}));

const MetricCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: '12px',
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#e4e4e7',
  backgroundColor: theme.palette.mode === 'dark' ? '#18181b' : '#ffffff',
  boxShadow: 'none',
}));

const WelcomeCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '16px',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: 'white',
  marginBottom: theme.spacing(3),
}));

const QuickActionButton = styled(Button)(({ theme }) => ({
  borderRadius: '12px',
  textTransform: 'none',
  fontWeight: 500,
  padding: theme.spacing(1.5, 3),
  border: '1px solid',
  borderColor: theme.palette.mode === 'dark' ? '#2d2d2d' : '#e4e4e7',
  backgroundColor: theme.palette.mode === 'dark' ? '#18181b' : '#ffffff',
  color: theme.palette.mode === 'dark' ? '#ffffff' : '#18181b',
  '&:hover': {
    backgroundColor: theme.palette.mode === 'dark' ? '#27272a' : '#f4f4f5',
    transform: 'translateY(-1px)',
  },
}));

export default function Dashboard() {
  const { user } = useAuth();

  const metrics = [
    { label: 'Documentos', value: '24', change: '+12%', icon: <ArticleIcon /> },
    { label: 'Productos', value: '156', change: '+5%', icon: <InventoryIcon /> },
    { label: 'Visitantes', value: '1,204', change: '+18%', icon: <PeopleIcon /> },
    { label: 'Conversiones', value: '89', change: '+23%', icon: <TrendingUpIcon /> },
  ];

  const quickActions = [
    { label: 'Nuevo Documento', icon: <ArticleIcon />, href: '/dashboard/documents' },
    { label: 'Agregar Producto', icon: <AddIcon />, href: '/dashboard/catalogo' },
    { label: 'Editar Landing', icon: <WebIcon />, href: '/dashboard/landingBuilder' },
  ];

  const recentActivity = [
    { title: 'Documento "Política de Privacidad" actualizado', time: 'hace 2 horas', status: 'success' },
    { title: 'Nuevo producto agregado al catálogo', time: 'hace 4 horas', status: 'info' },
    { title: 'Landing page desplegada', time: 'hace 1 día', status: 'success' },
    { title: 'Usuario registrado', time: 'hace 2 días', status: 'info' },
  ];

  return (
    <Box sx={{ 
      flexGrow: 1, 
      p: 3,
      ml: { sm: '64px' },
      mt: '64px',
      backgroundColor: theme => theme.palette.mode === 'dark' ? '#09090b' : '#fafafa',
      minHeight: 'calc(100vh - 64px)'
    }}>
      {/* Welcome Section */}
      <WelcomeCard elevation={0}>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Avatar sx={{ width: 64, height: 64, bgcolor: 'rgba(255,255,255,0.2)' }}>
            {user?.email?.charAt(0).toUpperCase()}
          </Avatar>
          <Box>
            <Typography variant="h4" fontWeight="700" gutterBottom>
              ¡Bienvenido de vuelta!
            </Typography>
            <Typography variant="body1" sx={{ opacity: 0.9 }}>
              Aquí tienes un resumen de tu actividad reciente
            </Typography>
          </Box>
        </Stack>
      </WelcomeCard>

      {/* Metrics Grid */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {metrics.map((metric, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <MetricCard elevation={0}>
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {metric.label}
                  </Typography>
                  <Typography variant="h4" fontWeight="700">
                    {metric.value}
                  </Typography>
                  <Chip 
                    label={metric.change} 
                    size="small" 
                    color="success" 
                    sx={{ mt: 1, fontSize: '0.75rem' }}
                  />
                </Box>
                <Avatar sx={{ 
                  bgcolor: 'primary.main', 
                  color: 'white',
                  width: 48,
                  height: 48
                }}>
                  {metric.icon}
                </Avatar>
              </Stack>
            </MetricCard>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Quick Actions */}
        <Grid item xs={12} md={8}>
          <StyledCard>
            <CardContent sx={{ p: 3 }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
                <Typography variant="h6" fontWeight="600">
                  Acciones Rápidas
                </Typography>
                <IconButton size="small">
                  <MoreVertIcon />
                </IconButton>
              </Stack>
              
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={4}>
                  <StyledCard sx={{ height: '160px', cursor: 'pointer' }}>
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <Avatar sx={{ 
                        bgcolor: 'primary.main', 
                        mx: 'auto', 
                        mb: 2,
                        width: 56,
                        height: 56
                      }}>
                        <ArticleIcon />
                      </Avatar>
                      <Typography variant="h6" gutterBottom>
                        Documentos
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Gestiona tu base de conocimiento
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                      <Button size="small" href="/dashboard/documents" sx={{ textTransform: 'none' }}>
                        Abrir
                      </Button>
                    </CardActions>
                  </StyledCard>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <StyledCard sx={{ height: '160px', cursor: 'pointer' }}>
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <Avatar sx={{ 
                        bgcolor: 'secondary.main', 
                        mx: 'auto', 
                        mb: 2,
                        width: 56,
                        height: 56
                      }}>
                        <InventoryIcon />
                      </Avatar>
                      <Typography variant="h6" gutterBottom>
                        Catálogo
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Administra productos y servicios
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                      <Button size="small" href="/dashboard/catalogo" sx={{ textTransform: 'none' }}>
                        Abrir
                      </Button>
                    </CardActions>
                  </StyledCard>
                </Grid>

                <Grid item xs={12} sm={6} md={4}>
                  <StyledCard sx={{ height: '160px', cursor: 'pointer' }}>
                    <CardContent sx={{ textAlign: 'center', p: 3 }}>
                      <Avatar sx={{ 
                        bgcolor: 'success.main', 
                        mx: 'auto', 
                        mb: 2,
                        width: 56,
                        height: 56
                      }}>
                        <WebIcon />
                      </Avatar>
                      <Typography variant="h6" gutterBottom>
                        Landing Builder
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Construye páginas personalizadas
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'center', pb: 3 }}>
                      <Button size="small" href="/dashboard/landingBuilder" sx={{ textTransform: 'none' }}>
                        Abrir
                      </Button>
                    </CardActions>
                  </StyledCard>
                </Grid>
              </Grid>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={4}>
          <StyledCard>
            <CardContent sx={{ p: 3 }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" mb={3}>
                <Typography variant="h6" fontWeight="600">
                  Actividad Reciente
                </Typography>
                <IconButton size="small">
                  <NotificationsIcon />
                </IconButton>
              </Stack>

              <Stack spacing={2}>
                {recentActivity.map((activity, index) => (
                  <Box key={index}>
                    <Stack direction="row" spacing={2} alignItems="flex-start">
                      <Avatar sx={{ 
                        width: 32, 
                        height: 32, 
                        bgcolor: activity.status === 'success' ? 'success.main' : 'info.main' 
                      }}>
                        <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: 'white' }} />
                      </Avatar>
                      <Box sx={{ flex: 1 }}>
                        <Typography variant="body2" fontWeight="500">
                          {activity.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {activity.time}
                        </Typography>
                      </Box>
                    </Stack>
                    {index < recentActivity.length - 1 && (
                      <Divider sx={{ mt: 2 }} />
                    )}
                  </Box>
                ))}
              </Stack>

              <Button 
                fullWidth 
                variant="outlined" 
                sx={{ 
                  mt: 3, 
                  textTransform: 'none',
                  borderRadius: '8px'
                }}
              >
                Ver todo
              </Button>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>

      {/* Progress Section */}
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <StyledCard>
            <CardContent sx={{ p: 3 }}>
              <Typography variant="h6" fontWeight="600" gutterBottom>
                Progreso de Configuración
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Completa estos pasos para optimizar tu experiencia
              </Typography>
              
              <Stack spacing={3}>
                <Box>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="body2">Configuración del perfil</Typography>
                    <Typography variant="body2" color="text.secondary">80%</Typography>
                  </Stack>
                  <LinearProgress variant="determinate" value={80} sx={{ borderRadius: 1, height: 6 }} />
                </Box>
                
                <Box>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="body2">Documentos cargados</Typography>
                    <Typography variant="body2" color="text.secondary">60%</Typography>
                  </Stack>
                  <LinearProgress variant="determinate" value={60} sx={{ borderRadius: 1, height: 6 }} />
                </Box>
                
                <Box>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" mb={1}>
                    <Typography variant="body2">Landing page publicada</Typography>
                    <Typography variant="body2" color="text.secondary">100%</Typography>
                  </Stack>
                  <LinearProgress variant="determinate" value={100} sx={{ borderRadius: 1, height: 6 }} />
                </Box>
              </Stack>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Box>
  );
}

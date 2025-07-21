
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
  LinearProgress,
  IconButton,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";
import {
  Description as DocumentIcon,
  Inventory as CatalogIcon,
  Web as BuilderIcon,
  TrendingUp as TrendingUpIcon,
  People as PeopleIcon,
  Analytics as AnalyticsIcon,
  Notifications as NotificationsIcon,
  MoreVert as MoreIcon,
} from "@mui/icons-material";
import { useTheme as useMuiTheme } from '@mui/material/styles';
import { useTheme } from '@/contexts/ThemeContext';

export default function Dashboard() {
  const muiTheme = useMuiTheme();
  const { currentStyle } = useTheme();
  
  const statsCards = [
    {
      title: "Total Documentos",
      value: "248",
      change: "+12%",
      icon: <DocumentIcon />,
      color: "primary",
    },
    {
      title: "Productos Activos",
      value: "89",
      change: "+8%",
      icon: <CatalogIcon />,
      color: "secondary",
    },
    {
      title: "Landing Pages",
      value: "15",
      change: "+25%",
      icon: <BuilderIcon />,
      color: "success",
    },
    {
      title: "Usuarios Activos",
      value: "1,234",
      change: "+15%",
      icon: <PeopleIcon />,
      color: "info",
    },
  ];

  const quickActions = [
    {
      title: "Documentos",
      description: "Gestiona tu base de conocimiento para consultas de IA",
      href: "/dashboard/documents",
      icon: <DocumentIcon sx={{ fontSize: 40 }} />,
      color: "primary",
      progress: 75,
    },
    {
      title: "Catálogo",
      description: "Administra tus productos y servicios",
      href: "/dashboard/catalogo",
      icon: <CatalogIcon sx={{ fontSize: 40 }} />,
      color: "secondary",
      progress: 60,
    },
    {
      title: "Landing Builder",
      description: "Construye y personaliza tu landing page",
      href: "/dashboard/landingBuilder",
      icon: <BuilderIcon sx={{ fontSize: 40 }} />,
      color: "success",
      progress: 90,
    },
  ];

  const recentActivities = [
    { text: "Nuevo documento agregado: 'Guía de Usuario'", time: "hace 5 min" },
    { text: "Landing page actualizada", time: "hace 15 min" },
    { text: "Producto 'Widget Pro' modificado", time: "hace 1 hora" },
    { text: "Base de conocimiento sincronizada", time: "hace 2 horas" },
  ];

  return (
    <Box sx={{ 
      flexGrow: 1, 
      p: 3,
      ml: { sm: '64px' },
      mt: '64px',
      minHeight: 'calc(100vh - 64px)',
    }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 'bold',
            background: muiTheme.palette.mode === 'dark' 
              ? `linear-gradient(45deg, ${muiTheme.palette.primary.main}, ${muiTheme.palette.secondary.main})`
              : `linear-gradient(45deg, ${muiTheme.palette.primary.main}, ${muiTheme.palette.primary.dark})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Dashboard Principal
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
          Bienvenido de vuelta, aquí tienes un resumen de tu actividad
        </Typography>
        
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Chip 
            label="Últimas 24 horas" 
            variant="outlined" 
            size="small" 
          />
          <Chip 
            label={`Tema: ${currentStyle}`} 
            color="primary" 
            size="small" 
          />
          <Chip 
            label="En línea" 
            color="success" 
            size="small" 
          />
        </Stack>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {statsCards.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card 
              sx={{ 
                height: '100%',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  transition: 'transform 0.2s ease-in-out',
                }
              }}
            >
              <CardContent sx={{ pb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box>
                    <Typography variant="h4" component="div" fontWeight="bold">
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {stat.title}
                    </Typography>
                  </Box>
                  <Avatar 
                    sx={{ 
                      bgcolor: `${stat.color}.main`,
                      width: 56,
                      height: 56,
                    }}
                  >
                    {stat.icon}
                  </Avatar>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Chip 
                    label={stat.change}
                    color="success"
                    size="small"
                    variant="outlined"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* Quick Actions */}
        <Grid item xs={12} lg={8}>
          <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
            Acciones Rápidas
          </Typography>
          <Grid container spacing={3}>
            {quickActions.map((action, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      transition: 'transform 0.2s ease-in-out',
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1, pb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar 
                        sx={{ 
                          bgcolor: `${action.color}.main`,
                          mr: 2,
                          width: 56,
                          height: 56,
                        }}
                      >
                        {action.icon}
                      </Avatar>
                      <IconButton 
                        sx={{ ml: 'auto' }}
                        size="small"
                      >
                        <MoreIcon />
                      </IconButton>
                    </Box>
                    <Typography variant="h6" component="h2" gutterBottom>
                      {action.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {action.description}
                    </Typography>
                    
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="caption">
                          Progreso
                        </Typography>
                        <Typography variant="caption">
                          {action.progress}%
                        </Typography>
                      </Box>
                      <LinearProgress 
                        variant="determinate" 
                        value={action.progress}
                        sx={{ borderRadius: 2, height: 8 }}
                      />
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button 
                      size="small" 
                      href={action.href}
                      variant="contained"
                      fullWidth
                      sx={{ 
                        borderRadius: currentStyle === 'rounded' ? 3 : undefined,
                      }}
                    >
                      Abrir
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} lg={4}>
          <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 'bold' }}>
            Actividad Reciente
          </Typography>
          <Paper 
            sx={{ 
              height: 'fit-content',
              maxHeight: 400,
              overflow: 'auto',
            }}
          >
            <List>
              {recentActivities.map((activity, index) => (
                <ListItem key={index} divider={index < recentActivities.length - 1}>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
                      <NotificationsIcon sx={{ fontSize: 16 }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={activity.text}
                    secondary={activity.time}
                    primaryTypographyProps={{ variant: 'body2' }}
                    secondaryTypographyProps={{ variant: 'caption' }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>

          {/* Analytics Card */}
          <Card sx={{ mt: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <AnalyticsIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="h6">
                  Estadísticas Generales
                </Typography>
              </Box>
              
              <Stack spacing={2}>
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Tráfico Web</Typography>
                    <Typography variant="body2" fontWeight="bold">+15%</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={75} 
                    color="primary"
                    sx={{ borderRadius: 2, height: 6 }}
                  />
                </Box>
                
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Conversiones</Typography>
                    <Typography variant="body2" fontWeight="bold">+8%</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={60} 
                    color="secondary"
                    sx={{ borderRadius: 2, height: 6 }}
                  />
                </Box>
                
                <Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Engagement</Typography>
                    <Typography variant="body2" fontWeight="bold">+22%</Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={85} 
                    color="success"
                    sx={{ borderRadius: 2, height: 6 }}
                  />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

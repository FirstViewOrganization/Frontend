
"use client";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button
} from "@mui/material";

export default function Dashboard() {
  return (
    <Box sx={{ 
      flexGrow: 1, 
      p: 3,
      ml: { sm: '64px' }, // Account for sidebar
      mt: '64px' // Account for header
    }}>
      <Typography variant="h4" gutterBottom>
        Dashboard Principal
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2">
                Documentos
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gestiona tu base de conocimiento para consultas de IA
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="/dashboard/documents">
                Ver Documentos
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2">
                Catálogo
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Administra tus productos y servicios
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="/dashboard/catalogo">
                Ver Catálogo
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h2">
                Landing Builder
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Construye y personaliza tu landing page
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href="/dashboard/landingBuilder">
                Abrir Builder
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

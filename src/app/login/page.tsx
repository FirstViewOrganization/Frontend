
"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Alert,
  Card,
  CardContent
} from '@mui/material';
import { styled } from '@mui/material/styles';

const LoginContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
}));

const LoginCard = styled(Card)(({ theme }) => ({
  maxWidth: 400,
  width: '100%',
  padding: theme.spacing(2),
}));

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulación de autenticación - reemplazar con lógica real
    try {
      if (email === 'admin@example.com' && password === 'password') {
        // Guardar token o estado de autenticación
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('userEmail', email);
        
        // Redirigir al dashboard
        router.push('/dashboard');
      } else {
        setError('Credenciales incorrectas');
      }
    } catch (err) {
      setError('Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginContainer>
      <Container maxWidth="sm">
        <LoginCard>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom textAlign="center">
              Iniciar Sesión
            </Typography>
            
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleLogin}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
                autoComplete="email"
              />
              
              <TextField
                fullWidth
                label="Contraseña"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={loading}
              >
                {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </Button>
            </Box>

            <Typography variant="body2" color="text.secondary" textAlign="center">
              Usuario de prueba: admin@example.com<br />
              Contraseña: password
            </Typography>
          </CardContent>
        </LoginCard>
      </Container>
    </LoginContainer>
  );
}

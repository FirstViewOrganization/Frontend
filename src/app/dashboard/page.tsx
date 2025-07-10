"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Box,
  CircularProgress,
  Typography
} from "@mui/material";

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    // Redirigir a la landing page
    router.push('/landing');
  }, [router]);

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '50vh'
    }}>
      <CircularProgress sx={{ mb: 2 }} />
      <Typography variant="h6" color="text.secondary">
        Redirigiendo a la landing page...
      </Typography>
    </Box>
  );
}
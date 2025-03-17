"use client";
import {
  Box,
  styled,
  Typography
} from "@mui/material";


import CssBaseline from '@mui/material/CssBaseline';

export default function Content({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));


  return (
    <Box sx={{ display: 'flex', 'width': '100%' }}>
      <CssBaseline />

      <Box component="main" sx={{ flexGrow: 1, pt: 3, paddingX:3}}>
        <div style={{overflow:'auto'}}>
          {children}
        </div>
      </Box>
    </Box>
  );
}
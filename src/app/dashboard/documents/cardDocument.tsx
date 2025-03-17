import { styled } from '@mui/material'
import React from 'react'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

const cardDocument = () => {
  return (
    <Grid container spacing={2}>
            {[...Array(6)].map((_, index) => (
                <Grid key={index} size={{ xs: 6, md: 2 }}>
                    <Item sx={{ height: '200px' }}>xs=6 md=8</Item>
                </Grid>
            ))}
        </Grid>
  )
}

export default cardDocument

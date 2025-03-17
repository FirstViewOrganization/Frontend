// components/Card.tsx
import React from 'react';
import { Card as MuiCard, CardContent, Typography } from '@mui/material';

interface CardProps {
  title: string;
  content: string;
  backgroundColor?: string;
}

export default function LandingCard ({ title, content, backgroundColor = '#fff' }: CardProps) 
{
  return (
    <MuiCard style={{ marginBottom: '16px', backgroundColor }}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
    </MuiCard>
  );
};
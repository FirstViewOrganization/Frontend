// components/Text.tsx
import React from 'react';
import { Typography } from '@mui/material';

interface TextProps {
  content: string;
  fontSize?: string;
  color?: string;
}

export default function Text({ content, fontSize = '16px', color = '#333' }: TextProps)
{
  return (
    <Typography style={{ fontSize, color, marginBottom: '16px' }}>
      {content}
    </Typography>
  );
};

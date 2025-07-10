"use client";
import React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface LandingTextProps extends Omit<TypographyProps, 'children'> {
  text: string;
  animated?: boolean;
  gradient?: boolean;
  gradientColors?: string[];
}

const AnimatedText = styled(Typography)(({ theme }) => ({
  '@keyframes fadeInUp': {
    from: {
      opacity: 0,
      transform: 'translateY(30px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },
  animation: 'fadeInUp 0.8s ease-out'
}));

const GradientText = styled(Typography)<{ gradientcolors?: string }>(({ theme, gradientcolors }) => ({
  background: gradientcolors || 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block'
}));

export default function LandingText({ 
  text, 
  animated = false, 
  gradient = false,
  gradientColors = ['#667eea', '#764ba2'],
  ...props 
}: LandingTextProps) {
  const gradientStyle = gradient ? 
    `linear-gradient(45deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 100%)` : 
    undefined;

  if (animated && gradient) {
    return (
      <AnimatedText {...props}>
        <GradientText 
          component="span" 
          gradientcolors={gradientStyle}
          variant={props.variant}
        >
          {text}
        </GradientText>
      </AnimatedText>
    );
  }

  if (animated) {
    return (
      <AnimatedText {...props}>
        {text}
      </AnimatedText>
    );
  }

  if (gradient) {
    return (
      <GradientText 
        {...props}
        gradientcolors={gradientStyle}
      >
        {text}
      </GradientText>
    );
  }

  return (
    <Typography {...props}>
      {text}
    </Typography>
  );
}
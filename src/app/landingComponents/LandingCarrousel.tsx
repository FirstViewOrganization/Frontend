// components/Carousel.tsx
import React from 'react';
import Grid from '@mui/material/Grid2';

interface CarouselProps {
  images: string[];
  autoPlay?: boolean;
  interval?: number;
}

export default function Carousel ({ images, autoPlay = false, interval = 3000 }:CarouselProps) {
  const [currentImage, setCurrentImage] = React.useState(0);

  React.useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, interval, images.length]);

  return (
    <Grid container justifyContent="center" style={{ marginBottom: '16px' }}>
      <img
        src={images[currentImage]}
        alt={`Carousel Image ${currentImage + 1}`}
        style={{ width: '100%', height: 'auto', maxWidth: '800px' }}
      />
    </Grid>
  );
};
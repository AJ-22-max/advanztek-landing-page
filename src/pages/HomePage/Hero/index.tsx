import React, { useState, useEffect } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { slides } from './data';

const TechCarousel: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const slideDuration = 3000;

  const getGradientColor = (index: number, total: number): string => {
    const startColor = { r: 2, g: 0, b: 102 };
    const endColor = { r: 0, g: 180, b: 240 };

    const ratio = index / Math.max(total + 1, 1);

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * ratio);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * ratio);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * ratio);

    return `rgb(${r}, ${g}, ${b})`;
  };

  useEffect(() => {
    const resetTimer = setTimeout(() => setProgress(0), 0);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const increment = (100 / slideDuration) * 50;
        const newProgress = prev + increment;

        if (newProgress >= 100) {
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => {
      clearTimeout(resetTimer);
      clearInterval(timer);
    };
  }, [activeSlide, slideDuration]);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setActiveSlide((current) => (current + 1) % slides.length);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [progress]);

  const goToSlide = (index: number) => {
    setActiveSlide(index);
    setProgress(0);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '640px',
        overflow: 'hidden',
      }}
    >
      {/* Slides */}
      {slides.map((slide, index) => (
        <Box
          key={slide.id}
          sx={{
            position: 'absolute',
            inset: 0,
            opacity: index === activeSlide ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
          }}
        >
          {/* Background Image with Overlay */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&::after': {
                content: '""',
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
              }
            }}
          />

          {/* Content */}
          <Container
            maxWidth="lg"
            sx={{
              position: 'relative',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
            }}
          >
            <Box sx={{ textAlign: 'center', maxWidth: '900px' }}>
              <Box
                sx={{
                  mb: 3,
                  display: 'inline-block',
                  px: 3,
                  py: 1,
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '50px',
                }}
              >
                <Typography
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {slide.category}
                </Typography>
              </Box>

              <Typography
                variant="h1"
                sx={{
                  color: '#fff',
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  fontWeight: 700,
                  mb: 3,
                  lineHeight: 1.2,
                }}
              >
                {slide.title}
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: { xs: '1.125rem', md: '1.25rem', lg: '1.5rem' },
                  lineHeight: 1.6,
                  maxWidth: '800px',
                  mx: 'auto',
                }}
              >
                {slide.subtitle}
              </Typography>
            </Box>
          </Container>
        </Box>
      ))}

      {/* Progress Indicators */}
      <Box
        sx={{
          position: 'absolute',
          bottom: { xs: 16, md: 20 },
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
          gap: { xs: 1, sm: 0 },
          width: { xs: '90%', sm: 'auto' },
          maxWidth: { xs: '400px', sm: 'none' },
          px: 2,
        }}
      >
        {slides.map((slide, index) => (
          <Box
            key={slide.id}
            onClick={() => goToSlide(index)}
            sx={{
              position: 'relative',
              px: 3,
              py: 1.5,
              border: '2px solid rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              transition: 'all 0.3s ease',
              minWidth: { xs: '140px', sm: '180px' },
              '&:hover': {
                transform: 'translateY(-2px)',
                borderColor: 'rgba(255, 255, 255, 0.5)',
              },
            }}
          >
            {/* Progress Fill */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                height: '100%',
                width: index === activeSlide ? `${progress}%` : index < activeSlide ? '100%' : '0%',
                backgroundColor: getGradientColor(index, slides.length),
                transition: index === activeSlide ? 'width 0.05s linear' : 'width 0.3s ease',
                zIndex: 1,
              }}
            />

            {/* Text */}
            <Typography
              sx={{
                position: 'relative',
                zIndex: 2,
                color: '#fff',
                fontSize: { xs: '0.75rem', sm: '0.875rem' },
                fontWeight: 600,
                textAlign: 'center',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {slide.category.split(' ')[0]}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TechCarousel;
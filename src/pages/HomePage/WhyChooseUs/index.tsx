import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import {
  Shield,
  Zap,
  Users,
  Trophy,
  Heart,
  Target,
  Sparkles
} from 'lucide-react';

// Why choose us reasons
const reasons = [
  {
    id: 1,
    icon: Shield,
    title: 'Faith-Driven Excellence',
    description: 'Built on Christian principles with integrity at our core. Every solution we deliver reflects our commitment to honoring God through exceptional work.',
    gradient: 'linear-gradient(135deg, #020066 0%, #0039CC 100%)',
    color: '#020066'
  },
  {
    id: 2,
    icon: Zap,
    title: 'Cutting-Edge Technology',
    description: 'We leverage the latest technologies and frameworks to build modern, scalable solutions that keep you ahead of the competition.',
    gradient: 'linear-gradient(135deg, #00D1FF 0%, #0099CC 100%)',
    color: '#00D1FF'
  },
  {
    id: 3,
    icon: Users,
    title: 'Dedicated Partnership',
    description: 'You\'re not just a client—you\'re a partner. We work closely with you from concept to deployment and beyond, ensuring your success.',
    gradient: 'linear-gradient(135deg, #020066 0%, #0039CC 100%)',
    color: '#020066'
  },
  {
    id: 4,
    icon: Trophy,
    title: 'Proven Track Record',
    description: 'Successfully delivered digital solutions for startups, enterprises, and schools across Nigeria, transforming ideas into impactful products.',
    gradient: 'linear-gradient(135deg, #00D1FF 0%, #0099CC 100%)',
    color: '#00D1FF'
  },
  {
    id: 5,
    icon: Heart,
    title: 'Empowerment Focus',
    description: 'Beyond building software, we empower teams with knowledge transfer and training, ensuring long-term sustainability of your solutions.',
    gradient: 'linear-gradient(135deg, #020066 0%, #0039CC 100%)',
    color: '#020066'
  },
  {
    id: 6,
    icon: Target,
    title: 'Results-Oriented',
    description: 'We measure success by your success. Our solutions are designed to drive real business outcomes and measurable impact.',
    gradient: 'linear-gradient(135deg, #00D1FF 0%, #0099CC 100%)',
    color: '#00D1FF'
  }
];

// Counter component with animation
const AnimatedCounter: React.FC<{ value: string; duration?: number }> = ({ value, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  // Extract number from value (e.g., "50+" -> 50)
  const numericValue = parseInt(value.replace(/\D/g, ''), 10);
  const suffix = value.replace(/[0-9]/g, ''); // Extract "+", etc.

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const startTime = Date.now();
          const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * numericValue);

            setCount(current);

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated, numericValue, duration]);

  return <span ref={counterRef}>{count}{suffix}</span>;
};

// Key statistics
const stats = [
  { label: 'Projects Delivered', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'Years Experience', value: '9+' },
  { label: 'Team Members', value: '20+' }
];

const WhyChooseUs: React.FC = () => {
  return (
    <Box
      id="why-choose-us-section"
      sx={{
        position: 'relative',
        backgroundColor: '#fff',
        py: { xs: 10, md: 14 },
        overflow: 'hidden'
      }}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '15%',
          right: '-10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 209, 255, 0.06), transparent)',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 0, 102, 0.05), transparent)',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 8 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>
            <Sparkles size={20} color="#00D1FF" />
            <Typography
              sx={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#00D1FF',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontFamily: "'Inter', sans-serif"
              }}
            >
              Why Choose Us
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Dancing Script', cursive",
              fontWeight: 700,
              mb: 3,
              color: '#020066',
              fontSize: { xs: '2rem', md: '3rem' },
              lineHeight: 1.2,
              maxWidth: '900px',
              mx: 'auto'
            }}
          >
            Your Trusted Partner in Digital Transformation
          </Typography>

          <Typography
            sx={{
              color: '#555',
              fontSize: { xs: '1rem', md: '1.1rem' },
              lineHeight: 1.8,
              maxWidth: '800px',
              mx: 'auto',
              fontFamily: "'Inter', sans-serif"
            }}
          >
            We combine faith, expertise, and innovation to deliver solutions that don't just meet
            expectations—they exceed them. Here's what sets us apart.
          </Typography>
        </Box>

        {/* Reasons Grid */}
        <Grid container spacing={4} sx={{ mb: 10 }}>
          {reasons.map((reason) => {
            const IconComponent = reason.icon;
            return (
              <Grid key={reason.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    p: 4,
                    borderRadius: '20px',
                    backgroundColor: '#fff',
                    border: '1px solid',
                    borderColor: 'rgba(2, 0, 102, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-12px)',
                      boxShadow: `0 25px 70px ${reason.color}20`,
                      borderColor: reason.color,
                      '& .icon-box': {
                        transform: 'scale(1.1) rotate(-5deg)',
                        background: reason.gradient,
                      },
                      '& .top-line': {
                        width: '100%',
                      }
                    }
                  }}
                >
                  {/* Top decorative line */}
                  <Box
                    className="top-line"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      height: '4px',
                      width: '0%',
                      background: reason.gradient,
                      transition: 'width 0.4s ease',
                      borderRadius: '20px 20px 0 0'
                    }}
                  />

                  {/* Icon */}
                  <Box
                    className="icon-box"
                    sx={{
                      alignSelf: { xs: 'center', md: 'flex-start' },
                      width: 70,
                      height: 70,
                      borderRadius: '16px',
                      background: `${reason.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      transition: 'all 0.4s ease'
                    }}
                  >
                    <IconComponent size={32} color={reason.color} strokeWidth={2.5} />
                  </Box>

                  {/* Title */}
                  <Typography
                    variant="h6"
                    sx={{
                      textAlign: {xs: 'center', md: 'left'},
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      mb: 2,
                      color: '#020066',
                      fontSize: '1.25rem'
                    }}
                  >
                    {reason.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      textAlign: 'justify',
                      color: '#666',
                      fontSize: '0.95rem',
                      lineHeight: 1.7,
                      fontFamily: "'Inter', sans-serif"
                    }}
                  >
                    {reason.description}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>

        {/* Stats Section */}
        <Box
          sx={{
            p: { xs: 4, md: 6 },
            borderRadius: '32px',
            background: 'linear-gradient(135deg, #020066 0%, #00D1FF 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: '-100px',
              right: '-100px',
              width: '300px',
              height: '300px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              filter: 'blur(80px)'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: '-80px',
              left: '-80px',
              width: '250px',
              height: '250px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              filter: 'blur(70px)'
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            {/* Stats Header */}
            <Box sx={{ textAlign: 'center', mb: 6 }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: "'Dancing Script', cursive",
                  fontWeight: 700,
                  color: '#fff',
                  mb: 2,
                  fontSize: { xs: '1.75rem', md: '2.25rem' }
                }}
              >
                Our Impact in Numbers
              </Typography>
              <Typography
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                Building excellence, one project at a time
              </Typography>
            </Box>

            {/* Stats Grid */}
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid key={index} size={{ xs: 6, md: 3 }}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 3,
                      borderRadius: '16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        backgroundColor: 'rgba(255, 255, 255, 0.15)',
                        borderColor: 'rgba(255, 255, 255, 0.4)',
                      }
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 800,
                        fontSize: { xs: '2.5rem', md: '3rem' },
                        color: '#fff',
                        mb: 1,
                        lineHeight: 1
                      }}
                    >
                      <AnimatedCounter value={stat.value} duration={2500} />
                    </Typography>
                    <Typography
                      sx={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: { xs: '0.9rem', md: '1rem' },
                        fontWeight: 500,
                        fontFamily: "'Inter', sans-serif"
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default WhyChooseUs;
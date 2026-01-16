import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid, Chip } from '@mui/material';
import {
  Lightbulb,
  Users,
  Target,
  Shield,
  Heart,
  TrendingUp,
  CheckCircle,
  Award,
  Code,
  Layers
} from 'lucide-react';

interface AboutSlide {
  id: number;
  category: string;
  content: React.ReactNode;
}

interface AboutProps {
  initialSlide?: number;
}

// Data for Company slide
const companyValues = [
  { icon: Heart, label: 'Faith in God', bgColor: '#020066', color: '#fff' },
  { icon: TrendingUp, label: 'Empowerment', bgColor: '#00D1FF', color: '#020066' },
  { icon: Shield, label: 'Integrity', bgColor: '#020066', color: '#fff' },
  { icon: Award, label: 'Excellence', bgColor: '#00D1FF', color: '#020066' }
];

// Data for Leadership slide
const leadershipRoles = [
  {
    icon: Users,
    bgColor: '#020066',
    iconColor: '#fff',
    title: 'Chief Executive Officer',
    description: 'Provides ultimate authority over strategic, financial, and operational decisions. Sets organizational vision and oversees all subsidiaries with faith-driven leadership.',
    hoverBorderColor: '#020066'
  },
  {
    icon: Target,
    bgColor: '#00D1FF',
    iconColor: '#020066',
    title: 'IT Manager',
    description: 'Oversees all technology operations, coordinates technical teams, and ensures delivery of cutting-edge solutions across frontend and backend departments.',
    hoverBorderColor: '#00D1FF'
  },
  {
    icon: Code,
    bgColor: '#020066',
    iconColor: '#fff',
    title: 'Team Leads',
    description: 'Frontend and Backend Team Leads coordinate development tasks, mentor developers, and ensure adherence to coding standards and best practices.',
    hoverBorderColor: '#020066'
  }
];

// Data for Our Approach slide
const methodologyItems = [
  {
    icon: CheckCircle,
    bgColor: '#020066',
    iconColor: '#fff',
    title: 'Quality & Compliance',
    description: 'Adherence to industry standards, regulatory requirements, and ethical practices rooted in integrity and biblical principles.'
  },
  {
    icon: Lightbulb,
    bgColor: '#00D1FF',
    iconColor: '#020066',
    title: 'Innovation & Excellence',
    description: 'Continuous improvement through technology, training, and faith-driven innovation that transforms lives and communities.'
  },
  {
    icon: Layers,
    bgColor: '#020066',
    iconColor: '#fff',
    title: 'Client Engagement Process',
    description: 'Collaborative approach with clients, ensuring their needs are met through transparent communication, teamwork, and service excellence.'
  }
];

const About: React.FC<AboutProps> = ({ initialSlide = 0 }) => {
  const [activeSlide, setActiveSlide] = useState<number>(initialSlide);
  const [progress, setProgress] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [slideDirection, setSlideDirection] = useState<'next' | 'prev'>('next');

  const slideDuration = 6000;

  const slides: AboutSlide[] = [
    {
      id: 1,
      category: "Company",
      content: (
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box>
              <Typography
                sx={{
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#00D1FF',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  mb: 2,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Who We Are
              </Typography>

              <Typography
                variant="h2"
                sx={{
                  fontFamily: "'Dancing Script', cursive",
                  fontWeight: 700,
                  mb: 4,
                  color: '#020066',
                  fontSize: { xs: '2rem', md: '2.75rem' },
                  lineHeight: 1.2,
                  textAlign: { xs: 'center', md: 'left' }
                }}
              >
                Building Digital Solutions That Transform Lives
              </Typography>

              <Typography
                variant='subtitle1'
                sx={{
                  color: '#555',
                  lineHeight: 1.8,
                  maxWidth: '800px',
                  mx: 'auto',
                  fontFamily: "'Inter', sans-serif",
                  textAlign: { xs: 'justify', sm: 'center', md: 'left' }
                }}
              >
                Advanztek Nig. Ltd. is a leading Information and Communication Technology company
                in Nigeria, committed to transforming lives through technology. Guided by faith,
                we focus on eradicating unemployment by equipping youths with essential digital skills.
              </Typography>

              <Typography
                variant='subtitle1'
                sx={{
                  color: '#555',
                  lineHeight: 1.8,
                  maxWidth: '800px',
                  mx: 'auto',
                  fontFamily: "'Inter', sans-serif",
                  textAlign: { xs: 'justify', sm: 'center', md: 'left' }
                }}
              >
                Our vision is to bridge the gap between Nigeria and the global economy by attracting
                international opportunities, enabling young Nigerians to contribute locally and globally.
              </Typography>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mt: 5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                {companyValues.map((value, idx) => {
                  const IconComponent = value.icon;
                  return (
                    <Chip
                      key={idx}
                      icon={<IconComponent size={18} />}
                      label={value.label}
                      sx={{
                        py: 2.5,
                        px: 2,
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        backgroundColor: value.bgColor,
                        color: value.color,
                        '& .MuiChip-icon': { color: value.color }
                      }}
                    />
                  );
                })}
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: '350px', md: '500px' },
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 25px 70px rgba(2, 0, 102, 0.2)'
              }}
            >
              <Box
                component="img"
                src="https://plus.unsplash.com/premium_photo-1682141016654-7cda8fa68d0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGxhcmdlJTIwaW1hZ2VzJTIwb2YlMjBibGFjayUyMGRldmVsb3BlcnMlMjBpbiUyMGFuJTIwb2ZmaWNlfGVufDB8fDB8fHww"
                alt="Team collaboration"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(2, 0, 102, 0.95), transparent)',
                  p: 4
                }}
              >
                <Typography
                  variant='subtitle1'
                  sx={{
                    color: '#fff',
                    fontWeight: 700,
                    mb: 1,
                    textAlign: { xs: 'center', sm: 'justify' }
                  }}
                >
                  Transforming Lives Through Technology
                </Typography>
                <Typography
                  variant='subtitle2'
                  sx={{
                    color: 'rgba(255, 255, 255, 0.9)',
                    textAlign: { xs: 'center', sm: 'justify' }
                  }}
                >
                  Empowering Nigerian youth with digital skills
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )
    },
    {
      id: 2,
      category: "Leadership",
      content: (
        <Box>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              sx={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#00D1FF',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                mb: 2
              }}
            >
              Our Leadership
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Dancing Script', cursive",
                fontWeight: 700,
                mb: 3,
                px: { sm: '10%' },
                color: '#020066',
                fontSize: { xs: '2rem', md: '2.75rem' },
                lineHeight: 1.2
              }}
            >
              Guided by Faith, Driven by Excellence
            </Typography>

            <Typography
              variant='subtitle1'
              sx={{
                color: '#555',
                lineHeight: 1.8,
                maxWidth: '800px',
                mx: 'auto',
                fontFamily: "'Inter', sans-serif",
                textAlign: { xs: 'center', md: 'left' },
              }}
            >
              Our leadership team brings together technical expertise and faith-driven commitment
              to deliver world-class technology solutions.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ display: 'flex', justifyContent: 'center' }}>
            {leadershipRoles.map((role, idx) => {
              const IconComponent = role.icon;
              return (
                <Grid key={idx} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: { xs: 'center', sm: 'flex-start' },
                      p: 4,
                      border: '2px solid #E8E8E8',
                      borderRadius: '16px',
                      height: '100%',
                      transition: 'all 0.3s ease',
                      backgroundColor: '#fff',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: `0 20px 50px rgba(${role.hoverBorderColor === '#020066' ? '2, 0, 102' : '0, 209, 255'}, 0.12)`,
                        borderColor: role.hoverBorderColor
                      }
                    }}
                  >
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: '50%',
                        backgroundColor: role.bgColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 3,
                        alignSelf: {xs: 'center', md: 'flex-start'}
                      }}
                    >
                      <IconComponent size={35} color={role.iconColor} />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: '#020066', textAlign: {xs: 'center', md: 'left'} }}>
                      {role.title}
                    </Typography>
                    <Typography variant='subtitle1' sx={{ color: '#666', lineHeight: 1.7, textAlign: { xs: 'justify', sm: 'center', md: 'justify' } }}>
                      {role.description}
                    </Typography>
                  </Box>
                </Grid>
              );
            })}
          </Grid>

          <Box
            sx={{
              mt: 5,
              p: 4,
              background: 'linear-gradient(135deg, #020066 0%, #00D1FF 100%)',
              borderRadius: '16px'
            }}
          >
            <Typography variant='h6' sx={{ color: '#fff', fontWeight: 700, mb: 1.5, textAlign: { xs: 'center', md: 'justify' } }}>
              Advisory Board
            </Typography>
            <Typography variant='subtitle1' sx={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.7, textAlign: { xs: 'justify', sm: 'center', md: 'justify' } }}>
              Provides strategic guidance and non-executive oversight, supporting the CEO in
              decision-making with industry expertise, wisdom, and spiritual guidance.
            </Typography>
          </Box>
        </Box>
      )
    },
    {
      id: 3,
      category: "Our Approach",
      content: (
        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                height: { xs: '350px', md: '100%' },
                minHeight: '500px',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 25px 70px rgba(2, 0, 102, 0.2)',
                position: 'relative'
              }}
            >
              <Box
                component="img"
                src="https://plus.unsplash.com/premium_photo-1707155465527-c5a2935b21cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YmxhY2slMjBwZW9wbGUlMjBpbiUyMGFuJTIwb2ZmaWNlfGVufDB8fDB8fHww"
                alt="Our methodology"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(135deg, rgba(2, 0, 102, 0.85), rgba(0, 209, 255, 0.7))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 4
                }}
              >
                <Box sx={{ textAlign: 'center' }}>
                  <Typography
                    sx={{
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: { xs: '1.75rem', md: '2.25rem' },
                      mb: 2
                    }}
                  >
                    Excellence Through Faith & Innovation
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    sx={{
                      color: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    Delivering reliable solutions with integrity
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#00D1FF',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                mb: 2,
                textAlign: { xs: 'center', md: 'justify' }
              }}
            >
              How We Work
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Dancing Script', cursive",
                fontWeight: 700,
                textAlign: { xs: 'center', md: 'justify' },
                mb: 4,
                color: '#020066',
                fontSize: { xs: '2rem', md: '2.75rem' },
                lineHeight: 1.2,
              }}
            >
              Our Methodology
            </Typography>

            <Typography
              variant='subtitle1'
              sx={{
                color: '#555',
                lineHeight: 1.8,
                maxWidth: '800px',
                mx: 'auto',
                fontFamily: "'Inter', sans-serif",
                textAlign: { xs: 'center', md: 'justify' },
                mb: 5
              }}
            >
              We deliver solutions through comprehensive training programs and professional development,
              empowering individuals to engage in meaningful work that aligns with divine purpose.
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, textAlign: { xs: 'justify' } }}>
              {methodologyItems.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <Box key={idx} sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        minWidth: 60,
                        height: 60,
                        borderRadius: '12px',
                        backgroundColor: item.bgColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}
                    >
                      <IconComponent size={28} color={item.iconColor} />
                    </Box>
                    <Box>
                      <Typography variant='subtitle1' sx={{ fontWeight: 700, mb: 1, color: '#020066' }}>
                        {item.title}
                      </Typography>
                      <Typography variant='body1'
                        sx={{
                          color: '#555',
                          lineHeight: 1.8,
                          maxWidth: '800px',
                          mx: 'auto',
                          fontFamily: "'Inter', sans-serif",
                          textAlign: {xs: 'justify', sm: 'left', md: 'justify'}
                        }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      )
    }
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const slideMap: { [key: string]: number } = {
        'company': 0,
        'leadership': 1,
        'approach': 2
      };

      if (hash && slideMap[hash] !== undefined) {
        setTimeout(() => {
          setActiveSlide((current) => {
            const newSlide = slideMap[hash];
            setSlideDirection(newSlide > current ? 'next' : 'prev');
            return newSlide;
          });
          setProgress(0);
        }, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []); // Remove activeSlide from dependencies - IMPORTANT!


  useEffect(() => {
    if (isPaused) return;

    // Reset progress asynchronously
    setTimeout(() => setProgress(0), 0);

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

    return () => clearInterval(timer);
  }, [activeSlide, isPaused, slideDuration]);

  useEffect(() => {
    if (isPaused) return;

    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setSlideDirection('next');
        setActiveSlide((current) => (current + 1) % slides.length);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [progress, slides.length, isPaused]);



  const goToSlide = (index: number) => {
    setSlideDirection(index > activeSlide ? 'next' : 'prev');
    setActiveSlide(index);
    setProgress(0);
  };

  return (
    <Box
      id="about-section"
      sx={{
        px: 0.5,
        backgroundColor: '#fff',
        py: { xs: 8, md: 12 },
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 209, 255, 0.08), transparent)',
          pointerEvents: 'none'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -150,
          left: -150,
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 0, 102, 0.05), transparent)',
          pointerEvents: 'none'
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Slide Content with left-to-right animation */}
        <Box sx={{ position: 'relative', overflow: 'hidden' }}>
          {slides.map((slide, index) => (
            <Box
              key={slide.id}
              sx={{
                display: index === activeSlide ? 'block' : 'none',
                animation: index === activeSlide
                  ? slideDirection === 'next'
                    ? 'slideInFromRight 0.6s ease-out'
                    : 'slideInFromLeft 0.6s ease-out'
                  : 'none',
                '@keyframes slideInFromRight': {
                  from: {
                    opacity: 0,
                    transform: 'translateX(100px)'
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateX(0)'
                  }
                },
                '@keyframes slideInFromLeft': {
                  from: {
                    opacity: 0,
                    transform: 'translateX(-100px)'
                  },
                  to: {
                    opacity: 1,
                    transform: 'translateX(0)'
                  }
                }
              }}
            >
              {slide.content}
            </Box>
          ))}
        </Box>

        {/* Progress indicator dots */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            mt: 8
          }}
        >
          {slides.map((slide, index) => (
            <Box
              key={slide.id}
              onClick={() => goToSlide(index)}
              sx={{
                width: 12,
                height: 12,
                borderRadius: '50%',
                backgroundColor: index === activeSlide ? '#020066' : '#ddd',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.3)',
                  backgroundColor: index === activeSlide ? '#020066' : '#00D1FF'
                }
              }}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default About;
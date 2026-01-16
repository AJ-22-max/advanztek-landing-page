import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import {
    Globe,
    Link2,
    Brain,
    Database,
    CheckCircle2,
    Sparkles
} from 'lucide-react';

// Service data
const services = [
    {
        id: 1,
        slug: 'web-saas',
        icon: Globe,
        title: 'Web & SaaS Development',
        description: 'We design and develop modern websites and scalable SaaS platforms tailored to your business needs.',
        gradient: 'linear-gradient(135deg, #020066 0%, #0039CC 100%)',
        color: '#020066',
        deliverables: [
            'Custom company and product websites',
            'SaaS platforms and multi-tenant systems',
            'Admin dashboards and user portals',
            'Subscription, billing, and payment integrations',
            'Secure, scalable, and high-performance applications'
        ],
        bestFor: 'startups, enterprises, schools, and digital businesses looking to build reliable web products.'
    },
    {
        id: 2,
        slug: 'blockchain',
        icon: Link2,
        title: 'Blockchain Solutions',
        description: 'We build secure and practical blockchain solutions that enable transparency, trust, and decentralization.',
        gradient: 'linear-gradient(135deg, #00D1FF 0%, #0099CC 100%)',
        color: '#00D1FF',
        deliverables: [
            'Smart contract development and auditing',
            'Web3 and decentralized applications (dApps)',
            'Crypto payment and wallet integrations',
            'Token, NFT, and blockchain-based platforms',
            'Web2 to Web3 system integrations'
        ],
        bestFor: 'fintechs, Web3 startups, platforms adopting crypto or decentralized technologies.'
    },
    {
        id: 3,
        slug: 'ai-automation',
        icon: Brain,
        title: 'AI & Automation',
        description: 'We integrate artificial intelligence and automation into software systems to improve efficiency and decision-making.',
        gradient: 'linear-gradient(135deg, #020066 0%, #0039CC 100%)',
        color: '#020066',
        deliverables: [
            'AI-powered chatbots and assistants',
            'Intelligent workflow and process automation',
            'AI integrations for existing software',
            'Data-driven insights and smart analytics',
            'Custom AI-enabled applications'
        ],
        bestFor: 'businesses seeking smarter operations and automated digital processes.'
    },
    {
        id: 4,
        slug: 'enterprise-api',
        icon: Database,
        title: 'Enterprise & API Systems',
        description: 'We architect robust backend systems and APIs that power enterprise-grade applications.',
        gradient: 'linear-gradient(135deg, #00D1FF 0%, #0099CC 100%)',
        color: '#00D1FF',
        deliverables: [
            'Scalable backend architecture',
            'REST and GraphQL API development',
            'Third-party system integrations',
            'Cloud-ready and performance-optimized systems',
            'Secure data handling and authentication systems'
        ],
        bestFor: 'enterprises and platforms requiring reliability, scalability, and seamless integrations.'
    }
];

const Services: React.FC = () => {
    const [highlightedService, setHighlightedService] = useState<number | null>(null);

    useEffect(() => {
        const handleHashNavigation = () => {
            const hash = window.location.hash.replace('#', '');
            const serviceMap: { [key: string]: number } = {
                'web-saas': 1,
                'blockchain': 2,
                'ai-automation': 3,
                'enterprise-api': 4
            };

            if (hash && serviceMap[hash]) {
                setTimeout(() => {
                    setHighlightedService(serviceMap[hash]);

                    // Scroll to the specific card
                    const cardElement = document.getElementById(`service-${serviceMap[hash]}`);
                    if (cardElement) {
                        cardElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }

                    // Remove highlight after 3 seconds
                    setTimeout(() => {
                        setHighlightedService(null);
                    }, 3000);
                }, 100);
            }
        };

        handleHashNavigation();
        window.addEventListener('hashchange', handleHashNavigation);

        return () => window.removeEventListener('hashchange', handleHashNavigation);
    }, []);

    return (
        <Box
            id="services-section"
            sx={{
                position: 'relative',
                backgroundColor: '#F8F9FD',
                py: { xs: 10, md: 14 },
                overflow: 'hidden',
                boxShadow: 'none',
                border: 'none'
            }}
        >
            {/* Decorative background elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    left: '-5%',
                    width: '500px',
                    height: '500px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0, 209, 255, 0.1), transparent)',
                    filter: 'blur(80px)',
                    pointerEvents: 'none'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '-5%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(2, 0, 102, 0.08), transparent)',
                    filter: 'blur(80px)',
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
                            Our Services
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
                        End-to-End Software Solutions
                    </Typography>

                    <Typography
                    variant='subtitle1'
                        sx={{
                            color: '#555',
                            lineHeight: 1.8,
                            maxWidth: '800px',
                            mx: 'auto',
                            fontFamily: "'Inter', sans-serif",
                        }}
                    >
                        At Advanztek Nig. Ltd., we specialize in designing and engineering modern digital products
                        using cutting-edge technologies. Our services cover the full lifecycle of software
                        development—from idea to deployment and beyond.
                    </Typography>
                </Box>

                {/* Services Grid */}
                <Grid container spacing={4}>
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        const isHighlighted = highlightedService === service.id;

                        return (
                            <Grid key={service.id} size={{ xs: 12, sm: 6 }}>
                                <Box
                                    id={`service-${service.id}`} // Add ID for scrolling
                                    sx={{
                                        display:'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        p: 4,
                                        borderRadius: '24px',
                                        backgroundColor: '#fff',
                                        border: '2px solid', // Changed from 1px to 2px for highlight
                                        borderColor: isHighlighted ? service.color : 'rgba(2, 0, 102, 0.08)',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transform: isHighlighted ? 'scale(1.02)' : 'scale(1)',
                                        boxShadow: isHighlighted
                                            ? `0 20px 60px ${service.color}30, 0 0 0 4px ${service.color}15`
                                            : 'none',
                                        animation: isHighlighted ? 'pulse 2s ease-in-out' : 'none',
                                        '@keyframes pulse': {
                                            '0%, 100%': {
                                                boxShadow: `0 20px 60px ${service.color}30, 0 0 0 4px ${service.color}15`,
                                            },
                                            '50%': {
                                                boxShadow: `0 20px 80px ${service.color}40, 0 0 0 6px ${service.color}25`,
                                            }
                                        },
                                        '&:hover': {
                                            transform: isHighlighted ? 'scale(1.02) translateY(-4px)' : 'translateY(-8px)',
                                            boxShadow: `0 20px 60px ${service.color}15`,
                                            borderColor: service.color,
                                            '& .service-icon': {
                                                transform: 'scale(1.1) rotate(5deg)',
                                            },
                                            '& .view-details': {
                                                transform: 'translateX(8px)',
                                            }
                                        }
                                    }}
                                >
                                    {/* Gradient overlay - always show when highlighted */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            height: '4px',
                                            background: service.gradient,
                                            opacity: isHighlighted ? 1 : 0,
                                            transition: 'opacity 0.3s ease',
                                        }}
                                    />

                                    {/* Icon */}
                                    <Box
                                        className="service-icon"
                                        sx={{
                                            alignSelf: {xs: 'center', sm: 'flex-start'},
                                            width: 70,
                                            height: 70,
                                            borderRadius: '16px',
                                            background: service.gradient,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mb: 3,
                                            transition: 'transform 0.4s ease'
                                        }}
                                    >
                                        <IconComponent size={32} color="#fff" />
                                    </Box>

                                    {/* Title */}
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontFamily: "'Poppins', sans-serif",
                                            fontWeight: 700,
                                            mb: 2,
                                            color: '#020066',
                                            fontSize: '1.5rem',
                                            textAlign: {xs: 'center', sm: 'left'}
                                        }}
                                    >
                                        {service.title}
                                    </Typography>

                                    {/* Description */}
                                    <Typography
                                        sx={{
                                            color: '#666',
                                            fontSize: '1rem',
                                            lineHeight: 1.7,
                                            mb: 3,
                                            fontFamily: "'Inter', sans-serif",
                                            textAlign: {xs: 'justify', sm: 'left'}
                                        }}
                                    >
                                        {service.description}
                                    </Typography>

                                    {/* What we deliver */}
                                    <Typography
                                        sx={{
                                            fontWeight: 700,
                                            color: '#020066',
                                            mb: 2,
                                            fontSize: '0.95rem',
                                            fontFamily: "'Poppins', sans-serif"
                                        }}
                                    >
                                        What we deliver:
                                    </Typography>

                                    <Box sx={{ mb: 3 }}>
                                        {service.deliverables.slice(0, 3).map((item, idx) => (
                                            <Box
                                                key={idx}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: 1.5,
                                                    mb: 1.5
                                                }}
                                            >
                                                <CheckCircle2
                                                    size={18}
                                                    color={service.color}
                                                    style={{ marginTop: '2px', flexShrink: 0 }}
                                                />
                                                <Typography
                                                    sx={{
                                                        color: '#555',
                                                        fontSize: '0.9rem',
                                                        lineHeight: 1.6,
                                                        fontFamily: "'Inter', sans-serif"
                                                    }}
                                                >
                                                    {item}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>

                                    {/* Best for */}
                                    <Box
                                        sx={{
                                            p: 2,
                                            borderRadius: '12px',
                                            backgroundColor: `${service.color}08`,
                                            border: '1px solid',
                                            borderColor: `${service.color}20`,
                                            mb: 3
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: '0.85rem',
                                                color: '#555',
                                                fontFamily: "'Inter', sans-serif"
                                            }}
                                        >
                                            <strong style={{ color: service.color }}>Best for:</strong> {service.bestFor}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;
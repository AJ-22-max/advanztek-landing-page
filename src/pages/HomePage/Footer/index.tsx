import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Container, Grid, IconButton, Divider } from '@mui/material';
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Heart,
    ChevronUp
} from 'lucide-react';


const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Add scroll listener
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const companyLinks = [
        { label: 'About Us', href: '#about-section', slideId: 'company' },
        { label: 'Vision & Mission', href: '#about-section', slideId: 'company' },
        { label: 'Our Leadership', href: '#', slideId: 'leadership' },
        { label: 'Our Approach', href: '#', slideId: 'approach' }
    ];

    const servicesLinks = [
        { label: 'Web & SaaS Development', href: '#services-section', slideId: 'web-saas' },
        { label: 'Blockchain Solutions', href: '#services-section', slideId: 'blockchain' },
        { label: 'AI & Automation', href: '#services-section', slideId: 'ai-automation' },
        { label: 'Enterprise & API Systems', href: '#services-section', slideId: 'enterprise-api' }
    ];

    const resourcesLinks = [
        { label: 'Documentation' },
        { label: 'Support Center' },
        { label: 'Privacy Policy' },
        { label: 'Terms of Service' }
    ];

    const socialLinks = [
        { icon: Facebook, href: '#', label: 'Facebook', color: '#1877F2' },
        { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
        { icon: Linkedin, href: '#', label: 'LinkedIn', color: '#0A66C2' },
        { icon: Instagram, href: '#', label: 'Instagram', color: '#E4405F' }
    ];

    const contactInfo = [
        {
            icon: Phone,
            text: '+234 806 223 5364',
            href: 'tel:+2348062235364'
        },
        {
            icon: Mail,
            text: 'advanztek@gmail.com',
            href: 'mailto:advanztek@gmail.com'
        },
        {
            icon: MapPin,
            text: 'Abuja, FCT, Nigeria',
            href: 'https://maps.app.goo.gl/kSfHnjt4ESmyw4KL7'
        }
    ];

    return (
        <Box
            component="footer"
            sx={{
                position: 'relative',
                background: 'linear-gradient(135deg, #020066 0%, #00D1FF 100%)',
                color: '#fff',
                pt: { xs: 8, md: 10 },
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
                    filter: 'blur(80px)',
                    pointerEvents: 'none'
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
                    filter: 'blur(70px)',
                    pointerEvents: 'none'
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
                {/* Main Footer Content */}
                <Grid container spacing={4}>
                    {/* Company Info */}
                    <Grid size={{ xs: 12, md: 4 }}>
                        <Box sx={{ mb: 3 }}>
                            <Box
                                component="img"
                                src="/logo/lightLogo.png"
                                alt="Advanztek Logo"
                                sx={{
                                    width: '120px',
                                    mb: 3
                                }}
                            />
                            <Typography
                                sx={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontSize: '0.95rem',
                                    lineHeight: 1.7,
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    mb: 3
                                }}
                            >
                                Transforming lives through technology. We specialize in building modern digital
                                solutions that empower businesses and individuals across Nigeria and beyond.
                            </Typography>

                            {/* Social Links */}
                            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <IconButton
                                            key={index}
                                            component="a"
                                            href={social.href}
                                            target="_blank"
                                            aria-label={social.label}
                                            sx={{
                                                width: 45,
                                                height: 45,
                                                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                                                backdropFilter: 'blur(10px)',
                                                color: '#fff',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: '#fff',
                                                    color: social.color,
                                                    transform: 'translateY(-4px)',
                                                    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
                                                }
                                            }}
                                        >
                                            <IconComponent size={20} />
                                        </IconButton>
                                    );
                                })}
                            </Box>
                        </Box>
                    </Grid>

                    {/* Company Links */}
                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                mb: 3
                            }}
                        >
                            Company
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {companyLinks.map((link, index) => (
                                <Box
                                    key={index}
                                    component="a"
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate('/');
                                        setTimeout(() => {
                                            const aboutSection = document.getElementById('about-section');
                                            if (aboutSection) {
                                                aboutSection.scrollIntoView({ behavior: 'smooth' });
                                                setTimeout(() => {
                                                    window.location.hash = link.slideId;
                                                    window.dispatchEvent(new HashChangeEvent('hashchange'));
                                                }, 500);
                                            }
                                        }, 100);
                                    }}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        textDecoration: 'none',
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '0.95rem',
                                        transition: 'all 0.3s ease',
                                        textWrap: 'wrap',
                                        '&:hover': {
                                            color: '#fff',
                                            transform: 'translateX(5px)',
                                            '& .arrow-icon': {
                                                opacity: 1,
                                                transform: 'translateX(0)'
                                            }
                                        }
                                    }}
                                >
                                    {link.label}
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    {/* Services Links */}
                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                mb: 3
                            }}
                        >
                            Services
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {servicesLinks.map((link, index) => (
                                <Box
                                    key={index}
                                    component="a"
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        navigate('/');
                                        setTimeout(() => {
                                            const servicesSection = document.getElementById('services-section');
                                            if (servicesSection) {
                                                servicesSection.scrollIntoView({ behavior: 'smooth' });
                                                setTimeout(() => {
                                                    window.location.hash = link.slideId;
                                                    window.dispatchEvent(new HashChangeEvent('hashchange'));
                                                }, 500);
                                            }
                                        }, 100);
                                    }}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        textDecoration: 'none',
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '0.95rem',
                                        transition: 'all 0.3s ease',
                                        textWrap: 'wrap',
                                        '&:hover': {
                                            color: '#fff',
                                            transform: 'translateX(5px)',
                                            '& .arrow-icon': {
                                                opacity: 1,
                                                transform: 'translateX(0)'
                                            }
                                        }
                                    }}
                                >
                                    {link.label}
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    {/* Resources Links */}
                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                mb: 3
                            }}
                        >
                            Resources
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                            {resourcesLinks.map((link, index) => (
                                <Box
                                    key={index}
                                    component="a"
                                    href={link.href}
                                    sx={{
                                        cursor: 'default',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        color: 'rgba(255, 255, 255, 0.8)',
                                        textDecoration: 'none',
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: '0.95rem',
                                        transition: 'all 0.3s ease',
                                        textWrap: 'wrap',
                                        '&:hover': {
                                            color: '#fff',
                                            transform: 'translateX(5px)',
                                            '& .arrow-icon': {
                                                opacity: 1,
                                                transform: 'translateX(0)'
                                            }
                                        }
                                    }}
                                >
                                    {link.label}
                                </Box>
                            ))}
                        </Box>
                    </Grid>

                    {/* Contact Info */}
                    <Grid size={{ xs: 6, md: 2 }}>
                        <Typography
                            sx={{
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 700,
                                fontSize: '1.1rem',
                                mb: 3
                            }}
                        >
                            Contact Us
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {contactInfo.map((info, index) => {
                                const IconComponent = info.icon;
                                return (
                                    <Box
                                        key={index}
                                        component="a"
                                        href={info.href}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: 1.5,
                                            color: 'rgba(255, 255, 255, 0.9)',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                color: '#fff',
                                                transform: 'translateX(3px)'
                                            }
                                        }}
                                    >
                                        <IconComponent size={20} style={{ marginTop: '2px', flexShrink: 0 }} />
                                        <Typography
                                            sx={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontSize: '0.9rem',
                                                lineHeight: 1.5,
                                                wordBreak: 'break-word',
                                            }}
                                        >
                                            {info.text}
                                        </Typography>
                                    </Box>
                                );
                            })}
                        </Box>
                    </Grid>
                </Grid>

                {/* Divider */}
                <Divider
                    sx={{
                        my: 5,
                        borderColor: 'rgba(255, 255, 255, 0.2)'
                    }}
                />

                {/* Bottom Footer */}
                <Box
                    sx={{
                        pb: 4,
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.9rem',
                            color: 'rgba(255, 255, 255, 0.8)',
                            textAlign: { xs: 'center', md: 'left' }
                        }}
                    >
                        © {currentYear} Advanztek Nig. Ltd. All rights reserved.
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            fontFamily: "'Inter', sans-serif",
                            fontSize: '0.9rem',
                            color: 'rgba(255, 255, 255, 0.8)'
                        }}
                    >
                        Made with <Heart size={16} fill="#fff" style={{ margin: '0 4px' }} /> in Nigeria
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: 3,
                            flexWrap: 'wrap',
                            justifyContent: { xs: 'center', md: 'flex-end' }
                        }}
                    >
                        <Box
                            component="a"
                            href="#"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                textDecoration: 'none',
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '0.9rem',
                                transition: 'color 0.3s ease',
                                '&:hover': {
                                    color: '#fff'
                                }
                            }}
                        >
                            Privacy Policy
                        </Box>
                        <Box
                            component="a"
                            href="#"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                textDecoration: 'none',
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '0.9rem',
                                transition: 'color 0.3s ease',
                                '&:hover': {
                                    color: '#fff'
                                }
                            }}
                        >
                            Terms of Service
                        </Box>
                        <Box
                            component="a"
                            href="#"
                            sx={{
                                color: 'rgba(255, 255, 255, 0.8)',
                                textDecoration: 'none',
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '0.9rem',
                                transition: 'color 0.3s ease',
                                '&:hover': {
                                    color: '#fff'
                                }
                            }}
                        >
                            Cookie Policy
                        </Box>
                    </Box>
                </Box>
            </Container>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <Box
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    sx={{
                        position: 'fixed',
                        bottom: 30,
                        right: 30,
                        width: 50,
                        height: 50,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #020066 0%, #00D1FF 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 4px 20px rgba(2, 0, 102, 0.3)',
                        transition: 'all 0.3s ease',
                        zIndex: 1000,
                        animation: 'fadeIn 0.3s ease',
                        '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 8px 30px rgba(2, 0, 102, 0.4)',
                        },
                        '@keyframes fadeIn': {
                            from: { opacity: 0, transform: 'scale(0.8)' },
                            to: { opacity: 1, transform: 'scale(1)' }
                        }
                    }}
                >
                    <ChevronUp size={24} color="#fff" />
                </Box>
            )}
        </Box>
    );
};

export default Footer;
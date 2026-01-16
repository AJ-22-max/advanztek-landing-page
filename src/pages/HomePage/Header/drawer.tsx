import { useState } from "react";
import {
    Box,
    Button,
    Typography,
    Drawer,
    Collapse,
} from '@mui/material';
import {
    Phone,
    Close,
    ExpandMore
} from '@mui/icons-material';
import type { NavigateFunction } from 'react-router-dom';
import { about } from "./data";
import type { TransformedService } from "./data";
import { styles } from "./styles";

interface MobileDrawerProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
    navigate: NavigateFunction;
    transformedServices: TransformedService[];
}

function MobileDrawer({
    mobileMenuOpen,
    setMobileMenuOpen,
    navigate,
    transformedServices,
}: MobileDrawerProps) {
    const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
    return (
        <Drawer
            anchor="left"
            open={mobileMenuOpen}
            onClose={() => setMobileMenuOpen(false)}
            sx={styles.drawer}
        >
            <Box
                sx={styles.box}
            >
                {/* Header with Close Button */}
                <Box sx={styles.header}>
                    <Box
                        onClick={() => {
                            navigate('/');
                        }}
                        sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
                        <Box
                            component="img"
                            src="/logo/darkLogo.png"
                            alt="Advanztek Nig. Ltd Logo"
                            sx={{
                                width: '60px',
                                display: 'block'
                            }}
                        />
                    </Box>
                    <Button
                        onClick={() => setMobileMenuOpen(false)}
                        sx={{
                            color: '#000000 !important',
                            bgcolor: 'transparent !important',
                            ...styles.mobileMenuBtn
                        }}
                    >
                        <Close />
                    </Button>
                </Box>

                {/* Navigation Section */}
                <Box sx={{ flex: 1, overflowY: 'auto', p: 2 }}>
                    {/* Home */}
                    <Button
                        size='large'
                        disableRipple
                        fullWidth
                        onClick={() => {
                            navigate('/');
                            setMobileMenuOpen(false);
                            setMobileExpandedSection(null);
                        }}
                        sx={{
                            ...styles.mobileActiveBtn,
                            color: location.pathname === '/' ? '#000 !important' : '#666 !important',
                            fontWeight: location.pathname === '/' ? 600 : 400,
                            bgcolor: location.pathname === '/' ? 'rgba(0,0,0,0.04) !important' : 'transparent !important',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: '0px',
                                bottom: '0px',
                                width: '4px',
                                borderRadius: '0',
                                background: location.pathname === '/'
                                    ? 'linear-gradient(90deg, #020066, #00D1FF)'
                                    : 'transparent',
                                transition: 'all 0.3s ease',
                            }
                        }}
                    >
                        Home
                    </Button>

                    {/* About Section */}
                    <Box sx={{ mb: 0.5 }}>
                        <Button
                            size='large'
                            disableRipple
                            fullWidth
                            onClick={() => {
                                if (mobileExpandedSection === 'about') {
                                    // If already expanded, close and scroll to About section
                                    setMobileExpandedSection(null);
                                    setMobileMenuOpen(false);
                                    navigate('/');
                                    setTimeout(() => {
                                        const aboutSection = document.getElementById('about-section');
                                        if (aboutSection) {
                                            aboutSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }, 100);
                                } else {
                                    // Otherwise just toggle the menu
                                    setMobileExpandedSection('about');
                                }
                            }}
                            sx={{
                                fontWeight: mobileExpandedSection === 'about' ? 600 : 400,
                                ...styles.mobileNavBtn
                            }}
                        >
                            About
                            <ExpandMore
                                sx={{
                                    fontSize: '18px !important',
                                    transform: mobileExpandedSection === 'about' ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            />
                        </Button>

                        <Collapse in={mobileExpandedSection === 'about'}>
                            <Box sx={{ pl: 1, pr: 1, }}>
                                {about.map((about, idx) => {
                                    const slideMap = ['company', 'leadership', 'approach'];

                                    return (
                                        <Box
                                            key={idx}
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                setMobileExpandedSection(null);

                                                // Check if already on home page
                                                if (location.pathname === '/') {
                                                    // Already on home, just scroll and set hash
                                                    const aboutSection = document.getElementById('about-section');
                                                    if (aboutSection) {
                                                        aboutSection.scrollIntoView({ behavior: 'smooth' });

                                                        setTimeout(() => {
                                                            window.location.hash = slideMap[idx];
                                                            window.dispatchEvent(new HashChangeEvent('hashchange'));
                                                        }, 500);
                                                    }
                                                } else {
                                                    // Navigate to home with hash
                                                    navigate(`/#${slideMap[idx]}`);

                                                    // Wait for page load, then scroll
                                                    setTimeout(() => {
                                                        const aboutSection = document.getElementById('about-section');
                                                        if (aboutSection) {
                                                            aboutSection.scrollIntoView({ behavior: 'smooth' });
                                                        }
                                                    }, 300);
                                                }
                                            }}
                                            sx={{
                                                py: 1,
                                                px: 2,
                                                mb: 1.5,
                                                borderRadius: 1.5,
                                                border: 'none',
                                                borderBottom: '1px solid',
                                                borderColor: 'grey.200',
                                                bgcolor: 'white',
                                                boxShadow: 'none',
                                                cursor: 'pointer',
                                                '&:hover': {
                                                    bgcolor: 'rgba(0,0,0,0.02)',
                                                }
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', gap: 1.5, mb: 1 }}>
                                                <Box sx={{ flex: 1 }}>
                                                    <Typography sx={{ fontWeight: 600, fontSize: '14px !important', mb: 0.5, color: '#1a1a1a !important' }}>
                                                        {about.title}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '12px !important', color: '#666 !important' }}>
                                                        {about.desc}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    )
                                })}
                            </Box>
                        </Collapse>
                    </Box>

                    {/* Why Us */}
                    <Button
                        size='large'
                        disableRipple
                        fullWidth
                        onClick={() => {
                            navigate('/');
                            setMobileMenuOpen(false);
                            setMobileExpandedSection(null);
                            setTimeout(() => {
                                const whyUsSection = document.getElementById('why-choose-us-section');
                                if (whyUsSection) {
                                    whyUsSection.scrollIntoView({ behavior: 'smooth' });
                                }
                            }, 100);
                        }}
                        sx={{
                            fontWeight: location.pathname === '/whyUs' ? 600 : 400,
                            bgcolor: location.pathname === '/whyUs' ? 'rgba(0,0,0,0.04) !important' : 'transparent !important',
                            ...styles.mobileActiveBtn,
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: '0px',
                                bottom: '0px',
                                width: '4px',
                                borderRadius: '0',
                                background: location.pathname === '/whyUs'
                                    ? 'linear-gradient(90deg, #020066, #00D1FF)'
                                    : 'transparent',
                                transition: 'all 0.3s ease',
                            }
                        }}
                    >
                        Why Us
                    </Button>

                    {/* Services Section */}
                    <Box sx={{ mb: 0.5 }}>
                        <Button
                            size='large'
                            disableRipple
                            fullWidth
                            onClick={() => {
                                if (mobileExpandedSection === 'services') {
                                    // If already expanded, close and scroll to Services section
                                    setMobileExpandedSection(null);
                                    setMobileMenuOpen(false);
                                    navigate('/');
                                    setTimeout(() => {
                                        const servicesSection = document.getElementById('services-section');
                                        if (servicesSection) {
                                            servicesSection.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }, 100);
                                } else {
                                    // Otherwise just toggle the menu
                                    setMobileExpandedSection('services');
                                }
                            }}
                            sx={{
                                fontWeight: mobileExpandedSection === 'services' ? 600 : 400,
                                ...styles.mobileNavBtn
                            }}
                        >
                            Services
                            <ExpandMore
                                sx={{
                                    fontSize: '18px !important',
                                    transform: mobileExpandedSection === 'services' ? 'rotate(180deg)' : 'rotate(0deg)',
                                    transition: 'transform 0.3s ease',
                                }}
                            />
                        </Button>

                        <Collapse in={mobileExpandedSection === 'services'}>
                            <Box sx={{ pl: 1, pr: 1, pt: 1 }}>
                                {transformedServices.map((service, idx) => {
                                    const serviceSlugMap = ['web-saas', 'blockchain', 'ai-automation', 'enterprise-api'];

                                    return (
                                        <Box
                                            key={idx}
                                            onClick={() => {
                                                setMobileMenuOpen(false);
                                                setMobileExpandedSection(null);

                                                // Check if already on home page
                                                if (location.pathname === '/') {
                                                    // Already on home, just scroll and set hash
                                                    const servicesSection = document.getElementById('services-section');
                                                    if (servicesSection) {
                                                        servicesSection.scrollIntoView({ behavior: 'smooth' });

                                                        setTimeout(() => {
                                                            window.location.hash = serviceSlugMap[idx];
                                                            window.dispatchEvent(new HashChangeEvent('hashchange'));
                                                        }, 500);
                                                    }
                                                } else {
                                                    // Navigate to home with hash
                                                    navigate(`/#${serviceSlugMap[idx]}`);

                                                    // Wait for page load, then scroll
                                                    setTimeout(() => {
                                                        const servicesSection = document.getElementById('services-section');
                                                        if (servicesSection) {
                                                            servicesSection.scrollIntoView({ behavior: 'smooth' });
                                                        }
                                                    }, 300);
                                                }
                                            }}
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 1.5,
                                                p: 1.5,
                                                mb: 0.5,
                                                borderRadius: 1.5,
                                                cursor: 'pointer',
                                                borderBottom: '1px solid',
                                                borderColor: 'grey.200',
                                                '&:hover': {
                                                    bgcolor: 'rgba(0,0,0,0.04)',
                                                },
                                            }}
                                        >
                                            <Box sx={{ flex: 1 }}>
                                                <Typography sx={{ fontWeight: 500, fontSize: '14px !important', mb: 0.25, color: '#1a1a1a !important' }}>
                                                    {service.title}
                                                </Typography>
                                                <Typography sx={{ fontSize: '12px !important', color: '#666 !important' }}>
                                                    {service.desc}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Collapse>
                    </Box>

                    {/* Contact */}
                    <Button
                        size='large'
                        disableRipple
                        fullWidth
                        onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileExpandedSection(null);

                            // If on home page, just scroll
                            if (location.pathname === '/') {
                                setTimeout(() => {
                                    const contactSection = document.getElementById('contact-section');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }, 100);
                            } else {
                                // Navigate to home then scroll
                                navigate('/');
                                setTimeout(() => {
                                    const contactSection = document.getElementById('contact-section');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }, 300);
                            }
                        }}
                        sx={{
                            ...styles.mobileActiveBtn,
                            color: '#666 !important',
                            fontWeight: 400,
                            bgcolor: 'transparent !important',
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: '0px',
                                bottom: '0px',
                                width: '4px',
                                borderRadius: '0',
                                background: 'transparent',
                                transition: 'all 0.3s ease',
                            }
                        }}
                    >
                        Contact
                    </Button>
                </Box>

                {/* Action Buttons - Bottom */}
                <Box sx={styles.mobileSideActions}>
                    <Button

                        fullWidth
                        size="large"
                        onClick={() => navigate('/auth/signup')}
                        sx={styles.mobileStartBtn} >
                        Contact Us
                    </Button>

                    <Box
                        onClick={() => {
                            window.open('https://wa.me/2348000000000?text=Hello, I would like to inquire about Fidei Polytechnic Gboko', '_blank');
                        }}
                        sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
                        <Phone sx={{ fontSize: '16px !important', color: '#666 !important' }} />
                        <Typography sx={{ color: '#666 !important', fontSize: '13px !important' }}>
                            +234 806 223 5364
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Drawer>
    );
}

export default MobileDrawer;
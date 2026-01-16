import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    useMediaQuery,
    useTheme,
    alpha,
    AppBar,
    Box,
    Button,
    Container,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    Fade,
    useScrollTrigger,
} from '@mui/material';
import {
    Phone,
    ArrowForwardIos,
    Menu as MenuIcon,
} from '@mui/icons-material';
import { about, services } from "./data";
import MobileDrawer from './drawer';
import { styles } from './styles';

const transformedServices = services.map(r => ({ ...r }));

const DropdownArrow = ({
    isOpen,
    shouldHaveWhiteBg
}: {
    isOpen: boolean;
    shouldHaveWhiteBg: boolean;
}) => (
    <ArrowForwardIos
        sx={{
            color: shouldHaveWhiteBg ? '#000000 !important' : 'white',
            fontSize: '11px !important',
            transform: isOpen ? 'rotate(-90deg)' : 'rotate(90deg)',
            transition: 'transform 0.3s ease',
        }}
    />
);

interface HeaderProps {
    activeMenu: null | 'about' | 'services';
    setActiveMenu: React.Dispatch<React.SetStateAction<null | 'about' | 'services'>>;
    menuAnchor: HTMLElement | null;
    setMenuAnchor: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
    closeMenu: () => void;
}

const Header = ({ activeMenu, setActiveMenu, menuAnchor, setMenuAnchor, closeMenu }: HeaderProps) => {

    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const location = useLocation();
    const shouldHaveWhiteBg = scrolled;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const navigate = useNavigate();

    useEffect(() => {
        setScrolled(trigger);
    }, [trigger]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, []);

    const openMenu = (
        menu: 'about' | 'services',
        event: React.MouseEvent<HTMLElement>
    ) => {
        if (isMobile) return;

        setActiveMenu(menu);
        setMenuAnchor(event.currentTarget);
    };

    return (
        <AppBar
            position="fixed"
            elevation={shouldHaveWhiteBg ? 1 : 0}
            sx={{
                py: 0.8,
                bgcolor: shouldHaveWhiteBg ? 'white' : 'transparent',
                transition: 'all 0.3s ease-in-out',
                border: 'none',
                boxShadow: shouldHaveWhiteBg ? 0.7 : 'none'
            }}
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={styles.toolbar}>
                    {/* Logo */}
                    <Box
                        onMouseEnter={closeMenu}
                        onClick={() => {
                            navigate('/');
                        }}

                        sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}>
                        <Box
                            component="img"
                            src={shouldHaveWhiteBg ? `${"/logo/darkLogo.png"}` : `${"/logo/lightLogo.png"}`}
                            alt="Advanztek Nig. Ltd Logo"
                            sx={{
                                width: '80px',
                                display: 'block'
                            }}
                        />
                    </Box>

                    {/* Mobile Menu Button - Only show on xs/sm */}
                    <Box sx={{ display: { xs: 'flex', lg: 'none' }, gap: 2, alignItems: 'center', py: 1 }}>
                        <Button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            sx={{
                                color: shouldHaveWhiteBg ? '#000000 !important' : 'white !important',
                                bgcolor: 'transparent !important',
                                '&:hover': {
                                    bgcolor: shouldHaveWhiteBg ? '#f5f5f5' : 'rgba(255,255,255,0.15)',
                                    borderColor: shouldHaveWhiteBg ? '#d0d0d0' : 'rgba(255,255,255,0.4)',
                                },
                                ...styles.mobileMenuBtn
                            }}
                        >
                            {mobileMenuOpen ? '' : <MenuIcon />}
                        </Button>
                    </Box>

                    {/* Navigation Links */}
                    <Box sx={styles.navigationLinks}>

                        {/* Home Link */}
                        <Button
                            size="large"
                            onMouseEnter={closeMenu}
                            onClick={() => {
                                navigate('/');
                            }}
                            sx={{
                                color: shouldHaveWhiteBg ? '#000000 !important' : 'white',
                                fontWeight: location.pathname === '/' ? 600 : 500,
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: '-4px',
                                    width: location.pathname === '/' ? '100%' : '0%',
                                    height: '4px',
                                    borderRadius: '4px',
                                    background: 'linear-gradient(90deg, #020066, #00D1FF)',
                                    transition: 'width 0.3s ease',
                                },
                                ...styles.activeBtn
                            }}
                        >
                            Home
                        </Button>

                        {/* About Dropdown */}
                        <Button
                            size="large"
                            onMouseEnter={(e) => openMenu('about', e)}
                            onClick={() => {
                                if (isMobile) {
                                    // For mobile, toggle the menu
                                    return;
                                }
                                // For desktop, navigate to About section
                                navigate('/');
                                setTimeout(() => {
                                    const aboutSection = document.getElementById('about-section');
                                    if (aboutSection) {
                                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }, 100);
                            }}
                            sx={{
                                color: shouldHaveWhiteBg ? '#000000 !important' : 'white',
                                ...styles.navigationBtn
                            }}
                        >
                            About
                            <DropdownArrow isOpen={activeMenu === 'about'} shouldHaveWhiteBg={shouldHaveWhiteBg} />
                        </Button>

                        {/* Why Us Link */}
                        <Button
                            size="large"
                            onMouseEnter={closeMenu}
                            onClick={() => {
                                navigate('/');
                                setTimeout(() => {
                                    const whyUsSection = document.getElementById('why-choose-us-section');
                                    if (whyUsSection) {
                                        whyUsSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }, 100);
                            }}
                            sx={{
                                color: shouldHaveWhiteBg ? '#000000 !important' : 'white',
                                fontWeight: location.pathname === '/whyUs' ? 600 : 500,
                                ...styles.activeBtn,
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: '-4px',
                                    width: location.pathname === '/whyUs' ? '100%' : '0%',
                                    height: '4px',
                                    borderRadius: '4px',
                                    background: 'linear-gradient(90deg, #020066, #00D1FF)',
                                    transition: 'width 0.3s ease',
                                }
                            }}
                        >
                            Why Us
                        </Button>

                        {/* Services Link */}
                        <Button
                            size="large"
                            onMouseEnter={(e) => openMenu('services', e)}
                            onClick={() => {
                                if (isMobile) {
                                    return;
                                }
                                closeMenu();
                                navigate('/');
                                setTimeout(() => {
                                    const servicesSection = document.getElementById('services-section');
                                    if (servicesSection) {
                                        servicesSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }, 100);
                            }}
                            sx={{
                                color: shouldHaveWhiteBg ? '#000000 !important' : 'white',
                                ...styles.navigationBtn
                            }}
                        >
                            Services
                            <DropdownArrow isOpen={activeMenu === 'services'} shouldHaveWhiteBg={shouldHaveWhiteBg} />
                        </Button>

                        {/* Contact Link */}
                        <Button
                            size="large"
                            onMouseEnter={closeMenu}
                            onClick={() => {
                                // Close menu first
                                closeMenu();

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
                                color: shouldHaveWhiteBg ? '#000000 !important' : 'white',
                                fontWeight: location.pathname === '/contact' ? 600 : 500,
                                ...styles.activeBtn,
                                '&::after': {
                                    content: '""',
                                    position: 'absolute',
                                    left: 0,
                                    bottom: '-4px',
                                    width: location.pathname === '/contact' ? '100%' : '0%',
                                    height: '4px',
                                    borderRadius: '4px',
                                    background: 'linear-gradient(90deg, #020066, #00D1FF)',
                                    transition: 'width 0.3s ease',
                                }
                            }}
                        >
                            Contact
                        </Button>

                    </Box>

                    {/* Right Side Actions */}
                    <Box
                        onMouseEnter={closeMenu}
                        sx={styles.sideActions}>

                        {/* Phone Number */}
                        <Box
                            onClick={() => {
                                window.open('https://wa.me/2348062235364?text=Hello, I would like to inquire about Advanztek Nig. Ltd', '_blank');
                            }}
                            sx={{
                                bgcolor: shouldHaveWhiteBg ? ((theme) => alpha(theme.palette.primary.main, 0.1)) : ((theme) => alpha(theme.palette.base.main, 0.2)),
                                '&:hover': {
                                    bgcolor: shouldHaveWhiteBg ? ((theme) => alpha(theme.palette.primary.main, 0.2)) : ((theme) => alpha(theme.palette.base.main, 0.3)),
                                    cursor: 'pointer'
                                },
                                ...styles.phoneBox
                            }}>
                            <Phone sx={{ fontSize: 18, color: shouldHaveWhiteBg ? 'primary.main' : 'white' }} />
                            <Typography
                                sx={{
                                    color: shouldHaveWhiteBg ? 'primary.main' : 'white',
                                    ...styles.phoneText
                                }}
                            >
                                +234 806 223 5364
                            </Typography>
                        </Box>
                    </Box>
                </Toolbar>
            </Container>

            {/* Mobile Menu Drawer */}
            <MobileDrawer
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                navigate={navigate}
                transformedServices={transformedServices}
            />

            {/* About Dropdown */}
            <Menu
                anchorEl={menuAnchor}
                open={activeMenu === 'about'}
                onClose={closeMenu}
                slotProps={{
                    paper: {
                        onMouseLeave: closeMenu,
                        sx: {
                            mt: 1.5,
                            minWidth: 520,
                            borderRadius: 2,
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                            transition: 'min-width 0.3s ease',
                        }
                    }
                }}
                sx={styles.menu}
            >
                <Box sx={{ display: 'flex', width: '100%' }}>

                    {/* About List */}
                    <Box sx={{
                        width: '100%',
                        p: 2,
                        borderRight: 'none',
                        transition: 'width 0.3s ease',
                    }}>
                        {about.map((about, idx) => (
                            <MenuItem
                                key={idx}
                                onClick={() => {
                                    closeMenu();

                                    // If already on home page, just scroll and switch slide
                                    if (location.pathname === '/') {
                                        const aboutSection = document.getElementById('about-section');
                                        if (aboutSection) {
                                            aboutSection.scrollIntoView({ behavior: 'smooth' });

                                            // Wait for scroll to complete, then switch slide
                                            setTimeout(() => {
                                                window.location.hash = about.slideId;
                                                window.dispatchEvent(new HashChangeEvent('hashchange'));
                                            }, 500);
                                        }
                                    } else {
                                        // Navigate to home with hash
                                        navigate(`/#${about.slideId}`);
                                    }
                                }}
                                sx={{
                                    p: 2.5,
                                    borderRadius: 1.5,
                                    mb: 1.5,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    transition: 'all 0.2s ease',
                                    backgroundColor: 'transparent',
                                    transform: 'none',
                                    borderBottom: '1px solid',
                                    borderColor: 'grey.200',
                                    '&:hover': {
                                        backgroundColor: about.color + '08',
                                        transform: 'translateX(4px)',
                                    },
                                    '&:last-child': {
                                        mb: 0,
                                        borderBottom: 'none',
                                    }
                                }}
                            >
                                <Box sx={{ display: 'flex', gap: 2, width: '100%', alignItems: 'flex-start', mb: 1.5 }}>
                                    <Box sx={{ flex: 1 }}>
                                        <Typography variant='subtitle2'
                                            sx={styles.aboutTitle}
                                        >
                                            {about.title}
                                        </Typography>
                                        <Typography variant='body2'
                                            sx={{ color: 'grey.600', lineHeight: 1.5 }}
                                        >
                                            {about.desc}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                                    {about.features.map((feature, i) => (
                                        <Box
                                            key={i}
                                            sx={{
                                                px: 1.5,
                                                py: 0.5,
                                                borderRadius: 1,
                                                backgroundColor: about.color + '10',
                                                border: '1px solid',
                                                borderColor: about.color + '30',
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    backgroundColor: about.color + '20',
                                                    borderColor: about.color,
                                                    boxShadow: `0 0 15px ${about.color}40, 0 0 25px ${about.color}20`,
                                                    transform: 'translateY(-2px)',
                                                    '& .feature-text': {
                                                        fontSize: '12px',
                                                    }
                                                }
                                            }}
                                        >
                                            <Typography
                                                variant='chip'
                                                sx={{
                                                    fontWeight: 600,
                                                    color: about.color,
                                                    transition: 'font-size 0.3s ease',
                                                }}
                                            >
                                                {feature}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </MenuItem>
                        ))}
                    </Box>
                </Box>
            </Menu >

            {/* Services Dropdown */}
            <Menu
                anchorEl={menuAnchor}
                open={activeMenu === 'services'}
                onClose={closeMenu}
                slots={{
                    transition: Fade
                }}
                slotProps={{
                    paper: {
                        onMouseLeave: closeMenu,
                        sx: {
                            p: 0,
                            mt: 1.5,
                            minWidth: 380,
                            borderRadius: 2,
                            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                        }
                    }
                }}
                sx={styles.menu}
            >
                <Box sx={{ p: 3 }}>

                    {/* Menu Items */}
                    {transformedServices.map((service, idx) => {
                        const serviceSlugMap = ['web-saas', 'blockchain', 'ai-automation', 'enterprise-api'];

                        return (
                            <MenuItem
                                key={idx}
                                onClick={() => {
                                    closeMenu();

                                    if (location.pathname === '/') {
                                        const servicesSection = document.getElementById('services-section');
                                        if (servicesSection) {
                                            servicesSection.scrollIntoView({ behavior: 'smooth' });

                                            setTimeout(() => {
                                                window.location.hash = serviceSlugMap[idx];
                                                window.dispatchEvent(new HashChangeEvent('hashchange'));
                                            }, 500);
                                        }
                                    } else {
                                        navigate(`/#${serviceSlugMap[idx]}`);
                                    }
                                }}
                                sx={{
                                    p: 2,
                                    borderRadius: 1.5,
                                    mb: 1.5,
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: 2,
                                    transition: 'all 0.2s ease',
                                    borderBottom: '1px solid',
                                    borderColor: 'grey.200',
                                    '&:hover': {
                                        backgroundColor: 'primary.main + 08',
                                        transform: 'translateX(4px)',
                                    },
                                    '&:last-child': {
                                        mb: 0,
                                        borderBottom: 'none',
                                    }
                                }}
                            >
                                {/* Content */}
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant='subtitle2'
                                        sx={{
                                            fontWeight: 600,
                                            mb: 0.5,
                                            color: '#1a1a1a',
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                    <Typography variant='body2'
                                        sx={{
                                            fontSize: '13px',
                                            color: '#666',
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {service.desc}
                                    </Typography>
                                </Box>
                            </MenuItem>
                        )
                    })}
                </Box>
            </Menu>
        </AppBar >
    );
};

export default Header;
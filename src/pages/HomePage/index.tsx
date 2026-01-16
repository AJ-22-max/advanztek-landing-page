import { useEffect } from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';
import About from './About';
import Services from './Services';
import WhyChooseUs from './WhyChooseUs';
import Contact from './Contact';

interface HomepageProps {
    closeMenu?: () => void;
}

function HomePage({ closeMenu }: HomepageProps) {

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get('section');

        if (section) {
            closeMenu?.();

            setTimeout(() => {
                const element = document.getElementById(section);
                if (element) {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }, 100);
        }
    }, [closeMenu]);

    return (
        <Box onClick={closeMenu}
            sx={{ minHeight: '200vh', bgcolor: 'black' }}>
            <Hero />
            <About />
            <Services />
            <WhyChooseUs />
            <Contact />
        </Box>
    );
}

export default HomePage;
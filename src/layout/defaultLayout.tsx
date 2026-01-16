import React, { useState } from 'react';
import Header from '../pages/HomePage/Header';
import Footer from '../pages/HomePage/Footer';

interface LayoutProps {
    children: React.ReactNode;
    hideFooter?: boolean;
}

function Layout({ children, hideFooter = false }: LayoutProps) {
    const [activeMenu, setActiveMenu] = useState<null | 'services' | 'about'>(null);
    const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

    const closeMenu = () => {
        setActiveMenu(null);
        setMenuAnchor(null);
    };
    return (
        <>
            <Header
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                menuAnchor={menuAnchor}
                setMenuAnchor={setMenuAnchor}
                closeMenu={closeMenu}
            />
            {React.cloneElement(children as React.ReactElement<any>, { closeMenu })}
            {!hideFooter && <Footer />}
        </>
    );
}

export default Layout;
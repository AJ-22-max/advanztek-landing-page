export const styles = {
    toolbar: {
        py: {
            xs: 1, md: 1.5
        },
        px: {
            lg: 5
        },
        justifyContent: 'space-between',
        minHeight: {
            xs: '12px',
            md: 'auto'
        },
        gap: {
            md: 1,
            lg: 2
        }
    },
    logoText: {
        fontWeight: 700,
        letterSpacing: '-0.5px',
        fontSize: {
            xs: '22px',
            sm: '20px',
            md: '2rem'
        },
        lineHeight: 1,
    },
    mobileMenuBtn: {
        minWidth: 'auto',
        width: '28px',
        height: '31px',
        p: '0px !important',
        boxShadow: 'none',
        border: 'none !important',
        transition: 'all 0.3s ease',
        '& .MuiSvgIcon-root': {
            fontSize: { xs: '24px !important', sm: '28px !important' },
        }
    },
    navigationLinks: {
        display: {
            xs: 'none',
            lg: 'flex'
        },
        alignItems: 'center',
        gap: {
            md: '1vw',
            lg: 4
        }
    },
    activeBtn: {
        bgcolor: 'transparent !important',
        px: '0px !important',
        borderColor: 'transparent !important',
        boxShadow: 'none',
        fontFamily: 'Gilroy',
        textTransform: 'none',
        fontSize: {xs: '16px !important', md: '17px !important'},
        '&:hover::after': {
            width: '100%',
        },
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.05)',
            boxShadow: 'none',
        }
    },
    navigationBtn: {
        gap: 0.6,
        bgcolor: 'transparent !important',
        px: '0px !important',
        borderColor: 'transparent !important',
        boxShadow: 'none',
        fontFamily: 'Gilroy',
        fontWeight: 500,
        textTransform: 'none',
        fontSize: {xs: '16px !important', md: '17px !important'},
        '& .MuiSvgIcon-root': {
            fontSize: '11px !important',
        },
        '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            bottom: '-4px',
            width: '0%',
            height: '4px',
            borderRadius: '4px',
            background: 'linear-gradient(90deg, #020066, #00D1FF)',
            transition: 'width 0.3s ease',
        },
        '&:hover::after': {
            width: '100%',
        },
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.05)',
            boxShadow: 'none',
        }
    },
    sideActions: {
        display: {
            xs: 'none',
            lg: 'flex'
        },
        alignItems: 'center',
        gap: {
            md: 1,
            lg: 2
        }
    },
    phoneBox: {
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        py: 0.5,
        px: 0.8,
        borderRadius: '10px',
    },
    phoneText: {
        fontFamily: 'Gilroy',
        fontSize: '16px !important',
        fontWeight: 500,
        display: { xs: 'none', md: 'none', lg: 'block' },
        whiteSpace: 'nowrap',
    },
    loginBtn: {
        position: "relative",
        px: '18px !important',
        py: '8px !important',
        fontFamily: 'Gilroy',
        fontWeight: 600,
        fontSize: '16px !important',
        textTransform: 'none',
        borderRadius: '12px',
        boxShadow: 'none',
        transition: 'all 0.3s ease',
        '&::after': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: '12px',
            padding: '2px',
            background: 'linear-gradient(90deg, #00D1FF, #020066)',
            WebkitMask:
                'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            opacity: 1,
            transition: 'opacity 0.3s ease',
        },
    },
    startBtn: {
        fontFamily: 'Gilroy',
        fontWeight: 700,
        fontSize: '16px !important',
        textTransform: 'none',
        color: '#fff',
        background: 'linear-gradient(135deg, #020066 0%, #00D1FF 100%)',
        borderColor: '#00D1FF !important',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(34, 197, 94, 0.25)',
        transition: 'all 0.3s ease',
        '&:hover': {
            transform: 'translateY(-3px) scale(1.02)',
            boxShadow: '0 12px 24px rgba(34, 197, 94, 0.35)',
        },
    },

    menu: {
        '& .MuiBackdrop-root': {
            backgroundColor: 'transparent',
        },
        pointerEvents: 'none',
        '& .MuiPaper-root': {
            pointerEvents: 'auto',
        }
    },
    aboutIcon: {
        width: 40,
        height: 40,
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '20px',
        flexShrink: 0,
    },
    aboutTitle: {
        fontFamily: 'Gilroy',
        fontWeight: 700,
        fontSize: '15px',
        color: 'base.customDark',
        mb: 0.5,
    },
    hoveredAbout: {
        width: 380,
        p: 3,
        animation: 'slideIn 0.3s ease',
        '@keyframes slideIn': {
            from: { opacity: 0, transform: 'translateX(-20px)' },
            to: { opacity: 1, transform: 'translateX(0)' },
        }
    },
    serviceIcon: {
        width: 40,
        height: 40,
        borderRadius: 1.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    },
    serviceFooter: {
        mt: 3,
        pt: 3,
        borderTop: '1px solid #e0e0e0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    serviceBtn: {
        color: '#10B981',
        fontWeight: 600,
        textTransform: 'none',
        fontSize: '13px',
        '&:hover': {
            backgroundColor: '#10B98110',
        }
    },
    drawer: {
        display: {
            xs: 'block',
            lg: 'none'
        },
        '& .MuiDrawer-paper': {
            width: {
                xs: '90%',
                sm: '85%'
            },
            maxWidth: '450px',
            bgcolor: 'white',
        }
    },
    box: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 2,
        py: 2.6,
        borderBottom: '1px solid rgba(0,0,0,0.08)'
    },
    mobileActiveBtn: {
        position: 'relative',
        fontFamily: 'Gilroy !important',
        justifyContent: 'flex-start',
        letterSpacing: 1,
        py: 2,
        px: 2,
        mb: 0.5,
        textTransform: 'none',
        fontSize: '16px !important',
        color: '#000 !important',
        borderRadius: 1.5,
        border: 'none !important',
        boxShadow: 'none !important',
        '&:hover': {
            bgcolor: 'transparent !important',
            boxShadow: 'none !important',
        },
    },
    mobileNavBtn: {
        fontFamily: 'Gilroy !important',
        justifyContent: 'space-between',
        letterSpacing: 1,
        color: '#000 !important',
        py: 1.5,
        px: 2,
        textTransform: 'none',
        fontSize: '16px !important',
        borderRadius: 1.5,
        border: 'none !important',
        boxShadow: 'none !important',
        bgcolor: 'transparent !important',
        '&:hover': {
            bgcolor: 'transparent !important',
            boxShadow: 'none !important',
        },
    },
    mobileLoginBtn: {
        mb: 1.5,
        py: 1.5,
        fontFamily: 'Gilroy',
        fontWeight: 700,
        fontSize: '15px !important',
        textTransform: 'none',
        borderRadius: 3,
        color: '#000 !important',
        border: '2px solid rgba(0,0,0,0.2) !important',
        bgcolor: 'white !important',
        boxShadow: 'none !important',
        '&:hover': {
            bgcolor: 'rgba(0,0,0,0.02) !important',
            boxShadow: 'none !important',
        },
    },
    mobileSideActions: {
        p: 2,
        pt: 2,
        pb: 4,
        borderTop: '1px solid rgba(0,0,0,0.08)',
        bgcolor: 'white'
    },
    mobileStartBtn: {
        fontFamily: 'Gilroy',
        fontWeight: 700,
        fontSize: '16px !important',
        textTransform: 'none',
        color: '#fff',
        background: 'linear-gradient(135deg, #020066 0%, #00D1FF 100%)',
        borderColor: '#00D1FF !important',
        borderRadius: '12px',
        boxShadow: '0 8px 20px rgba(138, 43, 226, 0.25)',
        transition: 'all 0.3s ease',
        '&:hover': {
            transform: 'translateY(-3px) scale(1.02)',
            boxShadow: '0 12px 24px rgba(138, 43, 226, 0.35)',
        },
    }
}
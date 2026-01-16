import { createTheme } from "@mui/material/styles";
import { breakpoints } from "../constants/dimensions";
import { colors } from '../constants/colors';
import { fontSize, lineHeight, letterSpacing } from "../constants/typography";

const createResponsiveTypography = (variant: keyof typeof fontSize) => ({
    fontSize: fontSize[variant].xs,
    lineHeight: lineHeight[variant].xs,
    letterSpacing: letterSpacing[variant].xs,
    ...(fontSize[variant].md || lineHeight[variant].md || letterSpacing[variant].md) && {
        [`@media (min-width:${breakpoints.md}px)`]: {
            fontSize: fontSize[variant].md,
            lineHeight: lineHeight[variant].md,
        },
    }
})

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: breakpoints.xs,
            sm: breakpoints.sm,
            md: breakpoints.md,
            lg: breakpoints.lg,
            xl: breakpoints.xl
        }
    },
    palette: {
        base: {
            main: colors.base,
            light: colors.baseLight,
            dark: colors.baseDark
        },
        default: {
            light: colors.light,
            dark: colors.dark,
            grey: colors.primaryGrey
        },
        error: {
            main: colors.error,
            light: colors.errorLight,
            dark: colors.errorDark
        },
        customError: {
            main: colors.main,
            dark: colors.customErrorDark
        },
        primary: {
            main: colors.primary,
            light: colors.primaryLight,
            dark: colors.primaryDark,
        },
        secondary: {
            main: colors.secondary,
            light: colors.secondaryLight,
            dark: colors.secondaryDark
        },

        customSuccess: {
            main: colors.success,
            light: colors.successLight,
            lighter: colors.successLighter,
            dark: colors.successDark
        },
        warning: {
            main: colors.warning,
            light: colors.warningLight,
            dark: colors.warningDark,
        },

        customWarning: {
           light: colors.customWarning,
           dark: colors.customWarningDark,
        },
        
        customBackground: {
            main: colors.background
        },
        chip: {
            primaryLight: colors.chipPrimaryLight,   
            primaryDark: colors.chipPrimaryDark,
            successDark: colors.chipSuccessDark,
            chipSuccessLight: colors.chipGreen,
            warning: colors.chipWarning,
            customLight: colors.chipCustomlight,
            warningLight: colors.chipWarning2
        },
        neutral: {
            main: colors.neutral,
            light: colors.neutralLight,
            dark: colors.neutralDark,
            custom: colors.neutralCustom,
            customLight: colors.neutralCustomLight,
            customDark: colors.neutralCustomDark
        }
    },
    typography: {
        fontFamily: 'Gilroy',
        hero1: {
            ...createResponsiveTypography('hero1'),
        },
        hero2: {
            ...createResponsiveTypography('hero2'),
        },
        hero3: {
            ...createResponsiveTypography('hero3'),
        },
        h1: {
            ...createResponsiveTypography('h1'),
        },
        h2: {
            ...createResponsiveTypography('h2'),
        },
        h3: {
            ...createResponsiveTypography('h3'),
        },
        h4: {
            ...createResponsiveTypography('h4'),
        },
        h5: {
            ...createResponsiveTypography('h5'),
        },
        h6: {
            ...createResponsiveTypography('h6'),

        },
        subtitle1: {
            ...createResponsiveTypography('subtitle1'),
        },
        subtitle2: {
            ...createResponsiveTypography('subtitle2'),
            fontWeight: 400
        },
        body1: {
            ...createResponsiveTypography('body1'),
            fontWeight: 400
        },
        body2: {
            ...createResponsiveTypography('body2'),
            fontWeight: 400
        },
        button: {
            fontWeight: 400,
            ...createResponsiveTypography('button'),
        },
        caption: {
            fontWeight: 400,
            ...createResponsiveTypography('caption'),

        },
        caption1: {
            fontWeight: 400,
            ...createResponsiveTypography('caption1'),

        },
        chip: {
            fontWeight: 400,
            ...createResponsiveTypography('chip'),

        },
    },
    components: {
        MuiMenu: {
            styleOverrides: {
                root: {
                    '.MuiMenu-paper': {
                        boxShadow: 'none',
                        paddingLeft: { sm: '9px' },
                        paddingRight: { sm: '9px' },
                        paddingTop: { sm: '10px' },
                        paddingBottom: { sm: '10px' }
                    }
                }
            }
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    '.MuiMenuItem-root': {
                        padding: '0px'
                    }
                }
            }
        },
        MuiDrawer: {
            styleOverrides: {
                root: {
                    '& .MuiDrawer-paper': {
                        width: 'auto',
                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                        borderRight: '1px solid rgba(0, 0, 0, 0.05)',
                        backgroundColor: 'background.paper',

                    },
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    '.MuiButton-startIcon': {
                        width: '20px',
                    }
                }
            }
        }
    }
})
import React from 'react';
import '@mui/material/styles';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
    interface Palette {
        base: Palette['primary'];

        default: {
            light: string;
            dark: string;
            grey: string;
        };

        customBackground: {
            main: string;
        };

        customSuccess: {
            main: string;
            light: string;
            lighter: string;
            dark: string;
        };

        customError: {
            main: string;
            dark: string;
        }

        chip: {
            primaryLight: string;
            primaryDark: string;
            successDark: string;
            chipSuccessLight: string
            warning: string;
            warningLight: string;
            customLight: string;
        };

        neutral: {
            main: string;
            light: string;
            dark: string;
            custom: string;
            customLight: string;
            customDark: string;
        };

        warning: {
            main: string;
            light: string;
            dark: string;
            custom: string;
        }

        customWarning: {
            light: string;
            dark: string;
        }
    }

    interface PaletteOptions {
        base?: PaletteOptions['primary'];

        default?: {
            light: string;
            dark: string;
            grey: string;
        };

        customBackground?: {
            main: string
        };

        customSuccess?: {
            main: string;
            light: string;
            lighter: string;
            dark: string;
        };

        customError?: {
            main: string;
            dark: string;
        };

        chip?: {
            primaryLight: string;
            primaryDark: string;
            successDark: string;
            chipSuccessLight: string
            warning: string;
            warningLight: string;
            customLight: string;
        };

        neutral?: {
            main: string;
            light: string;
            dark: string;
            custom: string;
            customLight: string;
            customDark: string;
        };

        customWarning: {
            light: string;
            dark: string;
        }
    }

    interface TypographyVariants {
        hero1: React.CSSProperties;
        hero2: React.CSSProperties;
        hero3: React.CSSProperties;
        chip: React.CSSProperties;
        caption1: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        hero1?: React.CSSProperties;
        hero2?: React.CSSProperties;
        hero3?: React.CSSProperties;
        chip?: React.CSSProperties;
        caption1?: React.CSSProperties;
    }
};

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        hero1: true;
        hero2: true;
        hero3: true;
        chip: true;
        caption1: true;
    }
}
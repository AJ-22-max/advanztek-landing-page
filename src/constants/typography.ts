interface ResponsiveTypographyValue {
    xs: string;
    md?: string;
}

interface TypographyScale {
    hero1: ResponsiveTypographyValue;
    hero2: ResponsiveTypographyValue;
    hero3: ResponsiveTypographyValue;
    h1: ResponsiveTypographyValue;
    h2: ResponsiveTypographyValue;
    h3: ResponsiveTypographyValue;
    h4: ResponsiveTypographyValue;
    h5: ResponsiveTypographyValue;
    h6: ResponsiveTypographyValue;
    subtitle1: ResponsiveTypographyValue;
    subtitle2: ResponsiveTypographyValue;
    body1: ResponsiveTypographyValue;
    body2: ResponsiveTypographyValue;
    button: ResponsiveTypographyValue;
    caption: ResponsiveTypographyValue;
    caption1: ResponsiveTypographyValue;
    chip: ResponsiveTypographyValue;
}

export const fontSize: TypographyScale = {
    hero1: {
        xs: '35px',
        md: '70px',
    },
    hero2: {
        xs: '37.77px',
        md: '55.52px'
    },
    hero3: {
        xs: '13.27px',
        md: '24px'
    },
    h1: {
        xs: '32px',
        md: '80px',
    },
    h2: {
        xs: '40px',
        md: '60px',
    },
    h3: {
        xs: '33px',
        md: '50px'
    },
    h4: {
        xs: '25px',
        md: '36.67px'
    },
    h5: {
        xs: '26px',
        md: '30px',
    },
    h6: {
        xs: '16.31px',
        md: '22px'
    },
    subtitle1: {
        xs: '14px',
        md: '18px'
    },
    subtitle2: {
        xs: '13px',
        md: '15.5px'
    },
    body1: {
        xs: '13px',
        md: '16px'
    },
    body2: {
        xs: '12px',
        md: '15px'
    },
    button: {
        xs: '13px',
        md: '17px'
    },
    caption: {
        xs: '10.88px',
        md: '13.88px'
    },
    chip: {
        xs: '11px',
        md: '12px'
    },
    caption1: {
        xs: '9px',
        md: '10px'
    }
};

export const lineHeight: TypographyScale = {
    hero1: {
        xs: '38.73px',
        md: '67px',
    },
    hero2: {
        xs: '100%',
    },
    hero3: {
        xs: '100%',
    },
    h1: {
        xs: '108%',
    },
    h2: {
        xs: '100%',
    },
    h3: {
        xs: '100%',
    },
    h4: {
        xs: '100%',
    },
    h5: {
        xs: '100%',
    },
    h6: {
        xs: '100%',
    },
    subtitle1: {
        xs: '100%',
    },
    subtitle2: {
        xs: '6.71px',
        md: '10.29px'
    },
    body1: {
        xs: '152%'
    },
    body2: {
        xs: '19px',
        md: '20.03px'
    },
    button: {
        xs: '13.2px',
        md: '20.03px'
    },
    caption: {
        xs: '100%'
    },
    chip: {
        xs: '100%'
    },
    caption1: {
        xs: '100%'
    },
};

export const letterSpacing: TypographyScale = {
    hero1: {
        xs: '-2%'
    },
    hero2: {
        xs: '0%'
    },
    hero3: {
        xs: '0%'
    },
    h1: {
        xs: '0%'
    },
    h2: {
        xs: '0%'
    },
    h3: {
        xs: '0%'
    },
    h4: {
        xs: '0%'
    },
    h5: {
        xs: '0%'
    },
    h6: {
        xs: '-2%'
    },
    subtitle1: {
        xs: '-2%'
    },
    subtitle2: {
        xs: '0%'
    },
    body1: {
        xs: '0%',
    },
    body2: {
        xs: '0%',
    },
    button: {
        xs: '0%'
    },
    caption: {
        xs: '0%',
    },
    chip: {
        xs: '0%',
    },
    caption1: {
        xs: '0%',
    },
}



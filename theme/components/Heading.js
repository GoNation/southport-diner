export const Heading = {
  baseStyle: {},
  variants: {
    smallTitle: {
      fontSize: ['lg', 'xl', '', '2xl'],
      fontWeight: '400',
      fontFamily: 'heading',
      color: 'gray.800',
      letterSpacing: 2,
    },
    mediumTitle: {
      fontSize: ['lg'],
      fontWeight: '400',
      fontFamily: 'body',
      color: 'primary',
      letterSpacing: 2,
    },
    sideBySideLarge: {
      color: 'gray.800',
      fontFamily: 'body',
      fontWeight: 800,
      mt: 3,
      textTransform: 'none',
      letterSpacing: 2,
      textTransform: 'uppercase',
      fontSize: '2xl',
    },
    bannerLarge: {
      color: 'dark',
      fontFamily: 'accent',
      fontWeight: 600,
      mt: 3,
      fontSize: '2xl',
      textAlign: 'center',
    },
  },
};

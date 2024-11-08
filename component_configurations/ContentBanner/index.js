export const bannerStyles = {
  bannerBox: {
    py: [8, 32],
    px: [4, 4, 12],
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: ['none', 'none', 'fixed'],
  },
  heading: {
    fontSize: ['2xl', '2xl', '5xl'],
    fontWeight: '100',
    fontFamily: 'heading',
    color: 'light',
    textAlign: 'center',
    letterSpacing: 2,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontFamily: 'body',
    fontFamily: 'heading',
    color: 'primary',
    fontSize: 'sm',
  },
  contentBox: {
    textAlign: 'left',
    color: 'gray.800',
    my: 4,
    // maxW: 'lg',
    lineHeight: 2,
  },
  buttonVariant: {
    variant: 'primary',
  },
};
export const bannerStylesWhite = {
  bannerBox: {
    py: [8, 32, 40, 64],
    px: [4, 4, 12],
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundAttachment: ['none', 'none', 'fixed'],
  },
  heading: {
    fontSize: ['2xl', '2xl', '5xl'],
    fontWeight: '100',
    fontFamily: 'heading',
    color: 'light',
    textAlign: 'center',
    letterSpacing: 2,
  },
  subtitle: {
    fontFamily: 'body',
    fontFamily: 'heading',
    color: 'primary',
    fontSize: 'sm',
  },
  contentBox: {
    textAlign: 'left',
    color: 'white',
    my: 4,
    maxW: 'lg',
    lineHeight: 2,
  },
  buttonVariant: {
    variant: 'outline',
    color: 'white',
    borderColor: 'white',
  },
};

export const bannerStylesSmall = {
  bannerBox: {
    py: [16, 20, 24],
    px: [4, 4, 12],
    borderTop: '3px solid',
    borderBottom: '3px solid',
    borderColor: 'primary',
    backgroundColor: 'primary',
  },
  heading: {
    fontSize: ['2xl', '2xl', '7xl'],
    fontWeight: 'black',
    fontFamily: 'heading',
    color: 'light',
    textAlign: 'center',
    letterSpacing: 2,
  },
  subtitle: {
    fontFamily: 'body',
    fontFamily: 'heading',
    color: 'primary',
    fontSize: 'sm',
  },
  contentBox: {
    textAlign: 'center',
    color: 'light',
    my: 4,
    maxW: '4xl',
    fontSize: ['lg', 'xl', '2xl'],
  },
  buttonVariant: {
    variant: 'primary',
  },
};

export const whiteBannerSmall = {
  bannerBox: {
    // backgroundColor: 'light',
    py: [8, 8, 24],
    px: 4,
  },
  heading: {
    variant: 'smallTitle',
  },
  subtitle: {
    fontFamily: 'heading',
    color: 'dark',
    fontSize: '3xl',
    letterSpacing: 2,
    fontWeight: 700,
  },
  contentBox: {
    textAlign: 'center',
    color: 'secondary',
    fontSize: ['base'],
    textTransform: 'uppercase',
    letterSpacing: 1,
    mb: [4, 4],
  },
  buttonVariant: {
    variant: 'outline',
    textTransform: 'uppercase',
  },
};

export const whiteBanner = {
  bannerBox: {
    // backgroundColor: 'light',
    py: [8, 8, 24],
    px: 4,
  },
  heading: {
    variant: 'mediumTitle',
  },
  subtitle: {
    variant: 'bannerLarge',
  },
  contentBox: {
    color: 'dark',
    //   fontSize: 'md',
    //   my: 2,
    //   mb: 8,
    //   fontFamily: 'body',
    //   lineHeight: 1.75,
    fontSize: 'md',
    fontWeight: 300,
    my: 4,
    variant: 'sideBySide',
    textAlign: 'center',
  },
  buttonVariant: {
    variant: 'outline',
    textTransform: 'uppercase',
  },
};

export const blackBanner = {
  bannerBox: {
    backgroundColor: 'black',
    py: [8, 8, 24],
    px: 4,
    backgroundImage:
      'url(https://www.transparenttextures.com/patterns/brushed-alum.png)',
  },
  heading: {
    fontSize: ['4xl', '5xl'],
    fontWeight: 'black',
    fontFamily: 'heading',
    color: 'white',
    textAlign: 'center',
    mb: 4,
    textTransform: 'none',
  },
  subtitle: {
    fontFamily: 'body',
    color: 'white',
    fontSize: 'sm',
  },
  contentBox: {
    textAlign: 'center',
    color: 'white',
    fontSize: ['xl', '', '', '2xl'],
  },
  buttonVariant: {
    variant: 'primary',
  },
};

export const whiteBannerWithMargin = {
  bannerBox: {
    bg: 'light',
    py: [8, 8, 24, 32],
    my: [4, 8, 12, 12],
  },
  boxInner: {
    bg: 'white',
    p: [4, 4, 12],
    boxShadow: 'md',
  },
  stack: {
    alignItems: 'flex-start',
  },
  heading: {
    fontSize: ['2xl', '2xl', '3xl'],
    fontWeight: 'black',
    fontFamily: 'heading',
    color: 'primary',
    letterSpacing: 3,
    mb: 4,
  },
  subtitle: {
    fontFamily: 'body',
    color: 'primary',
    fontSize: 'sm',
  },
  contentBox: {
    textAlign: 'left',
    lineHeight: 2,
    ml: 4,
  },
  buttonVariant: {
    variant: 'primary',
  },
};

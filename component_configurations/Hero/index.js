export const heroConfig = {
  showLogo: false,
  shouldShowPhoneAndDirections: false,
  shouldShowArrow: false,
  //   videoId: 'sBg2UAHPhVc',

  businessLogoWidth: [500, 500, 500, 700],
  businessLogoHeight: [500, 500, 500, 700],

  arrowConfig: {
    wrapper: {
      position: 'absolute',
      zIndex: 10,
      bottom: 0,
      width: 'full',
      display: 'flex',
      justifyContent: 'center',
    },
    container: {
      background: 'white',

      p: 3,
      px: [12],
      borderTopLeftRadius: '2xl',
      borderTopRightRadius: '3xl',
    },
    iconStyle: {
      fill: 'dark',
      size: 32,
      backgroundColor: 'white',
      cursor: 'pointer',
    },
  },

  // Hero container styles
  heroContainerStyle: {
    position: 'relative',
    zIndex: 99,
    p: [4],
    px: [0],
    pb: [0],
    pt: [0],
  },

  // Shout container styles
  shoutContainer: {
    marginTop: 8,
  },

  // Shout box styles
  shoutBoxStyle: {
    position: 'absolute',
    zIndex: 10,
    bottom: 48,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },

  // Phone and directions gradient styles
  phoneDirectionsGradientStyle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 'full',
    bgGradient: 'linear(to-t, black, transparent)',
    zIndex: 0,
  },

  // Title styles
  titleStyle: {
    fontSize: ['lg', '', '4xl', '5xl'],
    color: 'white',
    fontFamily: 'body',
    textTransform: 'none',
    textAlign: 'center',
    zIndex: 999,
    position: 'relative',
    maxWidth: '3xl',
    // textShadow: '2px 2px 4px rgba(0,0,0,.2)',
    mt: [2, 2, 8],
    letterSpacing: 'wide',
  },
  subtitleStyle: {
    color: 'white',
    mt: 4,
    fontSize: ['md', '', 'xl', '4xl'],
    py: 2,
    cursor: 'pointer',
    fontFamily: 'accent',
    textTransform: 'none',
    textAlign: 'center',
    fontWeight: 100,
    textShadow: '2px 2px 4px rgba(0,0,0,.3)',
  },

  // Hero image styles
  heroImageStyle: {
    width: '100%', // Full width
    // minHeight: ['', '', '', 650],
    height: ['50vh', '', '', '90vh'], // Full height
    objectFit: 'cover',
    objectPosition: 'center',
  },

  // Carousel styles (if needed in the future)
  carouselConfig: {
    animationHandler: 'fade',
    autoPlay: true,
    infiniteLoop: true,
    interval: 5000,
    transitionTime: 500,
    showThumbs: false,
    showStatus: false,
    showArrows: true,
    swipeable: false,
    showIndicators: false,
    loop: true,
    autoplay: true,
  },

  heroImageContainer: {
    position: 'relative',
    height: '100%',
    // zIndex: 99999,
  },
  heroImageContentContainer: {
    position: 'absolute',

    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    color: 'white',
    p: [2, 4, 8, 12],
    textAlign: 'center',
    display: ['flex', 'flex'],
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%',
    zIndex: 99999999,
  },
  heroTitle: {
    fontSize: ['lg'],
    boxShadow: '1px 1px 11px 1px #00FFE4',
    py: 2,
    px: 4,
  },

  // Top gradient style
  topGradientStyle: {
    position: 'absolute',
    display: ['block'],
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%',
    bg: `rgba(0,0,0,0.175)`,
    // bgGradient: 'linear(to-b, black, transparent)',
    zIndex: 10,
  },

  // Logo container styles
  logoContainerStyle: {
    backgroundColor: 'white',
    paddingX: 4,
    paddingY: 2,
    borderRadius: 'md',
  },

  // Business info styles
  businessInfoStyle: {
    container: {
      position: 'absolute',
      bottom: 0,
      width: 'full',
      justifyContent: 'center',
      transform: 'translateX(-50%)',
      left: '50%',
      paddingBottom: 4,
      fontSize: ['sm', 'base'],
      zIndex: 10,
    },
    phoneStyle: {
      color: 'white',
      // ... any other styles for phone
    },
    separatorStyle: {
      color: 'white',
      // ... any other styles for separator
    },
    addressStyle: {
      color: 'white',
      // ... any other styles for address
    },
  },

  callToActionVariant: 'outline',
  callToActionConfig: {
    defaultVariant: 'outlined',
  },
  youtubeEmbedStyle: {
    container: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10,
      flexDirection: 'column',
      px: [8, 12],
    },
    headingTitle: {
      color: 'white',
      textTransform: 'uppercase',
      textAlign: 'center',
      fontSize: ['xl', 'lg', 'xl'],
    },
    headingSubtitle: {
      color: 'white',
      fontSize: 'base',
      fontFamily: 'body',
      textTransform: 'uppercase',
      letterSpacing: 1,
      fontWeight: 'light',

      fontSize: ['3xl', '4xl'],
      textAlign: 'center',
    },
    callToActionButton: {
      position: 'absolute',
      width: ['auto', 'auto', 'auto', '100%'],
      bottom: [6, '', 8, 8],
      display: 'flex',
      justifyContent: 'center',
      zIndex: 11,
    },
  },
};

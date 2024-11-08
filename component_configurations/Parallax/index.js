export const parallaxContentConfig = {
  container: {
    position: 'relative',
    w: 'full',
    h: ['50vh', '50vh', '75vh'],
    overflow: 'hidden',
  },
  contentBox: {
    position: 'absolute',
    top: 0,
    left: 0,
    w: '100%',
    h: ['50vh', '50vh', '75vh'],
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    color: 'white',
    textAlign: 'left',
    px: [4, 12, 24, 32],
    py: 8,
    bg: 'rgba(0,0,0,0)',
  },
  image: {
    w: '100%',
    h: ['50vh', '50vh', '75vh'],
    position: 'absolute',
    top: 0,
    left: 0,
  },
  title: {
    // title styles
    color: 'white',
    textAlign: 'left',
    fontFamily: 'accent',
    textTransform: 'none',
    fontWeight: 'light',
    fontSize: ['4xl', '', '7xl'],
    mb: 4,
    maxW: '4xl',
  },
  subtitle: {
    // subtitle styles
    color: 'white',
    fontSize: '3xl',
    mt: 4,
  },
  body: {
    // body styles
    my: 4,
    // mx: 'auto',
    textAlign: 'left',
    maxW: 'xl',
    fontSize: ['md', 'lg', 'xl'],
  },
  link: {
    // link styles
  },
  variant: 'primary',
};

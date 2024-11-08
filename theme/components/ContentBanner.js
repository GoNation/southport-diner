export const ContentBanner = {
  baseStyle: {
    bannerBox: {
      // bg: 'transparent',
      py: [12, 24, 32],
      my: [4, 8, 0, 0],
      pos: 'relative',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: ['none', 'none', 'fixed'],
    },
    imageOverlay: {
      pos: 'absolute',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      bg: 'rgba(0,0,0,.2)',
    },
  },
  variants: {
    default: {},
    // Add more variants as needed
  },
};

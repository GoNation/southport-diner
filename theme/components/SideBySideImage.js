export const SideBySideImage = {
  baseStyle: {
    sideBySideImageContainerStyle: {
      py: [3, 3, 3, 8, 24],
    },
    outerContainer: {
      position: 'relative',
    },
    contentWrapper: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      position: 'relative',
      zIndex: 99,
      my: [4, 0],
    },
    innerContainer: {
      zIndex: 2,
      display: { base: 'block', lg: 'grid' },
      gridTemplateColumns: '1fr 1fr',
      height: '100%',
      alignItems: 'center',
      mx: 'auto',
      maxWidth: '7xl',
      p: 4,
    },
  },
  variants: {
    default: {},
    // Add more variants as needed
  },
};

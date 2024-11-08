export const Masonry = {
  baseStyle: {
    container: {
      p: 4,
    },
    flexOuter: {},
    flexInner: {
      direction: 'column',
      flex: 1,
      m: 2,
    },
    imageContainer: {
      mb: 4,
      cursor: 'pointer',
      overflow: 'hidden',
      position: 'relative',
    },
    image: {
      objectFit: 'contain',
      w: '100%',
      h: 'auto',
      transition: 'transform 2.3s ease',
      _hover: {
        transform: 'scale(1.1)',
      },
    },
  },
  variants: {},
};

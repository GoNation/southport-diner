export const ImageBoxes = {
  baseStyle: {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      //   gap: 4,
    },
    box: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      overflow: 'hidden',
      cursor: 'pointer',
    },
    boxHover: {
      '& img': {
        transform: 'scale(1.1)', // Apply zoom effect to the image when the box is hovered
      },
    },
    image: {
      transition: 'transform 0.5s ease-in-out', // Smooth transition for the zoom effect
      width: 800,
      height: 600,
      objectFit: 'cover',
      minHeight: 600,
      maxHeight: 600,
    },
    title: {
      position: 'absolute',
      color: 'white',
      bg: 'rgba(0,0,0,0.5)',
      px: 24,
      py: 2,
      border: '2px solid black',
      fontSize: 'lg',
      fontWeight: 'bold',
    },
  },
  variants: {},
};

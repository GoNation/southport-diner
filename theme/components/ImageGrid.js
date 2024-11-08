export const ImageGrid = {
  baseStyle: {
    gridContainer: {
      gap: 0,
      border: '1px solid orange',
      templateColumns: 'repeat(3, 1fr)',
      templateRows: 'repeat(1, 1fr)', // 2 rows with equal heights
    },
    imageWrapper: {
      height: '100%',
      overflow: 'hidden', // Prevent image from overflowing its container
      position: 'relative', // Make sure the image stays contained
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      border: '1px solid',
      borderColor: 'yellow.500',
      transition: 'transform 0.5s ease-in-out', // Smooth transition for the zoom effect
      _hover: {
        transform: 'scale(1.1)', // Zoom in on hover
      },
    },
  },
};

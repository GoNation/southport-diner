export const MasonryBoxes = {
  baseStyle: {
    container: {
      display: ['block', '', 'grid'],
      gridTemplateAreas: [
        `"image 1"
		"image 2"
		"image 3"
		"image 4"`,
        `"image 1"
		"image 2"
		"image 3"
		"image 4"`,
        `"image1 image1 image1 image2 image2 image2 image2 image2 image2 image2"
		 "image3 image3 image3 image3 image3 image3 image3 image4 image4 image4"`,
      ],
      gridTemplateRows: ['repeat(4, 400px)', '', 'repeat(2, 400px)'],
      gridTemplateColumns: ['repeat(4, 1fr)', '', 'repeat(10, 1fr)'],
      gap: [4, 4, 6],
      p: [4, 4, 6],
    },
    gridItem: {
      //   position: 'relative',
    },
    box: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      overflow: 'hidden',
      cursor: 'pointer',
      my: [4, 4, 0],
    },
    boxHover: {
      '& img': {
        transform: 'scale(1.1)', // Apply zoom effect to the image when the box is hovered
      },
    },
    image: {
      transition: 'transform 0.5s ease-in-out', // Smooth transition for the zoom effect
      width: 1200,
      height: 990,
      minHeight: 400,
      maxHeight: 400,
      objectFit: 'cover',
      borderRadius: 'md',
    },
    title: {
      position: 'absolute',
      color: 'white',
      py: 2,
      fontSize: ['lg', 'xl', '2xl', '4xl'],
      fontWeight: 'bold',
      ml: 8,
      mb: 4,
      textTransform: 'uppercase',
      textShadow: '2px 2px 2px rgba(0,0,0,0.5)',
    },
  },
  variants: {},
};

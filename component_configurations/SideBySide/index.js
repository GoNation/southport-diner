// ChakraStylingConfig.js
export const hpSideBySideImageConfig = {
  reversed: true,
  ignoreQuery: true,
  outerContainer: {
    position: 'relative',
  },
  sideBySideImageContainerStyle: {
    py: [3, 3],
    backgroundImage: `url("https://www.transparenttextures.com/patterns/light-gray.png")`,
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
  contentConfig: {
    position: 'relative',
    zIndex: 99,
    containerStyle: {
      // Layout properties
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',

      // Spacing properties
      py: [4, '', '', 12],
      pb: 8,
      mb: [0, 0, 0],
      px: [3, 4, 4, 8, 16],
      mr: ['', '', '', -24],

      // Styling properties
      bg: 'light',
      border: '1px solid',
      borderColor: 'gray.200',
      borderRadius: 'md',
      boxShadow: '0px 0px 30px rgba(0,0,0,0.25)',

      // Positioning properties
      position: 'relative',
      zIndex: 99,
    },
    titleStyle: {
      variant: 'smallTitle',
      textTransform: 'none',
    },
    subtitleStyle: {
      variant: 'sideBySideLarge',
      fontSize: '2xl',
    },
    bodyContainerStyle: {
      color: 'gray.800',
      lineHeight: 2,
      fontSize: 'md',
      fontWeight: 300,
      my: 4,
      variant: 'sideBySide',
    },
    button: {
      variant: 'outline',
    },
    assetAStyle: {
      container: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        opacity: 0.8,
        zIndex: -1,
      },
      img: {
        transform: 'rotate(-23deg)',
        opacity: 0.8,
      },
    },
    assetBStyle: {
      container: {
        position: 'absolute',
        right: 0,
        top: 0,
        height: '100%',
        zIndex: -1,
      },
      img: {
        transform: 'rotate(-23deg)',
        opacity: 0.15,
      },
    },
  },
  imageConfig: {
    containerStyle: {
      width: '100%',
      height: ['auto', 'auto', 'auto', 'auto'],

      //   mb: [8, 8, 0],
    },
    relativeContainerStyle: {
      position: 'relative',
      zIndex: 0,
      //   p: [3, 3, 8],
      //   clipPath: ['', '', 'polygon(0px 0px, 79% 0px, 100% 100%, 0% 100%)'],

      height: ['100%', '', ''],
      width: '100%',
    },
    imageStyle: {
      width: '100%',
      border: '1px solid',
      borderColor: '#7DAFD6',
    },
    collageStyle: {
      position: 'relative',

      imgWrapper: {
        position: ['relative', 'relative', 'relative', 'absolute'],
        border: '4px solid', // Adjust border color and size as needed
        borderColor: 'primary',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.5)', // Optional shadow for effect
      },

      img1: {
        position: ['relative', 'relative', 'relative', 'absolute'],
        top: [0, 0, 0, 266],
        left: [0, 0, 0, 24],
        zIndex: '1', // Make sure this image is above the second
        transform: ['', '', '', 'rotate(-10deg)'], // Slight rotation for overlap effect
        mb: [4, 4, 4, 0],
      },
      img2: {
        position: ['relative', 'relative', 'relative', 'absolute'],
        top: [0, 0],
        right: '0',
        transform: ['', '', '', 'rotate(10deg)'], // Opposite rotation for overlap effect
      },
    },
  },
};

export const reversedHpSideBySideImageConfig = {
  reversed: false,
  ignoreQuery: true,
  outerContainer: {
    position: 'relative',
  },
  sideBySideImageContainerStyle: {
    backgroundImage: `url("https://www.transparenttextures.com/patterns/light-gray.png")`,
    py: [3, 3],
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
  contentWrapper: {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    my: [4, 0],
    position: 'relative',
    zIndex: 99,
  },
  imageConfig: {
    containerStyle: {
      width: '100%',
      height: ['auto', 'auto', 'auto', 'auto'],
    },
    relativeContainerStyle: {
      position: 'relative',
      zIndex: 0,
      height: ['100%', '', ''],
      width: '100%',
    },
    imageStyle: {
      width: '100%',
      border: '1px solid',
      borderColor: '#7DAFD6',
    },
    collageStyle: {
      position: 'relative',
      imgWrapper: {
        position: ['relative', 'relative', 'relative', 'absolute'],
        border: '4px solid',
        borderColor: 'primary',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
      },
      img1: {
        position: ['relative', 'relative', 'relative', 'absolute'],
        top: [0, 0, 0, 266],
        left: [0, 0, 0, 24],
        zIndex: '1',
        transform: ['', '', '', 'rotate(-10deg)'],
        mb: [4, 4, 4, 0],
      },
      img2: {
        position: ['relative', 'relative', 'relative', 'absolute'],
        top: [0, 0],
        right: '0',
        transform: ['', '', '', 'rotate(10deg)'],
      },
    },
  },
};

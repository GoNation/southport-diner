const PopUp = {
  baseStyle: {
    wrapper: {
      position: 'fixed',
      height: '100vh',
      width: '100vw',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      bg: 'rgba(0, 0, 0, 0.5)',
      zIndex: 999,
      p: [4, 4, 4, 4, 0],
    },
    closeContainer: {
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 1,
    },
    container: {
      bg: 'white',
      p: 4,
      borderRadius: 'md',
      boxShadow: 'base',
      width: '80%',
      maxHeight: '90vh',
      maxWidth: '500px',
      position: 'relative',
      overflowY: 'auto',
    },
    contentStack: {
      flexDirection: 'column', // Default is column
    },
    textContainer: {
      py: 2,
    },
    closeButton: {
      bg: 'gray.100',
      p: 0,
    },
    closeButtonFill: 'black',
    buttonContainer: {
      mt: 4,
      alignItems: 'center',
    },
    title: {
      fontSize: '2xl',
      fontWeight: 'bold',
      mb: 2,
    },
    subtitle: {
      fontSize: 'lg',
      fontWeight: 'bold',
      mb: 2,
    },
    button: {
      bg: 'gray.800',
      color: 'white',
    },
  },
  variants: {
    default: {},
    horizontal: {
      container: {
        maxWidth: [600, 600, 600, 600, 800],
      },
      contentStack: {
        flexDirection: ['column', 'column', 'row'], // Overrides the flexDirection in baseStyle
      },
      textContainer: {
        px: 4,
        flex: 1,
      },
      imageContainer: {
        flex: 1,
      },
    },
  },
};

export default PopUp;

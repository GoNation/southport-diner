export const Lightbox = {
  baseStyle: {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      position: 'relative',
      width: '80vw',
      height: '80vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain',
    },
    closeButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      _hover: { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
    },
    leftButton: {
      position: 'absolute',
      top: '50%',
      left: '20px',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      _hover: { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
    },
    rightButton: {
      position: 'absolute',
      top: '50%',
      right: '20px',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      _hover: { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
    },
  },
};

export const Navigation = {
  baseStyle: {
    navigation: {
      gridTemplateColumns: 'repeat(12, 1fr)',
      alignItems: 'center',
      bg: 'dark',
      px: 4,
      py: 2,
    },
    // Grid Item containers
    logoGridItem: {
      colSpan: [10, 10, 3], // Logo takes up more space on mobile
      display: 'flex',
      alignItems: 'center',
    },
    navItemsGridItem: {
      colSpan: [0, 0, 9], // Hide nav items on mobile, show on larger screens
      display: ['none', 'none', 'flex'],
      justifyContent: 'end',
    },
    hamburgerGridItem: {
      colSpan: [2, 2, 2], // Show the hamburger menu on mobile
      display: ['flex', 'flex', 'none'],
      justifyContent: 'flex-end',
    },
    alternateGridItem: {
      colSpan: [0, 0, 0], // Only show this on larger screens
      display: ['none', 'none', 'flex'],
      justifyContent: 'flex-end',
    },
    // Logo styles
    logoContainer: {
      align: 'center',
      maxWidth: [125, 125, 175],
    },
    logo: {
      width: 300,
      height: 300,
    },
    // Full-screen mobile menu styles
    mobileMenu: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      bg: 'primary',
      zIndex: 99999, // Menu is underneath the hamburger icon
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'center',
      bg: 'dark',
    },
    hamburgerIconOpen: {
      position: 'fixed', // Fix the position of the hamburger icon
      top: '16px',
      right: '16px',
      zIndex: 999999999, // Higher than the mobile menu to ensure visibility
    },
    hamburger: {
      size: 24,
      color: 'white',
    },
    mobileMenuContent: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 4,
      color: 'white',
      fontSize: '2xl',
    },
  },
  variants: {},
};

export const Dropdown = {
  baseStyle: {
    listStyleType: 'none',
    position: 'relative',
    container: {
      listStyleType: 'none',
      pl: 4,
      display: ['block', '', '', ''],
      position: ['static', null, null, 'absolute'],
      top: '100%',
      left: 0,
      zIndex: 9999,
      bg: ['transparent', null, null, 'white'], // Use a theme token instead of hardcoded color
      minWidth: ['auto', null, null, '400px'],
      borderRadius: 'md',
      boxShadow: 'md',
    },
    title: {
      color: 'dark',
      listStyle: 'none',
    },
    iconButton: {
      bg: 'transparent',
      _hover: {
        bg: 'transparent',
      },
    },
  },
  variants: {},
  defaultProps: {
    variant: 'default',
  },
};

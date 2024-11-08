export const NavItem = {
  baseStyle: {
    px: 4,
    fontSize: ['xs', 'sm', 'md'],
    color: 'dark',
  },
  variants: {
    navRight: {}, // variant for right side nav items
    primary: {
      display: ['inline-block', '', '', 'none'],
      ml: [4, 4, 4],
      bg: 'green.500',
      color: 'purple.500',
      border: '1px solid',
      borderColor: 'green.500',
      _hover: {
        bg: 'white',
      },
    },
    whiteText: {
      color: 'white',
      px: 4,
      fontWeight: '900',
      fontFamily: 'lato',
      textTransform: 'uppercase',
      letterSpacing: 'wide',

      transition: 'all 0.3s ease',
      _hover: {
        color: '#70BC23',
        transition: 'all 0.3s ease',
      },
      //   inherit from default
      //   variant: 'default',
    },
    dropdownParent: {
      color: 'white',
      px: 1,
      ml: 3,
      _hover: {
        color: 'green.500',
      },
    },
  },
};

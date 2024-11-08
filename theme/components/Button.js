export const Button = {
  baseStyle: {
    textTransform: 'uppercase',
  },
  variants: {
    default: {
      bg: 'transparent',
      borderRadius: 'none',
      borderColor: 'dark',
      _hover: {
        bg: 'light',
        color: 'primary',
      },
    },
    primary: {
      bg: 'primary',
      color: 'white',
      _hover: {
        bg: 'dark',
        color: 'white',
      },
      _active: {
        bg: 'dark',
        color: 'white',
      },
    },
    secondary: {
      bg: 'secondary',
      color: 'white',
      _hover: {
        bg: 'light',
        color: 'dark',
      },
      _active: {
        bg: 'light',
        color: 'dark',
      },
    },
    outline: {
      bg: 'transparent',
      border: '2px solid',
      borderColor: 'white',
      color: 'white',
      fontSize: ['sm', 'md', 'lg', 'xl'],
      py: 6,
      px: 12,

      _hover: {
        bg: 'gray.900',
        borderColor: 'gray.900',
        color: 'primary',
      },
      _active: {
        bg: 'dark',
        color: 'white',
      },
    },
  },
};

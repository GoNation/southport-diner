export const CustomForm = {
  baseStyle: {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      p: [4, 4, 12],
      maxW: ['2xl'],
      mx: 'auto',
      bg: 'dark',
      border: '1px solid',
      borderColor: 'accent',
      my: 8,
      height: '100%',
    },
    address: {
      color: 'white',
    },
    phone: {
      color: 'white',
    },
    heading: {
      as: 'h2',
      textAlign: 'center',
      fontSize: { base: '4xl', lg: 'xl', xl: '4xl' },
      mb: 1,
      fontWeight: 800,
      textTransform: 'uppercase',
      color: 'white',
    },
    infoSection: {
      my: 4,
      px: [8, 0],
      spacing: 2,
    },
    desc: {
      mb: 4,
      color: 'white',
    },
    grid: {
      gap: 4,
      templateColumns: { base: 'repeat(2, 1fr)' },
    },
    textarea: {
      gridColumn: 'span 2',
      bg: 'light',
      color: 'dark',
      border: '1px solid',
      borderColor: 'primary',
      borderRadius: 'md',
      _focus: { outline: 'none' },
      _placeholder: { color: 'dark' },
    },
    select: {
      bg: 'light',
      color: 'dark',
      border: '1px solid',
      borderColor: 'primary',
      borderRadius: 'md',
      _focus: { outline: 'none' },
    },
    input: {
      bg: 'light',
      color: 'dark',
      border: '1px solid',
      borderColor: 'primary',
      borderRadius: 'md',
      gridColumn: 'span 1',
      _focus: { outline: 'none' },
      _placeholder: { color: 'dark' },
    },
    submitButton: {
      variant: 'primary',
      bg: 'primary',
      border: '3px solid',
      borderColor: 'primary',
      width: '100%',
      color: 'white',
      textTransform: 'uppercase',
      mt: 4,
      _hover: {
        color: 'primary',
        bg: 'transparent',
        transition: 'all .3s ease-in-out',
      },
    },
  },
  variants: {},
};

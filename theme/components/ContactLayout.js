// theme.ts (or theme.js if you're using JavaScript)
export const ContactLayout = {
  baseStyle: {
    container: {
      display: 'grid',
      gridTemplateColumns: ['1fr', '1fr', '1fr 1fr'],
      gap: 4,
      p: 4,
      border: '1px solid',
      borderColor: 'gray.200',
    },
    image: {
      width: '100%',
      objectFit: 'cover',
    },
    title: {
      fontSize: ['xl', '2xl', '6xl'],
      color: 'secondary',
      fontWeight: 'bold',
      mb: 2,
    },
    subtitle: {
      fontSize: 'md',
      color: 'gray.600',
      mb: 4,
    },
    form: {
      mt: 4,
      width: '100%',
    },
    contactInfo: {
      spacing: 4,
      py: 8,
      alignItems: 'flex-start',
      border: '1px solid',
      borderColor: 'primary',
      p: [1, 2, 4],
    },
  },
  variants: {
    default: {
      container: {
        borderColor: 'gray.300',
      },
      title: {
        color: 'black',
      },
    },
    dark: {
      container: {
        borderColor: 'gray.700',
        bg: 'gray.800',
      },
      title: {
        color: 'white',
      },
    },
  },
};

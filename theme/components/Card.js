import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

// Define the parts of your Card component
const parts = ['container', 'cardBody', 'contentStack', 'title', 'footer'];

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts);

const baseStyle = definePartsStyle({
  container: {
    background: 'white',
    // minHeight: [570, 570, 500],
  },
  cardBody: {
    p: 4,
  },
  contentStack: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    spacing: 4,
  },
  title: {
    fontSize: '2xl',
    fontWeight: 'bold',
    color: 'black',
  },
  footer: {
    justifyContent: 'center',
    display: 'flex',
  },
});

const branded = definePartsStyle({
  container: {
    bg: 'green.500',
  },
  title: {
    color: 'white',
  },
  contentStack: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    spacing: 4,
  },
});

const variants = {
  branded,
  rounded: definePartsStyle({
    container: {
      borderRadius: 'xl',
    },
    cardBody: {
      p: 4,
    },
    cardImageContainer: {
      borderRadius: 'md',
    },
    cardImage: {
      borderTopRightRadius: '6px',
      borderTopLeftRadius: '6px',
      maxHeight: 200,
      objectFit: 'cover',
    },
    contentStack: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      spacing: 0,
      p: 4,
    },
    title: {
      fontSize: '2xl',
      fontWeight: '900',
      color: 'primary',
      textAlign: 'center',
      mt: 0,
      mb: 4,
    },
    subtitle: {},
    body: {},
    divider: {
      display: 'none',
    },
    icon: {
      maxWidth: '80px',
    },
    footer: {
      justifyContent: 'center',
      display: 'flex',
    },
    button: {
      variant: 'primary',
      color: 'white',
    },
  }),
};

export const Card = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'branded',
  },
});

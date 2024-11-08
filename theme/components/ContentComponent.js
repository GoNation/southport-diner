const baseStyle = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    p: 4,
    position: 'relative',
    zIndex: 99,
  },
  titleStyle: {
    fontSize: ['2xl', '3xl', '4xl'],
    fontWeight: 'bold',
    textTransform: 'uppercase',
    mb: 4,
    color: 'white',
  },
  subtitleStyle: {
    fontSize: 'xl',
    mb: 2,
    color: 'white',
  },
  bodyContainerStyle: {
    mt: 2,
    lineHeight: 1.75,
    fontSize: 'md',
    fontWeight: 500,
    color: 'white',
  },
  button: {
    mt: 4,
    mx: 2,
    variant: 'outline',
  },
};

export const ContentComponent = {
  baseStyle,
  variants: {
    darkText: {
      containerStyle: {
        color: 'dark',
        maxWidth: '4xl',
        mx: 'auto',
      },
      titleStyle: {
        color: 'primary',
        // bg: 'dark',
        // p: 4,
      },
      subtitleStyle: {
        color: 'dark',
      },
      bodyContainerStyle: {
        color: 'dark',
        fontSize: 'lg',
        lineHeight: 2,
      },
      button: {
        colorScheme: 'teal',
      },
    },
    whiteText: {
      containerStyle: {
        color: 'white',
        maxWidth: '4xl',
        mx: 'auto',
      },
      titleStyle: {
        color: 'white',
      },
      subtitleStyle: {
        color: 'white',
      },
      bodyContainerStyle: {
        color: 'white',
        fontSize: 'lg',
      },
      button: {
        variant: 'primary',
      },
    },
  },
};

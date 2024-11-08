const baseStyle = {
  containerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  },
  subtitleStyle: {
    fontSize: 'xl',
    mb: 2,
  },
  bodyContainerStyle: {
    mt: 2,
    lineHeight: 1.75,
    fontSize: 'md',
    fontWeight: 500,
  },
  button: {
    mt: 4,
    mx: 2,
    variant: 'solid',
  },
};

export const ContentComponent = {
  baseStyle,
  variants: {
    darkText: {
      containerStyle: {
        bg: 'gray.800',
        color: 'dark',
      },
      titleStyle: {
        color: 'dark',
      },
      subtitleStyle: {
        color: 'dark',
      },
      bodyContainerStyle: {
        color: 'dark',
      },
      button: {
        variant: 'outline',
      },
    },
    whiteText: {
      containerStyle: {
        color: 'white',
      },
      titleStyle: {
        color: 'white',
      },
      subtitleStyle: {
        color: 'white',
      },
      bodyContainerStyle: {
        color: 'white',
      },
      button: {},
    },
  },
};

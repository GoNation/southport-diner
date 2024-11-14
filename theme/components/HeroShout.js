const sharedBackgroundStyles = {
  //   minHeight: ['60vh', '', '100vh'],
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: ['', '', 'fixed'],
  backgroundRepeat: 'no-repeat',
};

export const HeroShout = {
  baseStyle: {
    backgroundStyle: {
      ...sharedBackgroundStyles,
      position: 'relative',
      _before: {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,.35)',
      },
    },
    contentWrapper: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      padding: 8,
      textAlign: 'center',
      minHeight: ['', '', '100vh'],
      height: 'auto',
      zIndex: 2,
      position: 'relative',
      backgroundImage: [
        'url("https://res.cloudinary.com/gonation/w_1800/q_auto/f_auto/gonation.data.prod/x3pag46oy6wfegqzeep0")',
        '',
        '',
        'none',
      ],
      backgroundSize: 'cover',
    },
    contentStack: {
      //   bg: 'rgba(0,0,0,.25)',
      p: [2, 2, 8],
      maxWidth: '4xl',
      //   bg: 'rgba(0,0,0,.75)',
      borderRadius: 'xl',
    },
    title: {
      as: 'h1',
      fontSize: ['lg', '', 'xl', '3xl'],
      color: 'white',
      fontWeight: 'bold',
    },
    subtitle: {
      display: 'none',
      as: 'h2',
      color: 'white',
      fontSize: ['md', '', '2xl'],
    },
    body: {
      as: 'p',
      fontSize: 'md',
    },
    button: {
      variant: 'outline',
    },
    shoutBackgroundStyle: {
      ...sharedBackgroundStyles,
      justifyContent: 'center',
      alignItems: 'center',
      p: 8,
    },
    shoutStack: {
      bg: 'rgba(0,0,0,.75)',
      p: 8,
      rounded: '3xl',
      maxWidth: 'xl',
      position: 'relative',
    },
    shoutTitle: {
      as: 'h3',
      fontSize: ['lg', '', 'xl', '4xl'],
      color: 'primary',
      //   bg: 'black',
      px: [8, 8, 8, 12],
      borderRadius: 'md',
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    shoutText: {
      as: 'p',
      fontSize: ['md', '', '', 'xl', '2xl'],
      maxWidth: '5xl',
      textAlign: 'center',
      color: 'white',
    },
    shoutDate: {
      fontSize: 'xl',
      display: 'none',
    },
    shoutButton: {
      variant: 'primary',
    },
    imageContainer: {
      maxWidth: 'sm',
      py: 4,
    },
    image: {
      width: 600,
      height: 600,
      borderRadius: 'md',
    },
  },
  variants: {},
};

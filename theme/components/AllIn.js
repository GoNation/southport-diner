export const AllIn = {
  baseStyle: {
    container: {
      bg: 'background',
      border: '1px solid',
      borderColor: 'primary',
      rounded: 'md',
      shadow: 'xs',
      maxW: '6xl',
      mx: 'auto',
      pos: 'relative',
      p: [2, 2, 3, 3, 8],
      py: [4, 4, 6, 12, 12],
      boxShadow: '0px 0px 30px rgba(0,0,0,0.25)',
    },
    imageBox: {
      pos: 'absolute',
    },
    backButton: {
      variant: 'link',
      fontSize: 'sm',
      bg: 'dark',
      px: 2,
      py: 1,
      mt: 6,
      ml: [0, 0, 8],
      my: [3, 3, 6],
      color: 'white',
    },
    itemBox: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    // Optional styling for flexAvatar and other styles you want to re-add later
    flexAvatar: {
      justifyContent: 'center',
      bg: 'primary',
      borderColor: 'primary',
      borderRadius: 'md',
    },
  },
  variants: {},
};

export const TitleWithBorder = {
  variants: {
    default: {
      container: {
        width: '100%',
        align: 'center',
        maxWidth: '8xl',
        mx: 'auto',
        mb: 4,
      },
      heading: {
        pr: 4,
        as: 'h4',
        textTransform: 'uppercase',
      },
      borderBox: {
        flex: 1,
        height: 1,
        bg: 'primary',
      },
    },
  },
};

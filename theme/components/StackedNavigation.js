export const StackedNavigation = {
  variants: {
    default: {
      outerContainer: {
        gridTemplateColumns: ['1fr 40px', null, null, '1fr 2fr 1fr'],
        justifyContent: 'center',
        alignItems: ['center'],
        bg: '#311C69',
        px: [1, 2, 4],
        py: [2],
        as: 'ul',
        listStyle: 'none',
      },
      logo: {
        display: 'flex',
        justifyContent: ['flex-start', null, null, 'center'],
        alignItems: 'center',
        maxWidth: ['200px', null, null, 'unset'],
        mx: ['', '', '', 'auto'],
      },
      text: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      innerBox: {
        colSpan: 1,
        display: ['none', null, null, 'block'],
      },
      innerBoxRight: {
        display: ['none', null, null, 'flex'],
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
};

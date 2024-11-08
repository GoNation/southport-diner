export const ListCards = {
  baseStyle: {
    wrapper: {
      bg: 'primary',
      py: [12, 12, 16, 24],
    },

    container: {
      maxWidth: '6xl',
      mx: 'auto',
      display: 'grid',
      gridTemplateColumns: [
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        // 'repeat(6, 1fr',
      ], // 1 column on small screens, 3 on medium+
      //   gridTemplateRows: 'auto auto', // 2 rows for 5 cards
      //   align stretch all items
      gap: 4,
      px: 4,
      pb: 0,
      justifyContent: 'center',
      alignItems: 'center',
      gridAutoFlow: 'row dense',
    },
  },
  variants: {
    triple: {
      wrapper: {
        bg: 'primary',
        p: [4, 4, 12, 16],
        py: [8, 8, 16, 24],
      },

      container: {
        maxWidth: '7xl',
        mx: 'auto',
        display: 'grid',
        gridTemplateColumns: [
          'repeat(1, 1fr)',
          'repeat(3, 1fr)',
          // 'repeat(6, 1fr',
        ], // 1 column on small screens, 3 on medium+
        gridTemplateRows: 'auto auto', // 2 rows for 5 cards
        gap: [4, 4, 4, 8],
        px: 4,
        pt: 0,
        // pb: 4,
        justifyContent: 'center',
        alignItems: 'start',
        gridAutoFlow: 'row dense',
      },
    },
  },
};

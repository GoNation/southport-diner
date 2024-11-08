export const galleryConfig = {
  filterOutAlbumIds: [],
  styles: {
    container: {
      py: 24,
      px: [4, 12],
    },
    grid: {
      gap: [2, 6],
      display: ['block', 'grid', 'grid', 'grid'],
      //   align the items center
      templateColumns: {
        sm: 'repeat(1, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
        '2xl': 'repeat(4, 1fr)',
      },
      //   autoRows: '200px',
      //   autoFlow: 'dense',
    },
    box: {
      //   boxShadow: 'lg',
      width: '100%',
      maxHeight: '325px',

      mb: [4, 4, 2],
      border: '1px solid',
      borderColor: 'gray.300',
      borderRadius: '4px',
    },
    image: {
      objectFit: 'cover',
      height: '100%',
      width: '100%',
      boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      borderRadius: '4px',
    },
  },
};

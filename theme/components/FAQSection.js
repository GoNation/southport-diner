export const FAQSection = {
  variants: {
    default: {
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        px: [4, 4, 24],
        py: [4, 8, 12],
      },
      title: {
        fontSize: ['3xl', '3xl', '4xl', '5xl'],
        fontWeight: 'bold',
        mb: 4,
        px: [0, 4, 32],
        width: ['100%', '', 'auto'],
      },
      accordion: {
        flex: 1,
      },
      accordionItem: {
        borderTop: '2px solid !important',
        borderBottom: '2px solid !important',
        borderColor: 'primary !important',
      },
      question: {
        fontSize: ['lg', 'xl', '2xl', '2xl'],
        fontWeight: '500',
        flex: 1,
        py: [2, 4, 4],
      },
    },
  },
};

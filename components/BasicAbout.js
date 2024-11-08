import React from 'react';
import { Box, Text } from '@chakra-ui/react';

// Define default styles
const defaultStyles = {
  container: {
    p: [4, 6, 12],
  },
  contentBox: {
    maxW: '3xl',
    mx: 'auto',
    py: 12,
    px: 4,
    bg: 'background',
    shadow: 'lg',
  },
  text: {
    variant: 'p',
    color: 'dark',
    fontSize: ['lg'],
    lineHeight: ['base', 'base', 'base', 'taller'],
  },
};

export default function BasicAbout({ business, styles = {} }) {
  const { desc } = business;

  // Merge custom styles with default styles
  const mergedStyles = {
    container: { ...defaultStyles.container, ...styles.container },
    contentBox: { ...defaultStyles.contentBox, ...styles.contentBox },
    text: { ...defaultStyles.text, ...styles.text },
  };

  return (
    <Box {...mergedStyles.container}>
      <Box {...mergedStyles.contentBox}>
        <Text {...mergedStyles.text}>{desc}</Text>
      </Box>
    </Box>
  );
}

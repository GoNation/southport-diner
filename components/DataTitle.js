import React from 'react';
import { Heading, Box } from '@chakra-ui/react';

export default function DataTitle({ story, config }) {
  const { outerStyles, headingVariant } = config;
  return (
    <Box {...config.box}>
      <Heading {...config.heading}>{story.title}</Heading>
    </Box>
  );
}

import React from 'react';
import { Heading, Grid, Box } from '@chakra-ui/react';
import extractStory from 'helpers/extractStory';

export default function TitleTextSideBySide({ story, config, data }) {
  if (!story) return null;
  const extractedStory = extractStory(story);
  const { title, subtitle, body } = extractedStory;
  return (
    <Grid templateColumns="repeat(6, 1fr)">
      <Box gridColumn="span 2">
        {title && <Heading>{title}</Heading>}
        {subtitle && <Heading>{subtitle}</Heading>}
      </Box>
      <Box gridColumn="span 4">
        <Box
          dangerouslySetInnerHTML={{
            __html: body,
          }}
        />
      </Box>
    </Grid>
  );
}

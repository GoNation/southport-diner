import React from 'react';
import { Box, Image, Grid } from '@chakra-ui/react';
import Fade from 'react-reveal/Fade';

export default function StoryImageRenderer({ story }) {
  const { images } = story;
  if (!images) return null;

  const spacing = [4];

  return (
    <Grid
      templateColumns={['repeat(auto-fit, minmax(250px, 1fr))']}
      gap={[spacing, spacing, 0]}
    >
      {images.map((image, index) => (
        <Box px={spacing} key={index}>
          <Fade bottom>
            <Image src={image} alt={story.title || story.name} />
          </Fade>
        </Box>
      ))}
    </Grid>
  );
}

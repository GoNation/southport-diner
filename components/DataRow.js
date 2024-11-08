import React from 'react';
import { Grid, Heading, Box } from '@chakra-ui/react';
import BackgroundImageBox from './BackgroundImageBox';
import Card from './Card';

export default function DataRow({ config, stories, titleStory, ...props }) {
  const columnCount = config?.columnCount || [1, 1, 2, 3];
  const gap = config?.gap || 8;
  const templateColumns = columnCount.map(
    count => `repeat(${count}, minmax(0, 1fr))`
  );
  return (
    <Box px={[0, 4, 6, 6, 12]} py={[0, 8, 6, 6, 12]} bg={'light'}>
      <Box textAlign={'center'}>
        {titleStory ? (
          <Heading
            color={'secondary'}
            fontSize={['2xl', '3xl', '5xl']}
            py={[4, 4, 8]}
            variant={'mediumTitle'}
          >
            {titleStory.title}
          </Heading>
        ) : null}
      </Box>

      <Grid templateColumns={templateColumns} {...props} gap={gap} mx={'auto'}>
        {stories.map((story, index) => (
          <Card story={story} index={index} />
        ))}
      </Grid>
    </Box>
  );
}

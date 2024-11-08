import React from 'react';
import { Grid, Heading, Box } from '@chakra-ui/react';
import Card from './Card';
import ImageCard from './ImageCard';

const CardRow = ({
  columnCount = [1, 1, 2, 3],
  gap = 8,
  stories,
  titleStory,
  ...props
}) => {
  // Generate responsive template columns
  const templateColumns = columnCount.map(
    count => `repeat(${count}, minmax(0, 1fr))`
  );

  if (props.config.cardStyle === 'image') {
    return (
      <Grid gap={3} templateColumns={templateColumns} bg={'dark'} p={3}>
        {stories.map((story, index) => (
          <ImageCard
            story={story}
            aspectRatio={1 / 1}
            key={index}
            index={index}
          />
        ))}
      </Grid>
    );
  }

  return (
    <Box py={[2, 3, 12, 24]} bg="light">
      <Box maxW={'3xl'} mx={'auto'} textAlign={'center'}>
        {titleStory ? (
          <Heading
            color={'secondary'}
            fontSize={['2xl', '3xl', '5xl']}
            py={[4, 4, 8]}
          >
            {titleStory.title}
          </Heading>
        ) : null}
      </Box>

      <Grid
        templateColumns={templateColumns}
        gap={gap}
        maxW="8xl"
        mx="auto"
        p={[4, 8]}
        {...props}
      >
        {stories.map((story, index) => (
          <Card story={story} aspectRatio={1 / 1} key={index} index={index} />
        ))}
      </Grid>
    </Box>
  );
};

export default CardRow;

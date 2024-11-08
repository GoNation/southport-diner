import React from 'react';
import Fade from 'react-reveal/Fade';
import ClickableBox from 'components/ui/ClickableBox';
import { Grid, Box } from '@chakra-ui/react';

const ClickableBoxes = ({
  stories = [],
  containerClassList = '',
  width = 'w-1/4',
  noClick = false,
}) => {
  // reverse an array
  const reverseArray = array => {
    return array.slice(0).reverse();
  };

  const reversedArray = reverseArray(stories);
  return (
    <Box px="4" className={containerClassList}>
      <Grid
        templateColumns={{
          base: 'repeat(1, 1fr)',
          md: 'repeat(2, 1fr)',
          xl: 'repeat(4, 1fr)',
        }}
        gap={{ base: '2', md: '4' }}
      >
        {reversedArray.map((story, idx) => (
          <Box
            key={story.id}
            position="relative"
            py={{ base: '1', md: '4' }}
            px={{ base: '1', md: '4' }}
          >
            <Fade delay={250 * idx + 1}>
              <ClickableBox
                idx={idx}
                noClick={noClick}
                story={story}
                width={width}
              />
            </Fade>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ClickableBoxes;

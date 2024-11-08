import React from 'react';
import { Box } from '@chakra-ui/react';

import ImageComponent from 'components/ui/ImageComponent';
import ContentComponent from 'components/ContentComponent';
import extractStory from 'helpers/extractStory';

const BackgroundSideBySide = ({ story, config, data }) => {
  const { images } = extractStory(story);

  // Styles
  const styles = {
    wrapper: {
      p: 4,
    },
    backgroundImage: {
      height: [600, '100vh', '100vh', '100vh'],
      backgroundImage: images[0],
      backgroundPosition: 'center',
      backgroundAttachment: ['scroll', 'scroll', 'scroll', 'fixed'],
    },
    contentWrapper: {
      height: '100%',
    },
    contentBox: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      mr: [0, 0, 0, 12],
    },
  };

  return (
    <Box {...styles.wrapper}>
      <Box {...styles.backgroundImage}>
        <Box {...styles.contentWrapper}>
          <Box {...styles.contentBox}>
            <ContentComponent {...story} {...config} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BackgroundSideBySide;

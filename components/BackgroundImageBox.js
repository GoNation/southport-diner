import React from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import extractStory from 'helpers/extractStory';
import Link from 'next/link';

const BackgroundImageBox = ({ story }) => {
  const extractedStory = extractStory(story);
  if (!extractedStory) return null;

  const { title, subtitle, body, images, linkAddress, linkTitle } =
    extractedStory;

  const styles = {
    boxContainer: {
      position: 'relative',
      height: ['300px', '', '', '600px'], // You can adjust this based on your needs
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      p: 4,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: images && images.length > 0 ? `url(${images[0]})` : null,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.35)', // Adjust color and opacity for the overlay
      zIndex: 0,
    },
    content: {
      position: 'relative',
      zIndex: 1,
      color: 'white', // Adjust text color for readability
      textAlign: 'center',
    },
    bodyText: {
      color: 'dark',
      maxWidth: 'sm',
      my: 4,
      fontWeight: 500,
      fontSize: ['md', 'xl', 'xl', 'xl'],
    },
  };

  return (
    <Box {...styles.boxContainer}>
      <Box {...styles.overlay}></Box>
      <Box {...styles.content}>
        {title && (
          <Heading
            color={'white'}
            textTransform={'uppercase'}
            fontWeight={600}
            size={['lg', '', 'xl', '2xl']}
          >
            {title}
          </Heading>
        )}
        {subtitle && <Text mt={2}>{subtitle}</Text>}
        <Box {...styles.bodyText} dangerouslySetInnerHTML={{ __html: body }} />
      </Box>
      {linkAddress && (
        <Box>
          <Link href={linkAddress}>
            <Button variant={'primary'} {...styles.button}>
              {linkTitle || 'Learn More'}
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default BackgroundImageBox;

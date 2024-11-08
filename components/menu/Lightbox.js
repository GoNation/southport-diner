import React, { useState } from 'react';
import { Image as ChakraImage, Box, Text, Button } from '@chakra-ui/react';
import { animated, useSpring } from 'react-spring';

const Lightbox = ({ isOpen, onClose, src, caption }) => {
  const fadeIn = useSpring({
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? 'translateY(0)' : 'translateY(-40px)',
  });

  if (!isOpen) return null;

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex="1000"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="rgba(0, 0, 0, 0.5)"
      overflowY="auto" // Enables scrolling if the content overflows
      p={4} // Padding to ensure content doesn't touch the screen edges
    >
      <animated.div style={fadeIn}>
        <Box
          bg="white"
          p="5"
          maxH="85vh"
          display="flex"
          flexDirection="column"
          border={'2px dotted'}
          borderColor={'primary'}
        >
          <ChakraImage
            src={src}
            alt="Lightbox Image"
            maxH="70vh" // Ensure the image doesn't occupy the entire viewport height
            objectFit="contain" // Maintain aspect ratio while fitting within the box
          />
          {caption && (
            <Box
              p="3"
              textAlign={'center'}
              color={'accent'}
              fontFamily={'heading'}
            >
              <Text>{caption}</Text>
            </Box>
          )}
          <Button onClick={onClose} alignSelf="center" variant="primary">
            Close
          </Button>
        </Box>
      </animated.div>
    </Box>
  );
};

export default Lightbox;

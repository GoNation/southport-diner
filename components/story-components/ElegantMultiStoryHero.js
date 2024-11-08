import React, { useState, useEffect } from 'react';
import { Box, Text, Flex, Heading } from '@chakra-ui/react';
import extractStory from 'helpers/extractStory';

const Slide = ({ image, text, isActive }) => (
  <Box
    h={['90vh', '', '', '100vh']}
    width="100%"
    position="absolute"
    top={0}
    left={0}
    right={0}
    bottom={0}
    opacity={isActive ? 1 : 0}
  >
    {/* Background layer for image */}
    <Box
      h="100%"
      width="100%"
      bgImage={`url(${image})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      transition="transform 16s ease-in-out"
      transform={isActive ? 'scale(1.1)' : 'scale(1)'}
      position="absolute"
      top={0}
      left={0}
      right={0}
      bottom={0}
    />
    {/* Foreground layer for text */}
    <Flex h="100%" w="100%" align="center" justify="center" position="relative">
      <Heading
        px={8}
        fontSize="5xl"
        color="white"
        textAlign="center"
        textShadow={
          '0 0 10px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.5), 0 0 40px rgba(0,0,0,0.5)'
        }
      >
        {text}
      </Heading>
    </Flex>
  </Box>
);

const ElegantMultiStoryHero = ({ slideDuration = 6000, stories }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % stories.length);
    }, slideDuration);

    return () => clearInterval(interval);
  }, [stories.length, slideDuration]);

  return (
    <Box
      position="relative"
      overflow="hidden"
      w="100%"
      h={['90vh', '', '', '100vh']}
      mt={['110px', '', '', 'auto']}
    >
      {stories.map((story, index) => {
        const extractedStory = extractStory(story);
        return (
          <Slide
            key={index}
            image={extractedStory?.images[0]}
            text={extractedStory?.title}
            isActive={index === activeIndex}
          />
        );
      })}
    </Box>
  );
};

export default ElegantMultiStoryHero;

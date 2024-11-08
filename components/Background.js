import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import extractStory from 'helpers/extractStory';
import useMenu from 'hooks/useMenu';
import React from 'react';

export default function Background({ story, config }) {
  const { menu, isLoading } = useMenu(null, config?.poweredList || 1);
  const extractedStory = extractStory(story);
  const { images, title } = extractedStory;

  const reviews = menu[0] ? menu[0].inventory : [];

  return (
    <Box
      minH={'100vh'}
      backgroundImage={`linear-gradient(
          rgba(0, 0, 0, 0.7),
          rgba(0, 0, 0, 0.7)
        ), url(${images[0]})`}
      w={'100%'}
      p={[4, 8, 24]}
    >
      <Box maxW={'3xl'} mx={'auto'}>
        <Heading
          fontSize={['2xl', '4xl', '6xl']}
          w={'full'}
          textAlign={'center'}
          color="white"
          bg={'dark'}
          py={3}
          borderTop={'2px solid'}
          borderBottom={'2px solid'}
          borderColor={'primary'}
        >
          {title}
        </Heading>
        <Box
          mt={8}
          overflowY="scroll"
          height={['calc(100vh - 200px)', 'calc(100vh - 200px)']}
          p={4}
          //   bg="rgba(255, 255, 255, 0.8)" // Semi-transparent background
          borderRadius="lg"
        >
          <VStack spacing={4} align="stretch">
            {reviews.map((review, index) => (
              <Box
                key={index}
                p={4}
                bg="white"
                borderRadius="md"
                shadow="md"
                border={'2px solid'}
                borderColor={'primary'}
              >
                <Text
                  fontSize={['md', 'lg', 'xl']}
                  fontWeight="bold"
                  color={'dark'}
                  fontFamily={'heading'}
                  textTransform={'uppercase'}
                >
                  {review.item.name}
                </Text>
                <Text mt={2}>{review.item.desc}</Text>
              </Box>
            ))}
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}

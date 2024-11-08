import React from 'react';
import { Grid, Box, Text } from '@chakra-ui/react';
import Link from 'next/link';
import extractStory from 'helpers/extractStory';

const HoverBoxes = ({ stories = [] }) => {
  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', '', '', 'repeat(3, 1fr)']}
      gap={6}
      mb={[6, 6, 12, 12]}
    >
      {stories.map((story, index) => {
        const extractedStory = extractStory(story);
        if (!extractedStory) return null;
        const { title, images, linkAddress } = extractedStory;

        return (
          <Link
            href={linkAddress}
            passHref
            key={index}
            target={linkAddress.startsWith('http') ? '_blank' : '_self'}
          >
            <Box
              as="a"
              position="relative"
              height={['300px', '', '', '375px']}
              overflow="hidden"
              cursor="pointer"
              width={'100%'}
              backgroundImage={`url(${images[0]})`}
              backgroundSize="cover"
              backgroundPosition="center"
              transition="0.3s ease-in-out"
              _hover={{
                opacity: 0.8,
                borderColor: 'white',
              }}
              display="block"
            >
              <Text
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                fontSize={['2xl', '3xl']}
                fontWeight="bold"
                color="white"
                textAlign="center"
                zIndex="2"
                transition="transform 0.3s ease-in-out"
                bg={'rgba(0,0,0,.8)'}
                px={4}
                py={1}
                borderRadius={12}
                fontFamily={'heading'}
              >
                {title}
              </Text>
            </Box>
          </Link>
        );
      })}
    </Grid>
  );
};

export default HoverBoxes;

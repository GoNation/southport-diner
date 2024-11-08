import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import extractStory from 'helpers/extractStory';
import cloudinaryString from 'helpers/cloudinary/cloudinaryString';

export default function CTAGrid({ story }) {
  const { links } = story || {};
  if (!links) return null;

  const linkEntries = Object.entries(links);

  const extractedStory = extractStory(story);
  const { firstImage } = extractedStory;
  const bgImageSource = cloudinaryString(null, firstImage?.cloudinaryId, 800);

  return (
    <Box bg={'dark'} py={12} px={4}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        wrap="wrap"
        gap={8}
        maxW={1400}
        mx={'auto'}
      >
        {linkEntries.map(([name, url], index) => {
          const isFirstLink = index === 0;
          const flexValue = isFirstLink ? '1 1 100%' : '1 1 30%';
          const httpsUrl = url.startsWith('https') ? url : null;

          const boxContent = (
            <Flex
              flex={flexValue}
              bgImage={`url('${bgImageSource}')`}
              bgSize="cover"
              bgPosition="center"
              p={8}
              py={[32, 32, 32, 40]}
              alignItems="center"
              justifyContent="center"
              _hover={{
                opacity: 0.9,
                borderColor: 'primary',
                borderWidth: '1px',
              }} // Add a border when hovered
              backgroundPosition={'center'}
              backgroundSize={'cover'}
            >
              <Text
                fontSize={
                  index === 0
                    ? ['xl', '2xl', '3xl', '6xl']
                    : ['xl', '2xl', '3xl', '4xl']
                }
                color="primary"
                textTransform={'uppercase'}
                textAlign={'center'}
              >
                {name}
              </Text>
            </Flex>
          );

          return (
            <Box key={name} flex={flexValue}>
              {httpsUrl ? (
                <Link
                  href={httpsUrl}
                  target={!url.includes('https') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  _hover={{ textDecoration: 'none' }}
                  style={{ width: '100%', height: '100%' }}
                  bg={'transparent'}
                >
                  {boxContent}
                </Link>
              ) : (
                boxContent
              )}
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}

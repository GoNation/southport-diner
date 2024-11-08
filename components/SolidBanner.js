import React from 'react';
import Link from 'next/link';
import { Heading, Box, Flex, Button } from '@chakra-ui/react';

export default function SolidBanner({ story, config }) {
  return (
    <Box bg={'primary'} py={[8, '', '', 20]} px={[2, '', 8]}>
      <Flex
        flexDir={['column', 'row']}
        textAlign={['center', '', 'left']}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box flex={1}>
          <Heading
            color={'white'}
            fontWeight={'bold'}
            fontSize={['2xl', '3x', '4xl', '4xl']}
          >
            {story.title}
          </Heading>
          <Heading
            color={'white'}
            fontWeight={'light'}
            fontSize={'lg'}
            my={[4, 4, 0]}
            mt={[0, 0, 4]}
          >
            {story.subtitle}
          </Heading>
        </Box>
        <Box>
          <Link href={story.linkAddress}>
            <Button
              variant="primary"
              w={['full', 'full', 'full']}
              py={8}
              px={['12', '12', '12', 24]}
            >
              {story.linkTitle}
            </Button>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

import { Box, Text, VStack, Button, Heading } from '@chakra-ui/react';
import extractStory from 'helpers/extractStory';
import Link from 'next/link';

const ElegantTextContentContainer = ({ story }) => {
  const extractedStory = extractStory(story);
  return (
    <Box bg={'light'} py={8}>
      <Box
        p={10}
        bg="white"
        color="dark"
        boxShadow="lg"
        borderRadius="lg"
        border="1px solid"
        borderColor="primary"
        _hover={{ borderColor: 'accent' }}
        maxW={'3xl'}
        pos={'relative'}
        zIndex={1}
        mx={[4, 4, 'auto']}
      >
        <VStack spacing={4} align="center" maxW={'2xl'} mx="auto">
          {extractedStory?.title?.length && (
            <Heading
              fontSize={['2xl', '2xl', '4xl']}
              fontWeight="bold"
              color="primary"
              textAlign={'center'}
              letterSpacing={3}
            >
              {extractedStory?.title || extractedStory?.subtitle || ''}
            </Heading>
          )}

          {extractedStory?.subtitle?.length && (
            <Heading
              fontFamily={'body'}
              color="primary"
              fontSize="sm"
              textTransform="uppercase"
            >
              {extractedStory?.subtitle || ''}
            </Heading>
          )}

          <Box
            dangerouslySetInnerHTML={{
              __html: extractedStory?.body,
            }}
            textAlign={'center'}
          ></Box>
          {extractedStory?.links &&
            Object.keys(extractedStory.links)?.length > 0 && (
              <Button
                variant="primary"
                bg={'accent'}
                borderColor="accent"
                color="primary"
                _hover={{
                  bg: 'primary',
                  color: 'white',
                  borderColor: 'primary',
                }}
              >
                <Link
                  href={extractedStory.linkAddress}
                  target={
                    extractedStory.linkAddress.startsWith('http')
                      ? '_blank'
                      : '_self'
                  }
                >
                  {extractedStory.linkTitle}
                </Link>
              </Button>
            )}
        </VStack>
      </Box>
    </Box>
  );
};

export default ElegantTextContentContainer;

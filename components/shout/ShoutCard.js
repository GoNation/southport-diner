import React from 'react';
import {
  Box,
  Text,
  Flex,
  useMediaQuery,
  Heading,
  Button,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import useShout from 'hooks/useShout';
import { handleGlobalLink } from 'helpers';

export default function ShoutCard({ data }) {
  const { shout, isLoading } = useShout();
  const shoutData = shout || data;

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  const { text, title, createdAt, ctas, image, business } = isLoading
    ? data.shout
    : shoutData?.shout;
  const isDefaultImage = image?.isDefault;
  const cloudinaryId = isDefaultImage
    ? business.avatar.image.cloudinaryId
    : image?.image?.cloudinaryId;
  const shoutImage = `${shoutData.imageBaseUrl}/${cloudinaryId}`;

  return (
    <Box
      p={[8, 8, 8]}
      py={[12, '', '', 12]}
      bg={'gray.800'}
      sx={{
        position: 'relative',
        _before: {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundRepeat: 'repeat',
          opacity: 0.2, // Adjust the opacity as needed
        },
      }}
    >
      <Flex
        direction={isLargerThan768 ? 'row' : 'column'}
        borderRadius="md"
        boxShadow="xl"
        maxW={'4xl'}
        mx={'auto'}
        pos={'relative'}
        // mt={[0, 0, -32]}
        zIndex={99}
      >
        <Box width={isLargerThan768 ? '40%' : '100%'} order={[1, '', '', 1]}>
          {isLoading ? (
            <Skeleton height="300px" width="100%" />
          ) : (
            <Image
              src={shoutImage}
              alt={title}
              w={'100%'}
              h="100%"
              style={{
                padding: '1rem',
              }}
              width={300}
              height={300}
            />
          )}
        </Box>
        <Box p={[2, '', '', 4]} flex="1" order={['', '', '', -1]}>
          {isLoading ? (
            <>
              <Skeleton height="40px" my="4" />
              <SkeletonText mt="4" noOfLines={4} spacing="4" />
            </>
          ) : (
            <>
              <Heading
                as="h3"
                size={['lg', '', 'xl', 'xl']}
                fontFamily="heading"
                color="white"
                p={2}
                textAlign={'left'}
                fontWeight={'bold'}
                textTransform={'none'}
              >
                {title || 'Recent Shout'}
              </Heading>
              <Box>
                <Text
                  fontSize={['md', '', 'lg']}
                  fontFamily="body"
                  color="white"
                  my={2}
                  textAlign={'left'}
                  fontWeight={400}
                >
                  {text}
                </Text>
                {ctas && (
                  <Flex justifyContent={'flex-start'} my={4}>
                    {Object.entries(ctas).map(
                      ([ctaName, url]) =>
                        url && (
                          <Link key={url} {...handleGlobalLink(url)}>
                            <Button
                              colorScheme="blue"
                              variant="solid"
                              mr={2}
                              textTransform={'none'}
                              fontFamily={'body'}
                            >
                              {ctaName}
                            </Button>
                          </Link>
                        )
                    )}
                  </Flex>
                )}
              </Box>
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}

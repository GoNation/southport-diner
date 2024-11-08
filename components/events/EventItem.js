import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import EventDate from './EventDate';
import EventDays from './EventDays';
import cloudinaryString from '../../helpers/cloudinary/cloudinaryString';
import Image from 'next/image';
import { Box, Flex, Text, Heading, AspectRatio } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function EventItem({ event, variantName }) {
  const {
    _id,
    name,
    starts,
    ends,
    description,
    imageBaseUrl,
    imagePrefix,
    ctas,
  } = event;

  const router = useRouter();
  const isDetailVisible = router.asPath.endsWith(`#${_id}`);

  const handleEventClick = () => {
    router.push(`/events#${_id}`);
  };

  return (
    <Box
      key={_id}
      position="relative"
      overflow="hidden"
      cursor="pointer"
      borderRadius="md"
      onClick={handleEventClick}
      py={3}
    >
      <AspectRatio ratio={4 / 3}>
        <Image
          src={cloudinaryString(imageBaseUrl, imagePrefix, 1000)}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </AspectRatio>

      <Heading
        as="h4"
        position="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        p={2}
        color="white"
        fontSize={['4xl', '5xl', '6xl']}
        textTransform="uppercase"
        textAlign="center"
        textShadow="0 2px 4px rgba(0, 0, 0, 0.6)"
      >
        {name}
      </Heading>

      {isDetailVisible && (
        <Flex
          direction="column"
          position="absolute"
          inset={0}
          bg="rgba(0, 0, 0, 0.9)"
          p={4}
        >
          <Box color="white">
            <Heading
              as="h4"
              fontSize={['3xl', '4xl']}
              mb={2}
              textTransform="uppercase"
            >
              {name}
            </Heading>

            <Box>
              {event.eventDays ? (
                <EventDays
                  eventDays={event.eventDays}
                  variantName={variantName}
                />
              ) : (
                <EventDate date={starts} variantName={variantName} />
              )}
            </Box>

            <Text fontSize={['xl', '2xl']} my={2}>
              {`${dayjs(starts).format('h:mm A')} - ${dayjs(ends).format(
                'h:mm A'
              )}`}
            </Text>

            <Text fontSize={['lg', 'xl']} maxW="md">
              {description}
            </Text>

            {ctas && (
              <Flex mt={12}>
                {Object.entries(ctas).map(
                  ([ctaName, url]) =>
                    url && (
                      <Link key={url} href={url} isExternal>
                        <Text
                          as="span"
                          fontWeight="bold"
                          textTransform="uppercase"
                          cursor="pointer"
                          _hover={{ color: 'primary' }}
                          mr={4}
                        >
                          {ctaName}
                        </Text>
                      </Link>
                    )
                )}
              </Flex>
            )}
          </Box>
        </Flex>
      )}
    </Box>
  );
}

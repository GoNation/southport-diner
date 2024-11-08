import React from 'react';
import dayjs from 'dayjs';
import { Box, Flex, Text, Heading, useTheme } from '@chakra-ui/react';
import AspectImage from 'components/AspectImage';
import EventDate from './EventDate';
import EventDays from './EventDays';
import cloudinaryString from '../../helpers/cloudinary/cloudinaryString';

export default function EventCard({ event, variantName }) {
  const {
    name,
    starts,
    ends,
    description,
    imageBaseUrl,
    imagePrefix,
    eventDays,
  } = event;

  const theme = useTheme();

  return (
    <Box
      border="1px"
      borderColor={theme.colors.secondary}
      borderRadius="md"
      overflow="hidden"
      minWidth={300}
      bg={theme.colors.background}
    >
      <AspectImage
        ratio={4 / 3}
        src={cloudinaryString(imageBaseUrl, imagePrefix, 1000)}
        alt={name}
      />

      <Box p={4}>
        <Heading
          as="h4"
          size="lg"
          mb={2}
          color={theme.colors.primary}
          fontWeight={'bold'}
        >
          {name}
        </Heading>

        <Box mb={4} color={'white'}>
          {eventDays ? (
            <EventDays eventDays={eventDays} variantName={variantName} />
          ) : (
            <EventDate date={starts} variantName={variantName} />
          )}
        </Box>

        <Text fontSize="md" color={'white'}>
          {`${dayjs(starts).format('h:mm A')} - ${dayjs(ends).format(
            'h:mm A'
          )}`}
        </Text>

        <Text fontSize="sm" mt={2} color={theme.colors.secondary}>
          {description}
        </Text>
      </Box>
    </Box>
  );
}

import React from 'react';
import { Box, SimpleGrid, Text, Center, useTheme } from '@chakra-ui/react';
import EventItem from './EventItem';
import { BsCalendar } from 'react-icons/bs';
import EventCard from './EventCard';
import useEvents from 'hooks/useEvents';

const Events = ({ businessData, singleEvents = [], recurringEvents = [] }) => {
  const { events, isLoading } = useEvents();
  const theme = useTheme();
  const primaryColor = theme.colors.primary;
  const secondaryColor = theme.colors.secondary;
  const allEvents = singleEvents.concat(recurringEvents);

  if (allEvents.length === 0) {
    // Display a message and an icon when there are no events
    return (
      <Center flexDirection="row" py={32} px={4} alignItems={'center'}>
        <Text fontSize="xl" mt={4} color="dark" fontFamily={'body'}>
          No events currently scheduled. Stay tuned for updates!
        </Text>
      </Center>
    );
  }

  return (
    <SimpleGrid
      columns={{ base: 1, md: 2, lg: 2 }}
      spacing={4}
      p={[4, 8, 12]}
      mx={'auto'}
      bg={'dark'}
    >
      <Box maxW={'3xl'} mx={'auto'}>
        {events.map(event => (
          <Box key={event._id} p={3} w="full">
            <EventCard event={event} slug={businessData.slug} />
          </Box>
        ))}
      </Box>
    </SimpleGrid>
  );
};

export default Events;

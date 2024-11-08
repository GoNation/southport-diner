import React from 'react';
import { VStack, Text, Box, Flex, Heading } from '@chakra-ui/react';

const convertTime12hr = timeString => {
  const [hours, minutes] = timeString.split(':');
  const hoursInt = parseInt(hours, 10);
  const suffix = hoursInt >= 12 ? 'PM' : 'AM';
  const hours12 = hoursInt % 12 || 12; // Converts "00" to "12"
  return `${hours12}:${minutes.substring(0, 2)}${suffix}`;
};

const HoursByDay = ({ hours }) => {
  const dayNames = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const formatDayHours = daySlots => {
    if (daySlots.length === 0) {
      return ['CLOSED']; // Return "CLOSED" if there are no slots
    }
    return daySlots.map(slot => {
      const formattedTime = `${convertTime12hr(slot.open)}-${convertTime12hr(
        slot.close
      )}`;
      return slot.name ? `${slot.name}: ${formattedTime}` : formattedTime;
    });
  };

  return (
    <Flex
      flexWrap={'wrap'}
      justifyContent={'center'}
      backgroundColor={'gray.800'}
      color={'white'}
      py={[8, 8, 24]}
      flexDir={'column'}
      bg={'white'}
      backgroundImage={`url("https://www.transparenttextures.com/patterns/arches.png")`}
    >
      <Box
        width={'100%'}
        bg={'white'}
        maxWidth={'lg'}
        mx={'auto'}
        px={4}
        py={8}
      >
        <Heading
          textAlign={'center'}
          textTransform={'uppercase'}
          mb={4}
          color={'gray.800'}
        >
          Hours
        </Heading>

        {dayNames.map(dayName => {
          const dayKey = dayName.toLowerCase().substring(0, 3);
          const daySlots = hours[dayKey];

          // Adjusted logic to ensure a section is rendered even for days with an empty array.
          return (
            <Flex
              alignItems={'center'}
              key={dayName}
              textAlign={'center'}
              justify={'space-between'}
              width={'100%'}
              borderBottom={'2px solid'}
              borderColor={'gray.800'}
              py={2}
            >
              <Text
                fontWeight="bold"
                textTransform={'uppercase'}
                fontSize={['md', 'lg']}
                py={1}
                px={2}
                color={'gray.800'}
              >
                {dayName}
              </Text>
              <VStack ml={8} align="start" justify={'flex-end'}>
                {daySlots.length === 0 ? (
                  <Text textAlign={'center'} color={'gray.800'}>
                    CLOSED
                  </Text>
                ) : (
                  formatDayHours(daySlots).map((entry, index) => (
                    <Text textAlign={'center'} key={index} color={'gray.800'}>
                      {entry}
                    </Text>
                  ))
                )}
              </VStack>
            </Flex>
          );
        })}
      </Box>
    </Flex>
  );
};

// Example usage:
// <HoursByDay hours={providedHoursObject} />

export default HoursByDay;

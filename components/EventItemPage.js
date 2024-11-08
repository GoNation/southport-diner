import React from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Flex,
  Grid,
  Button,
  Text,
  Image,
  Heading,
  Tag,
  VStack,
  HStack,
} from '@chakra-ui/react';
import cloudinaryString from 'helpers/cloudinary/cloudinaryString';
import buildAvatar from 'helpers/general/buildAvatar';
import buildCover from 'helpers/general/buildCover';

const EventItemPage = ({ foundEvent, business }) => {
  const router = useRouter();

  if (!foundEvent) {
    // Render a component or message indicating that the event is not found
    return <Text>Event not found.</Text>;
  }

  // Extracting event details
  const {
    name,
    description,
    starts,
    ends,
    eventTags,
    imageurl,
    city,
    state,
    street,
    zip,
    ctas,
    imagePrefix,
    imageBaseUrl,
  } = foundEvent;

  // Function to render CTAs
  const renderCTAs = () => {
    return Object.entries(ctas)
      .filter(itm => itm.length > 3)
      .map(([key, url], index) => (
        <Button key={index} as="a" href={url} variant="primary">
          {key}
        </Button>
      ));
  };

  return (
    <Box p={4} py={32}>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
        {/* Event Image and Logo */}
        <Box>
          <Image
            src={
              buildCover(business) ||
              cloudinaryString(imageBaseUrl, imagePrefix, 1000)
            }
            alt={name}
            borderRadius="md"
          />
          {/* Placeholder for Logo */}
          <Box w="100px" h="100px" borderRadius="full" mt={4}>
            <Image src={buildAvatar(business)} />
          </Box>
        </Box>

        {/* Event Details */}
        <VStack align="stretch" spacing={4}>
          <Heading as="h2" size="xl">
            {name}
          </Heading>
          <Text fontSize="md">{description}</Text>

          {/* Event Date and Time */}
          <HStack spacing={2}>
            <Text fontWeight="bold">Starts:</Text>
            <Text>{new Date(starts).toLocaleString()}</Text>
          </HStack>
          <HStack spacing={2}>
            <Text fontWeight="bold">Ends:</Text>
            <Text>{new Date(ends).toLocaleString()}</Text>
          </HStack>

          {/* Address */}
          <Text>{`${street}, ${city}, ${state}, ${zip}`}</Text>

          {/* Event Tags */}
          <HStack spacing={2}>
            {eventTags.map((tag, index) => (
              <Tag key={index} colorScheme="purple">
                {tag}
              </Tag>
            ))}
          </HStack>

          {/* CTAs */}
          {renderCTAs()}

          {/* Go Back Button */}
          <Button
            bg={'dark'}
            color={'white'}
            border={'1px solid'}
            borderColor={'dark'}
            _hover={{
              bg: 'white',
              color: 'dark',
            }}
            onClick={() => router.back()}
          >
            Go Back
          </Button>
        </VStack>
      </Grid>
    </Box>
  );
};

export default EventItemPage;

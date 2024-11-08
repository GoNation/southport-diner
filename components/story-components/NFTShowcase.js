import React, { useState, useEffect } from 'react';
import { Box, Heading, Text, Button } from '@chakra-ui/react';
import SimpleGrid from './SimpleGrid';
import fetchGoNationData from 'helpers/fetchers/fetchGoNationData';
import findStoriesByTag from 'helpers/general/findStoriesByTag';
import isEqual from 'lodash/isEqual';

export default function NFTShowcase({
  businessId,
  title,
  subtitle,
  pills = ['All', 'Restaurant Of The Year', 'Some other one'],
  data,
}) {
  const [selectedPill, setSelectedPill] = useState(0);
  const [clientFetchedStories, setClientFetchedStories] = useState([]);
  const [storiesToRender, setStoriesToRender] = useState(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchGoNationData({
          stories: true,
          businessId: businessId,
        });
        if (
          response.storiesData &&
          !isEqual(response.storiesData.general, data)
        ) {
          setClientFetchedStories(response.storiesData.general);
          setStoriesToRender(response.storiesData.general);
        } else {
          setStoriesToRender(data);
        }
      } catch (error) {
        console.error('Failed to fetch data:', error);
        setStoriesToRender(data); // Fallback to static data on error
      }
    };

    if (businessId) {
      fetchData();
    }
  }, [businessId, data]);

  return (
    <Box bg={'dark'} textAlign={'center'} py={32} px={[4, 4]}>
      <Heading
        as="h1"
        size={['lg', '3xl', '3xl', '3xl']}
        color="primary"
        fontWeight={'light'}
      >
        {title}
      </Heading>
      <Text fontSize="md" color="white">
        {subtitle}
      </Text>
      <Box
        px={4}
        mt={8}
        overflowX="scroll"
        whiteSpace="nowrap"
        css={{
          '::-webkit-scrollbar': {
            display: 'none', // For Webkit browsers (Chrome, Safari)
          },
          '-ms-overflow-style': 'none', // For Internet Explorer and Edge
          scrollbarWidth: 'none', // For Firefox
        }}
      >
        {['All', ...pills].map((pill, index) => (
          <Button
            key={index}
            variant={selectedPill === index ? 'primary' : 'outline'}
            size="sm"
            m={2}
            px={4}
            py={5}
            minWidth="100px"
            onClick={() => setSelectedPill(index)}
            display="inline-flex"
            color={selectedPill !== index ? 'primary' : 'dark'}
            borderColor={selectedPill !== index ? 'primary' : 'dark'}
            _hover={
              selectedPill !== index && {
                bg: 'primary',
                color: 'dark', // Set the text color to primary when hovered
                border: '1px solid',
                borderColor: 'primary',
              }
            }
          >
            {pill}
          </Button>
        ))}
      </Box>
      <SimpleGrid
        stories={
          selectedPill === 0
            ? storiesToRender.filter(story => story?.tags?.length > 0).reverse()
            : findStoriesByTag(pills[selectedPill - 1], storiesToRender)
        }
      />
    </Box>
  );
}

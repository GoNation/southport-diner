import React from 'react';
import { Box, Text, VStack, Heading, useStyleConfig } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import useMenu from 'hooks/useMenu';

const styles = {
  outerContainer: {
    px: { base: 2, md: 12 },
    py: [8, 8, 32],
    bg: 'gray.200',
  },
  testimonialContainer: {
    maxW: { base: 'xl', md: '3xl' },
    mx: 'auto',
  },
  quoteIcon: {
    color: 'dark',
    size: '42px',
  },
  testimonialHeading: {
    variant: 'sideBySideLarge',
    textAlign: 'center',
  },
  testimonialText: {
    fontSize: 'md',
    color: 'dark',
    textAlign: 'left',
    px: 8,
  },
  authorText: {
    color: 'dark',
    px: 8,
  },
};

export default function Reviews({ config = {} }) {
  const poweredList = config.poweredList || 3;
  const { menu, isLoading } = useMenu(null, poweredList);

  if (isLoading) {
    return null;
  }

  return (
    <Box {...styles.outerContainer}>
      <Heading as="h4" {...styles.testimonialHeading}>
        {menu[0]?.section?.name}
      </Heading>
      <Carousel showStatus={false} autoPlay infiniteLoop showThumbs={false}>
        {menu[0]?.inventory
          ?.filter(itm => itm)
          .map(itm => (
            <VStack
              key={itm.item.item_id}
              spacing={4}
              {...styles.testimonialContainer}
            >
              {/* <Box position="absolute" top={{ md: '0' }} left="4">
              <FaQuoteLeft {...styles.quoteIcon} />
            </Box> */}
              <Text {...styles.testimonialText}>{itm.item.name}</Text>
              <Text {...styles.authorText}>{itm.item.desc}</Text>
              {/* <Box position="absolute" bottom={{ md: '-10' }} right="4">
              <FaQuoteRight {...styles.quoteIcon} />
            </Box> */}
            </VStack>
          ))}
      </Carousel>
    </Box>
  );
}

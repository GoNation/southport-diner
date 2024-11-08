import React, { useState, useEffect } from 'react';
import { Box, Flex, Link as ChakraLink } from '@chakra-ui/react';
import { FaPhoneAlt, FaDirections } from 'react-icons/fa';
import getGoogleString from 'helpers/printing/getGoogleString';

export default function CallDirections({ business }) {
  const [showCallDirections, setShowCallDirections] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowCallDirections(false);
      } else {
        setShowCallDirections(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bg="rgba(0, 0, 0, 0.9)"
      display={{ base: 'flex', md: 'none' }}
      justifyContent="space-betwee8in"
      px={4}
      py={2}
      color={'white'}
      borderTop={'1px solid white'}
      zIndex={99999}
      transition="all 0.3s ease-in-out"
      opacity={showCallDirections ? 1 : 0}
      transform={`translateY(${showCallDirections ? 0 : '100%'})`}
    >
      <ChakraLink
        flex="1"
        href={`tel:${business.phone}`}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex justifyContent="center" alignItems="center">
          <Box as={FaPhoneAlt} mr={2} />
          Call
        </Flex>
      </ChakraLink>
      <ChakraLink
        flex="1"
        href={getGoogleString({ ...business })}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex justifyContent="center" alignItems="center">
          <Box as={FaDirections} mr={3} />
          Directions
        </Flex>
      </ChakraLink>
    </Box>
  );
}

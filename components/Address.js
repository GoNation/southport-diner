import printAddress from 'helpers/printing/printAddress';
import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import getGoogleString from 'helpers/printing/getGoogleString';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Address({ business, style, fill }) {
  const useIcon = true;
  return (
    <Text
      as="a"
      href={getGoogleString(business)}
      target="_blank"
      rel="noopener noreferrer"
      display={'inline-flex'}
      alignItems={'center'}
      sx={{
        ...style,
      }}
    >
      {useIcon && (
        <Box as="span" mr={1}>
          <FaMapMarkerAlt fill={fill || '#fff'} />
        </Box>
      )}

      {printAddress(business)}
    </Text>
  );
}

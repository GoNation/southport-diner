import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { FaPhone } from 'react-icons/fa';
import { formatPhone } from 'helpers';

const Phone = ({ phone, children, fill, ...props }) => {
  if (!phone) return null;
  const showIcon = true;
  return (
    <Text
      as="a"
      {...props}
      href={`tel:${phone}`}
      display={'flex'}
      align={'center'}
    >
      {showIcon && (
        <Box as="span" display={'flex'} alignItems={'center'} mr={1}>
          <FaPhone fill={fill || '#fff'} />
        </Box>
      )}

      {children || formatPhone(phone)}
    </Text>
  );
};

export default Phone;

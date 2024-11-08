import React from 'react';
import { Text } from '@chakra-ui/react';

export default function Email({ address = null }) {
  if (!address) return null;
  return (
    <Text
      as="a"
      href={`mailto:${address}`}
      whiteSpace="nowrap"
      overflow="hidden"
      textOverflow="ellipsis"
    >
      {address}
    </Text>
  );
}

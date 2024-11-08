import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

export default function EmbeddedYoutube({ config, story }) {
  const { id } = config;
  if (!id) return null;
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      minH={'80vh'}
      bg={'dark'}
    >
      <iframe
        width="800"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </Flex>
  );
}

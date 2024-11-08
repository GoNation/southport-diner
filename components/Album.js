import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';

const Album = ({ album, coverPhotoIndex = 0, customStyling, onAlbumClick }) => {
  const coverPhoto = album.photos[coverPhotoIndex];

  const albumNameStyle = {
    position: 'absolute',
    zIndex: 1,
    color: 'white',
    bg: 'primary',
    width: '100%',
    bottom: 0,
    transition: 'top 0.3s ease, transform 0.3s ease',
    textAlign: 'center',
    fontSize: ['sm', 'md'],
    fontFamily: 'heading',
    py: 2,
  };

  return (
    <Box
      mx={4}
      mb={8}
      rounded="xs"
      cursor="pointer"
      onClick={onAlbumClick}
      className={customStyling}
      shadow={'lg'}
      border={'1px solid'}
      borderColor={'light'}
    >
      <Flex
        position="relative"
        w="full"
        h={{ base: '14rem', md: '20rem', lg: '24rem' }}
        rounded="xs"
        overflow="hidden"
        shadow="sm"
        // mb={4}
        justify="center"
        align="center"
        transition="all 0.3s ease" // Ensure smooth transition
      >
        {/* Cover Photo */}
        <Image
          src={coverPhoto.imageUrl}
          alt={coverPhoto.caption || 'Album Cover'}
          objectFit="cover"
          w="full"
          h="full"
        />
        {/* Album Name */}
        <Text className="albumName" sx={albumNameStyle}>
          {album.name}
        </Text>
      </Flex>
    </Box>
  );
};

export default Album;

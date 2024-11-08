import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Masonry from './gallery/Masonry';
import Album from './Album';
import { useRouter } from 'next/router';
import { Box, Grid, Button, Text, Heading } from '@chakra-ui/react';

export default function AlbumGallery({
  galleryData,
  styles,
  filteredOutAlbums,
  config,
}) {
  const router = useRouter();
  const [activeAlbum, setActiveAlbum] = useState(null);

  const handleAlbumClick = album => setActiveAlbum(album);

  const handleBackClick = () => setActiveAlbum(null);

  const albumNameStyle = {
    fontSize: ['xl', '2xl', '3xl', '4xl', '5xl'],
    color: 'primary',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'accent',
  };

  return (
    <Box
      px={[2, 4, 12]}
      py={12}
      className="with-texture"
      textAlign={['center', 'left']}
      bg={'dark'}
    >
      {activeAlbum ? (
        <>
          <Button variant={'primary'} onClick={handleBackClick} mb={8}>
            <FaArrowLeft />
            <Box ml={4}>Go Back to Albums</Box>
          </Button>
          <Heading {...albumNameStyle}>{activeAlbum.name}</Heading>
          <Masonry
            data={[activeAlbum]}
            config={{
              styles: styles,
            }}
          />
        </>
      ) : (
        <Grid
          templateColumns={[
            'repeat(1, 1fr)',
            'repeat(1, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
          ]}
          maxW="1440px"
          mx="auto"
        >
          {galleryData?.length &&
            galleryData
              .filter(a => {
                console.log('album is: ', a.name, ' and id is: ', a._id);
                return (
                  a._id.includes('abm-') &&
                  !a.name.toLowerCase().includes('shouts')
                );
              })
              .map(album => (
                <Album
                  key={album.id}
                  album={album}
                  onAlbumClick={() => handleAlbumClick(album)}
                />
              ))}
        </Grid>
      )}
    </Box>
  );
}

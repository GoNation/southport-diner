import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';

const MenuCell = ({ onCellClick, section, inventory }) => {
  const defaultCellBG =
    'https://res.cloudinary.com/gonation/gonation.data.prod/default/img-sec-cover-full.png';

  const hasImage =
    section.imageUrl !== defaultCellBG && !section.imageUrl.includes('copy');

  const imageStyles = hasImage
    ? {
        position: 'absolute',
        zIndex: '9',
        left: '0',
        top: '0',
        right: '0',
        bottom: '0',
        background: 'rgba(0,0,0,.4)',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'none',
      }
    : {};
  return (
    <Box
      as="div"
      className={`section-cell ${section.name}`}
      onClick={() => {
        return onCellClick({ section, inventory });
      }}
      position="relative"
      overflow="hidden"
    >
      <Box className="menuCell" mb={4}>
        <Box className="cellImageContainer" position="relative">
          {hasImage && (
            <Image
              style={{
                height: '300px',
                objectFit: 'cover',
                wdith: '100%',
              }}
              width={800}
              height={400}
              className="cellImage"
              src={section.imageUrl}
              alt="Menu Section Display"
              _hover={{
                transform: 'scale(1.1)',
                transition: 'transform 0.5s ease-in-out',
              }}
            />
          )}
          <Text
            color="white"
            fontFamily="heading"
            fontWeight={'bold'}
            textTransform={'uppercase'}
            background="black"
            px={5}
            py={8}
            fontSize={['4xl', '', '5xl']}
            textAlign={'center'}
            cursor={'pointer'}
            borderTop={'8px solid'}
            borderBottom={'8px solid'}
            borderColor={'secondary'}
            height={['100%', '']}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            {...imageStyles}
            _hover={{
              background: 'dark',
              transition: 'all 0.5s ease-in-out',
            }}
          >
            {section.name}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuCell;

import React from 'react';
import { Box, Link, Icon } from '@chakra-ui/react';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa'; // Importing Instagram icon

export default function SponsorCard({ title, images, linkAddress }) {
  return (
    <Box
      position="relative"
      rounded="lg"
      shadow="lg"
      textAlign="center"
      overflow="hidden"
      width={'100%'}
    >
      <Box
        position="relative"
        width="100%"
        filter="grayscale(100%)" // Logo in grayscale initially
        _hover={{ filter: 'none' }} // Full color on hover
        height={['200px', '250px']}
      >
        <Image src={images[0]} alt={title} objectFit="contain" layout="fill" />
      </Box>
      <Box mt={3}>
        {linkAddress.includes('instagram') && (
          <Link href={linkAddress} isExternal>
            <Icon as={FaInstagram} color="pink.600" w={10} h={10} />
          </Link>
        )}
      </Box>
    </Box>
  );
}
